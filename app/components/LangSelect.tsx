"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

type Labels = { hr: string; en: string; de: string; aria: string };

export function LangSelect({ locale, labels }: { locale: Locale; labels: Labels }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const current = labels[locale];

  function pick(next: Locale) {
    if (next === locale) {
      setOpen(false);
      return;
    }
    router.push(`/${next}`);
    setOpen(false);
  }

  return (
    <div className="langSelect" ref={ref}>
      <button
        type="button"
        className="langSelectBtn"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={labels.aria}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="langSelectCurrent">{current}</span>
        <span className="langSelectChevron" aria-hidden>
          ▼
        </span>
      </button>
      {open ? (
        <ul className="langSelectMenu" role="listbox">
          {locales.map((loc) => (
            <li key={loc} role="none">
              <button
                type="button"
                role="option"
                aria-selected={loc === locale}
                className={`langSelectOption${loc === locale ? " langSelectOptionActive" : ""}`}
                onClick={() => pick(loc)}
              >
                {labels[loc]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
