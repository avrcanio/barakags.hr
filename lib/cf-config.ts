import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const ZONE_NAME = "barakags.hr";

const TOKEN_ENV_KEYS = [
  "CF_ANALYTICS_API_TOKEN",
  "CF_API_TOKEN",
  "CF_DNS_API_TOKEN",
  "CLOUDFLARE_API_TOKEN",
] as const;

/** Učitaj .env datoteke (postojeće process.env varijable se ne prepisuju). */
export function loadEnvFiles(paths: string[]): void {
  for (const envPath of paths) {
    if (!existsSync(envPath)) continue;
    const content = readFileSync(envPath, "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (key && process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  }
}

/** barakags.hr/.env + traefik/.env (zajednički CF token). */
export function loadProjectEnv(): void {
  const projectRoot = process.cwd();
  const stacksRoot = resolve(projectRoot, "..");
  loadEnvFiles([
    resolve(projectRoot, ".env"),
    resolve(stacksRoot, "traefik/.env"),
  ]);
}

function readTokenFromSecretFile(): string | null {
  const secretPath = resolve(
    process.cwd(),
    "../traefik/secrets/cloudflare/cloudflare_certbot_allzones.api-token"
  );
  if (!existsSync(secretPath)) return null;
  const token = readFileSync(secretPath, "utf8").trim();
  return token || null;
}

export function getCloudflareToken(): string | null {
  for (const key of TOKEN_ENV_KEYS) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }
  return readTokenFromSecretFile();
}

export async function resolveZoneId(
  token: string,
  zoneName = ZONE_NAME
): Promise<string> {
  const fromEnv =
    process.env.CF_ZONE_ID_BARAKAGS?.trim() || process.env.CF_ZONE_ID?.trim();
  if (fromEnv) return fromEnv;

  const url = new URL("https://api.cloudflare.com/client/v4/zones");
  url.searchParams.set("name", zoneName);

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(`Cloudflare zones API HTTP ${res.status}: ${await res.text()}`);
  }

  const json = (await res.json()) as {
    success: boolean;
    result: { id: string }[];
    errors?: { message: string }[];
  };

  if (!json.success || !json.result?.[0]?.id) {
    const msg = json.errors?.map((e) => e.message).join("; ") ?? "zone not found";
    throw new Error(`Cloudflare zone "${zoneName}": ${msg}`);
  }

  return json.result[0].id;
}
