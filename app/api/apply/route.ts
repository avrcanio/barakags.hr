import { NextResponse } from "next/server";
import { sendApplicationEmail, type ApplyPayload } from "@/lib/mail";
import { checkRateLimit } from "@/lib/rate-limit";
import { isLocale, type JobPosition } from "@/lib/i18n";

const positions: JobPosition[] = ["excavator", "fiber", "helper"];

function isPosition(v: string): v is JobPosition {
  return positions.includes(v as JobPosition);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;

  if (typeof b.website === "string" && b.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const firstName = String(b.firstName ?? "").trim();
  const lastName = String(b.lastName ?? "").trim();
  const phone = String(b.phone ?? "").trim();
  const position = String(b.position ?? "");
  const note =
    typeof b.note === "string" ? b.note.trim().slice(0, 2000) : "";
  const locale = String(b.locale ?? "hr");

  if (!firstName || !lastName || !phone || !isPosition(position)) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  if (firstName.length > 80 || lastName.length > 80 || phone.length > 30) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  const payload: ApplyPayload = {
    firstName,
    lastName,
    phone,
    position,
    note: note || undefined,
    locale: isLocale(locale) ? locale : "hr",
  };

  const result = await sendApplicationEmail(payload);

  if (!result.ok) {
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
