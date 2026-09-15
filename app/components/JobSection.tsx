import Image from "next/image";
import type { JobListing, Messages } from "@/lib/i18n";

type Props = { t: Messages; locale: string };

const STUTTGART_PHOTOS = [
  "/images/carousel/10.jpg",
  "/images/hero-germany-site.jpg",
  "/images/carousel/13.jpg",
] as const;

function ListingBlock({
  listing,
  locale,
  cta,
}: {
  listing: JobListing;
  locale: string;
  cta: string;
}) {
  const featured = Boolean(listing.featured);
  const singleRole = listing.roles.length === 1;

  return (
    <article
      id={listing.id === "stuttgart" ? "job-stuttgart" : undefined}
      className={`jobListing${featured ? " jobListingFeatured" : ""}`}
      data-listing={listing.id}
    >
      {listing.badge ? <p className="jobBadge">{listing.badge}</p> : null}
      <h3 className="sectionTitle jobListingTitle">{listing.title}</h3>
      {listing.slogan ? <p className="jobSlogan">{listing.slogan}</p> : null}

      {listing.callouts?.length ? (
        <div className="jobCallouts">
          {listing.callouts.map((item) => (
            <span key={item} className="jobCallout">
              {item}
            </span>
          ))}
        </div>
      ) : null}

      <div className="jobMeta">
        <div className="jobMetaItem">
          <strong>{listing.positionsLabel}</strong>
          {listing.positions}
        </div>
        <div className="jobMetaItem">
          <strong>{listing.locationLabel}</strong>
          {listing.location}
        </div>
        <div className="jobMetaItem">
          <strong>{listing.startLabel}</strong>
          {listing.start}
        </div>
      </div>

      <p className="jobIntro">{listing.intro}</p>

      {listing.payItems?.length ? (
        <div className="jobPay">
          {listing.payHeading ? (
            <h4 className="sectionTitle jobSubheading">{listing.payHeading}</h4>
          ) : null}
          <div className="jobPayGrid">
            {listing.payItems.map((item) => (
              <div key={item.value} className="jobPayCard">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <h4 className="sectionTitle jobSubheading">{listing.openHeading}</h4>
      <div
        className={`roleCards${singleRole ? " roleCardsSingle" : ""}${
          listing.roles.length === 4 ? " roleCardsFour" : ""
        }`}
      >
        {listing.roles.map((role) => (
          <div key={role.title} className="roleCard">
            <h4 className="roleCardTitle">{role.title}</h4>
            {role.location ? (
              <p className="roleCardLocation">{role.location}</p>
            ) : null}
            {role.desc ? <p>{role.desc}</p> : null}
            {role.tasks?.length ? (
              <ul className="roleCardTasks">
                {role.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>

      {listing.tasks?.length ? (
        <>
          <h4 className="sectionTitle jobSubheading">{listing.tasksHeading}</h4>
          <ul className="checkList">
            {listing.tasks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}

      {listing.expect?.length || listing.offer.length ? (
        <div
          className={`jobColumns${
            listing.expect?.length ? "" : " jobColumnsSingle"
          }`}
        >
          {listing.expect?.length && listing.expectHeading ? (
            <div>
              <h4 className="sectionTitle jobSubheading">
                {listing.expectHeading}
              </h4>
              <ul className="checkList">
                {listing.expect.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div>
            <h4 className="sectionTitle jobSubheading">
              {listing.offerHeading}
            </h4>
            <ul className="checkList">
              {listing.offer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {listing.preference ? (
        <p className="jobPreference">{listing.preference}</p>
      ) : null}

      {featured && listing.photoAlts ? (
        <div className="jobPhotoStrip" aria-hidden={false}>
          {STUTTGART_PHOTOS.map((src, i) => (
            <div key={src} className="jobPhoto">
              <Image
                src={src}
                alt={listing.photoAlts?.[i] ?? ""}
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      ) : null}

      {featured ? (
        <div className="jobCtaWrap">
          <a href={`/${locale}#apply`} className="btn btnPrimary">
            {cta}
          </a>
        </div>
      ) : null}
    </article>
  );
}

export function JobSection({ t, locale }: Props) {
  return (
    <section id="job" className="section">
      <div className="container">
        <p className="sectionLabel">{t.company}</p>
        <h2 className="sectionTitle">{t.job.heading}</h2>

        {t.job.listings.map((listing) => (
          <ListingBlock
            key={listing.id}
            listing={listing}
            locale={locale}
            cta={t.job.cta}
          />
        ))}

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
          <p className="jobTagline">{t.job.tagline}</p>
        </div>
      </div>
    </section>
  );
}
