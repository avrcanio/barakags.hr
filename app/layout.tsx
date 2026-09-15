import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BARAKA GLOBAL SYSTEMS — Gotove ekipe, Stuttgart",
  description:
    "Tražimo gotove ekipe za optičku infrastrukturu u Stuttgartu. Mannheim, Dortmund i industrijski električari — Baraka Global Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
