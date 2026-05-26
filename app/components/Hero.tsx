import Image from "next/image";
import type { Messages } from "@/lib/i18n";

type Props = { t: Messages; locale: string };

export function Hero({ t, locale }: Props) {
  return (
    <section id="home" className="hero">
      <div className="heroBg">
        <Image
          src="/images/hero-germany-site.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="heroOverlay" aria-hidden />
      <div className="heroContent">
        <p className="heroCompany">{t.company}</p>
        <h1 className="heroTitle">{t.hero.title}</h1>
        <p className="heroSubtitle">{t.hero.subtitle}</p>
        <div className="heroCtas">
          <a href={`/${locale}#apply`} className="btn btnPrimary">
            {t.hero.ctaApply}
          </a>
          <a href={`/${locale}#job`} className="btn btnOutline">
            {t.hero.ctaLearn}
          </a>
        </div>
      </div>
    </section>
  );
}
