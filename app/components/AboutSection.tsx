import Image from "next/image";
import type { Messages } from "@/lib/i18n";

type Props = { t: Messages };

const aboutImages = [
  { src: "/images/about-values-1.png", altKey: "values1" as const },
  { src: "/images/about-values-2.png", altKey: "values2" as const },
] as const;

export function AboutSection({ t }: Props) {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="sectionLabel">{t.about.lead}</p>
        <h2 className="sectionTitle">{t.about.heading}</h2>
        <div className="aboutGrid">
          <div className="aboutText">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <div className="aboutImages">
            {aboutImages.map((img) => (
              <div key={img.src} className="aboutImage">
                <Image
                  src={img.src}
                  alt={t.about.imageAlts[img.altKey]}
                  width={1200}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
