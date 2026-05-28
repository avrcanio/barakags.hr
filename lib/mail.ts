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

function parseRecipients(value: string | undefined): string[] {
  if (!value?.trim()) return [];
  return value.split(",").map((e) => e.trim()).filter(Boolean);
}

export function getTransport() {
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

export async function sendEmail(opts: {
  to: string | string[];
  subject: string;
  text: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const transport = getTransport();
  if (!transport) {
    return { ok: false, error: "SMTP not configured" };
  }

  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER;
  if (!from) {
    return { ok: false, error: "SMTP not configured" };
  }

  try {
    await transport.sendMail({
      from,
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
    });
    return { ok: true };
  } catch (err) {
    console.error("sendEmail:", err);
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Send failed",
    };
  }
}

const positionLabels: Record<JobPosition, string> = {
  excavator: "Bagerist / Rukovatelj strojeva",
  fiber: "Monter optičkih mreža",
  helper: "Pomoćni radnik",
};

export async function sendApplicationEmail(
  data: ApplyPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const recipients = parseRecipients(process.env.MAIL_TO);
  const to =
    recipients.length > 0
      ? recipients
      : [process.env.SMTP_USER].filter((e): e is string => Boolean(e));
  if (to.length === 0) {
    return { ok: false, error: "SMTP not configured" };
  }

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

  return sendEmail({ to, subject, text });
}
