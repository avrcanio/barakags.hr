import Image from "next/image";
import type { Messages } from "@/lib/i18n";

type Props = { t: Messages; locale: string };

export function JobSection({ t, locale }: Props) {
  return (
    <section id="job" className="section">
      <div className="container">
        <p className="sectionLabel">{t.job.heading}</p>
        <h2 className="sectionTitle">{t.job.title}</h2>

        <div className="jobMeta">
          <div className="jobMetaItem">
            <strong>{t.job.positionsLabel}</strong>
            {t.job.positions}
          </div>
          <div className="jobMetaItem">
            <strong>{t.job.locationLabel}</strong>
            {t.job.location}
          </div>
          <div className="jobMetaItem">
            <strong>{t.job.startLabel}</strong>
            {t.job.start}
          </div>
        </div>

        <p className="jobIntro">{t.job.intro}</p>
        <p className="jobIntro">{t.job.intro2}</p>

        <h3 className="sectionTitle" style={{ fontSize: "1.25rem" }}>
          {t.job.openHeading}
        </h3>
        <div className="roleCards">
          {t.job.roles.map((role) => (
            <article key={role.title} className="roleCard">
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </article>
          ))}
        </div>

        <h3 className="sectionTitle" style={{ fontSize: "1.15rem", marginTop: "2rem" }}>
          {t.job.tasksHeading}
        </h3>
        <ul className="checkList">
          {t.job.tasks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="jobColumns">
          <div>
            <h3 className="sectionTitle" style={{ fontSize: "1.15rem" }}>
              {t.job.expectHeading}
            </h3>
            <ul className="checkList">
              {t.job.expect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="sectionTitle" style={{ fontSize: "1.15rem" }}>
              {t.job.offerHeading}
            </h3>
            <ul className="checkList">
              {t.job.offer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="jobVisual">
          <Image
            src="/images/job-team.png"
            alt={t.job.imageAlt}
            width={1024}
            height={283}
            sizes="(max-width: 1100px) 100vw, 1100px"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="jobCtaWrap">
          <a href={`/${locale}#apply`} className="btn btnPrimary">
            {t.job.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
