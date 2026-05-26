"use client";

import { useState, type FormEvent } from "react";
import type { Locale, Messages, JobPosition } from "@/lib/i18n";

type Props = {
  locale: Locale;
  t: Messages;
};

const positions: JobPosition[] = ["excavator", "fiber", "helper"];

export function ApplyForm({ locale, t }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const body = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      phone: fd.get("phone"),
      position: fd.get("position"),
      note: fd.get("note"),
      website: fd.get("website"),
      locale,
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="apply" className="section applySection">
      <div className="container">
        <div className="applyGrid">
          <div>
            <p className="sectionLabel">{t.company}</p>
            <h2 className="sectionTitle">{t.apply.heading}</h2>
            <p className="applyIntro">{t.apply.subheading}</p>
            <div className="applyAlt" style={{ marginTop: "1.5rem" }}>
              <a href={`tel:${t.phone}`} className="btn btnOutline">
                {t.apply.call}: {t.phoneDisplay}
              </a>
              <a href={`mailto:${t.email}`} className="btn btnOutline">
                {t.apply.write}
              </a>
            </div>
          </div>

          <div>
            {status === "success" && (
              <p className="formMessage success" role="status">
                {t.apply.success}
              </p>
            )}
            {status === "error" && (
              <p className="formMessage error" role="alert">
                {t.apply.error}
              </p>
            )}

            <form className="applyForm" onSubmit={onSubmit} noValidate>
              <div className="hpField" aria-hidden>
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="formRow two">
                <div className="formGroup">
                  <label htmlFor="firstName">{t.apply.firstName} *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    maxLength={80}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="lastName">{t.apply.lastName} *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    maxLength={80}
                  />
                </div>
              </div>

              <div className="formGroup">
                <label htmlFor="phone">{t.apply.phone} *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  maxLength={30}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="position">{t.apply.position} *</label>
                <select id="position" name="position" required defaultValue="">
                  <option value="" disabled>
                    {t.apply.positionPlaceholder}
                  </option>
                  {positions.map((key) => (
                    <option key={key} value={key}>
                      {t.apply.positions[key]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="note">{t.apply.note}</label>
                <textarea
                  id="note"
                  name="note"
                  placeholder={t.apply.notePlaceholder}
                  maxLength={2000}
                />
              </div>

              <button
                type="submit"
                className="btn btnPrimary"
                disabled={status === "loading"}
              >
                {status === "loading" ? t.apply.submitting : t.apply.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
