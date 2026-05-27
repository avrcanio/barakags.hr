import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BARAKA GLOBAL SYSTEMS — barakags.hr",
  description:
    "Hrvatska tvrtka za optičku infrastrukturu. Tražimo radnike za projekte u Njemačkoj.",
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
