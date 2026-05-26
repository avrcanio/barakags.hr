"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale, Messages } from "@/lib/i18n";
import { LangSelect } from "./LangSelect";

type Props = {
  locale: Locale;
  t: Messages;
};

export function SiteHeader({ locale, t }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: "home", href: `/${locale}#home`, label: t.nav.home },
    { id: "about", href: `/${locale}#about`, label: t.nav.about },
    { id: "job", href: `/${locale}#job`, label: t.nav.job },
    { id: "apply", href: `/${locale}#apply`, label: t.nav.apply },
    { id: "contact", href: `/${locale}#contact`, label: t.nav.contact },
  ];

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <>
      <header className="siteHeader">
        <div className="siteHeaderInner">
          <Link href={`/${locale}#home`} className="siteLogo" onClick={closeMobile}>
            <Image
              src="/logo.png"
              alt={t.company}
              width={120}
              height={40}
              priority
              style={{ height: "2.5rem", width: "auto" }}
            />
          </Link>

          <nav aria-label="Main">
            <ul className="siteNav">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="headerActions">
            <a href={`/${locale}#apply`} className="btn btnPrimary btnSm">
              {t.hero.ctaApply}
            </a>
            <LangSelect
              locale={locale}
              labels={{
                hr: t.langHr,
                en: t.langEn,
                de: t.langDe,
                aria: t.langLabel,
              }}
            />
            <button
              type="button"
              className="navToggle"
              aria-expanded={mobileOpen}
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav
        className={`mobileNav${mobileOpen ? " open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!mobileOpen}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} onClick={closeMobile}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
