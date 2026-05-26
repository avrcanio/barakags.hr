import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SetHtmlLang } from "../components/SetHtmlLang";
import { getMessages, isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = getMessages(locale);

  return {
    title: m.metaTitle,
    description: m.metaDescription,
    openGraph: {
      title: m.ogTitle,
      description: m.metaDescription,
      url: `https://${m.domain}/${locale}`,
      siteName: m.company,
      locale: locale === "hr" ? "hr_HR" : locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    alternates: {
      languages: {
        hr: "/hr",
        en: "/en",
        de: "/de",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <SetHtmlLang locale={locale} />
      {children}
    </>
  );
}
