import Image from "next/image";
import type { Messages } from "@/lib/i18n";
import { FACEBOOK_URL } from "@/lib/site";

type Props = { t: Messages };

export function ContactFooter({ t }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="siteFooter">
      <div className="container">
        <div className="footerGrid">
          <div className="footerBrand">
            <Image
              src="/logo.png"
              alt={t.company}
              width={160}
              height={48}
              style={{ height: "2.75rem", width: "auto" }}
            />
            <p className="footerSlogan">{t.slogan}</p>
            <p>
              {t.company} — {t.domain}
            </p>
          </div>

          <div className="footerContact">
            <p>
              <span>{t.contact.emailLabel}</span>
              <a href={`mailto:${t.email}`}>{t.email}</a>
            </p>
            <p>
              <span>{t.contact.phoneLabel}</span>
              <a href={`tel:${t.phone}`}>{t.phoneDisplay}</a>
            </p>
            <p className="footerFacebookRow">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footerFacebookLink"
                aria-label={t.contact.facebookLabel}
              >
                <Image
                  src="/images/facebook-icon.png"
                  alt=""
                  width={36}
                  height={20}
                  className="footerFacebookIcon"
                />
              </a>
            </p>
            <p>
              <span>{t.contact.addressLabel}</span>
              {t.addressLines.map((line) => (
                <span key={line} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </p>
            <p>
              <span>{t.contact.oibLabel}</span>
              {t.oibValue}
            </p>
          </div>
        </div>

        <div className="footerBottom">
          <span>
            © {year} {t.company}. {t.contact.rights}
          </span>
          <span>{t.domain}</span>
        </div>
      </div>
    </footer>
  );
}
