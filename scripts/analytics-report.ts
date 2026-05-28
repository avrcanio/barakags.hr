/**
 * Dnevni izvještaj posjećenosti barakags.hr (Cloudflare Analytics → e-mail).
 * Ručno: npm run analytics:report
 */
import { sendEmail } from "../lib/mail";
import {
  getCloudflareToken,
  loadProjectEnv,
  resolveZoneId,
} from "../lib/cf-config";

const CF_GRAPHQL = "https://api.cloudflare.com/client/v4/graphql";

type DayRange = {
  dateYmd: string;
  dateLabel: string;
  startUtc: string;
  endUtc: string;
};

type DailyStats = {
  requests: number;
  uniques: number;
};

type CountryRow = {
  country: string;
  count: number;
};

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function getDatePartsInTz(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);
  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? "0");
  return { year: get("year"), month: get("month"), day: get("day") };
}

function addCalendarDays(
  y: number,
  m: number,
  d: number,
  days: number
): { year: number; month: number; day: number } {
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return {
    year: dt.getUTCFullYear(),
    month: dt.getUTCMonth() + 1,
    day: dt.getUTCDate(),
  };
}

/** UTC trenutak za zidno vrijeme u danoj vremenskoj zoni. */
function wallTimeToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  timeZone: string
): Date {
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, second);
  const date = new Date(utcGuess);
  const inTz = date.toLocaleString("en-US", { timeZone });
  const asLocal = new Date(inTz);
  const offsetMs = asLocal.getTime() - date.getTime();
  return new Date(utcGuess - offsetMs);
}

function getYesterdayRange(timeZone: string): DayRange {
  const today = getDatePartsInTz(new Date(), timeZone);
  const y = addCalendarDays(today.year, today.month, today.day, -1);
  const next = addCalendarDays(y.year, y.month, y.day, 1);
  const start = wallTimeToUtc(y.year, y.month, y.day, 0, 0, 0, timeZone);
  const end = wallTimeToUtc(next.year, next.month, next.day, 0, 0, 0, timeZone);

  return {
    dateYmd: `${y.year}-${pad2(y.month)}-${pad2(y.day)}`,
    dateLabel: `${pad2(y.day)}.${pad2(y.month)}.${y.year}.`,
    startUtc: start.toISOString(),
    endUtc: end.toISOString(),
  };
}

async function cfGraphql<T>(
  token: string,
  query: string,
  variables: Record<string, unknown>
): Promise<T> {
  const res = await fetch(CF_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Cloudflare HTTP ${res.status}: ${await res.text()}`);
  }

  const json = (await res.json()) as {
    data?: T;
    errors?: { message: string }[];
  };

  if (json.errors?.length) {
    throw new Error(
      `Cloudflare GraphQL: ${json.errors.map((e) => e.message).join("; ")}`
    );
  }

  if (!json.data) {
    throw new Error("Cloudflare GraphQL: empty response");
  }

  return json.data;
}

async function fetchDailyStats(
  token: string,
  zoneId: string,
  dateYmd: string
): Promise<DailyStats> {
  const query = `
    query DailyStats($zoneTag: string!, $date: Date!) {
      viewer {
        zones(filter: { zoneTag: $zoneTag }) {
          httpRequests1dGroups(filter: { date: $date }, limit: 1) {
            sum { requests }
            uniq { uniques }
          }
        }
      }
    }
  `;

  type Response = {
    viewer: {
      zones: {
        httpRequests1dGroups: {
          sum: { requests: number };
          uniq: { uniques: number };
        }[];
      }[];
    };
  };

  const data = await cfGraphql<Response>(token, query, {
    zoneTag: zoneId,
    date: dateYmd,
  });

  const group = data.viewer.zones[0]?.httpRequests1dGroups[0];
  return {
    requests: group?.sum?.requests ?? 0,
    uniques: group?.uniq?.uniques ?? 0,
  };
}

async function fetchCountries(
  token: string,
  zoneId: string,
  startUtc: string,
  endUtc: string
): Promise<CountryRow[]> {
  const query = `
    query Countries($zoneTag: string!, $start: Time!, $end: Time!) {
      viewer {
        zones(filter: { zoneTag: $zoneTag }) {
          httpRequestsAdaptiveGroups(
            filter: {
              datetime_geq: $start
              datetime_lt: $end
            }
            orderBy: [count_DESC]
            limit: 15
          ) {
            count
            dimensions {
              clientCountryName
            }
          }
        }
      }
    }
  `;

  type Response = {
    viewer: {
      zones: {
        httpRequestsAdaptiveGroups: {
          count: number;
          dimensions: { clientCountryName: string };
        }[];
      }[];
    };
  };

  const data = await cfGraphql<Response>(token, query, {
    zoneTag: zoneId,
    start: startUtc,
    end: endUtc,
  });

  return (data.viewer.zones[0]?.httpRequestsAdaptiveGroups ?? []).map((row) => ({
    country: row.dimensions.clientCountryName?.trim() || "Nepoznato",
    count: row.count,
  }));
}

function buildReportText(
  range: DayRange,
  stats: DailyStats,
  countries: CountryRow[],
  timeZone: string
): string {
  const lines = [
    "Dnevni izvještaj posjećenosti — barakags.hr",
    "",
    `Datum (jučer, ${timeZone}): ${range.dateLabel}`,
    `Raspon (UTC): ${range.startUtc} — ${range.endUtc}`,
    "",
    `Jedinstveni posjetitelji: ${stats.uniques}`,
    `Ukupno zahtjeva: ${stats.requests}`,
    "",
    "Top zemlje (zahtjevi):",
  ];

  if (countries.length === 0) {
    lines.push("  (nema podataka za razdoblje)");
  } else {
    for (const row of countries) {
      lines.push(`  ${row.country} — ${row.count}`);
    }
  }

  lines.push(
    "",
    "Napomena: brojevi dolaze iz Cloudflare Analytics (procjena; botovi nisu filtrirani).",
    "",
    `Generirano: ${new Date().toISOString()}`
  );

  return lines.join("\n");
}

async function main(): Promise<void> {
  loadProjectEnv();

  const preview = process.argv.includes("--preview");
  const reportTo = process.env.ANALYTICS_REPORT_TO ?? "info@barakags.hr";
  const timeZone = process.env.ANALYTICS_REPORT_CRON_TZ ?? "Europe/Zagreb";

  if (preview) {
    const range = getYesterdayRange(timeZone);
    const stats: DailyStats = { uniques: 12, requests: 87 };
    const countries: CountryRow[] = [
      { country: "HR", count: 34 },
      { country: "DE", count: 18 },
      { country: "SI", count: 9 },
      { country: "BA", count: 6 },
      { country: "RS", count: 3 },
    ];
    const text = [
      "=== TEST — primjer izgleda (nije stvarni Cloudflare izvještaj) ===",
      "",
      buildReportText(range, stats, countries, timeZone),
    ].join("\n");
    const subject = `[barakags.hr] Posjećenost — ${range.dateLabel} [TEST]`;

    console.log(text);
    console.log("\n--- Slanje maila ---\n");

    const result = await sendEmail({ to: reportTo, subject, text });
    if (!result.ok) {
      console.error("Failed to send preview:", result.error);
      process.exit(1);
    }
    console.log(`Preview sent to ${reportTo}`);
    return;
  }

  const token = getCloudflareToken();

  if (!token) {
    console.error(
      "Missing Cloudflare token. Koristi traefik/.env (CF_DNS_API_TOKEN) ili secrets/cloudflare/cloudflare_certbot_allzones.api-token"
    );
    process.exit(1);
  }

  const zoneId = await resolveZoneId(token);
  const range = getYesterdayRange(timeZone);
  console.log(`Fetching analytics for ${range.dateYmd} (${timeZone}), zone ${zoneId}…`);

  const [stats, countries] = await Promise.all([
    fetchDailyStats(token, zoneId, range.dateYmd),
    fetchCountries(token, zoneId, range.startUtc, range.endUtc),
  ]);

  const text = buildReportText(range, stats, countries, timeZone);
  const subject = `[barakags.hr] Posjećenost — ${range.dateLabel}`;

  const result = await sendEmail({ to: reportTo, subject, text });

  if (!result.ok) {
    console.error("Failed to send report:", result.error);
    process.exit(1);
  }

  console.log(`Report sent to ${reportTo}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
