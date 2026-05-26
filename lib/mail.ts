import nodemailer from "nodemailer";
import type { JobPosition } from "./i18n";

export type ApplyPayload = {
  firstName: string;
  lastName: string;
  phone: string;
  position: JobPosition;
  note?: string;
  locale: string;
};

function getTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

const positionLabels: Record<JobPosition, string> = {
  excavator: "Bagerist / Rukovatelj strojeva",
  fiber: "Monter optičkih mreža",
  helper: "Pomoćni radnik",
};

export async function sendApplicationEmail(
  data: ApplyPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const transport = getTransport();
  if (!transport) {
    return { ok: false, error: "SMTP not configured" };
  }

  const to = process.env.MAIL_TO ?? process.env.SMTP_USER;
  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER;

  const subject = `[barakags.hr] Nova prijava — ${data.firstName} ${data.lastName}`;
  const text = [
    "Nova prijava s web stranice barakags.hr",
    "",
    `Ime: ${data.firstName}`,
    `Prezime: ${data.lastName}`,
    `Telefon: ${data.phone}`,
    `Pozicija: ${positionLabels[data.position]}`,
    data.note ? `Napomena: ${data.note}` : null,
    `Jezik stranice: ${data.locale}`,
    `Vrijeme: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transport.sendMail({ from, to, subject, text });
    return { ok: true };
  } catch (err) {
    console.error("sendApplicationEmail:", err);
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Send failed",
    };
  }
}
