import type { Messages } from "@/lib/i18n";
import { ImageCarousel } from "./ImageCarousel";

type Props = { t: Messages };

export function GallerySection({ t }: Props) {
  return (
    <section id="gallery" className="section gallerySection">
      <div className="container">
        <p className="sectionLabel">{t.company}</p>
        <h2 className="sectionTitle">{t.gallery.heading}</h2>
        <p className="galleryLead">{t.gallery.lead}</p>
        <ImageCarousel
          labels={{
            prev: t.gallery.prev,
            next: t.gallery.next,
            imageAlts: t.gallery.imageAlts,
          }}
        />
      </div>
    </section>
  );
}
