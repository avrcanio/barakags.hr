import { notFound } from "next/navigation";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { SiteHeader } from "../components/SiteHeader";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { GallerySection } from "../components/GallerySection";
import { JobSection } from "../components/JobSection";
import { ApplyForm } from "../components/ApplyForm";
import { ContactFooter } from "../components/ContactFooter";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  if (!isLocale(loc)) notFound();
  const locale: Locale = loc;
  const t = getMessages(locale);

  return (
    <>
      <SiteHeader locale={locale} t={t} />
      <main>
        <Hero t={t} locale={locale} />
        <AboutSection t={t} />
        <GallerySection t={t} />
        <JobSection t={t} locale={locale} />
        <ApplyForm locale={locale} t={t} />
      </main>
      <ContactFooter t={t} />
    </>
  );
}
