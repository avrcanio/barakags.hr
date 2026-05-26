import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BARAKA GLOBAL SYSTEMS — barakags.hr",
  description:
    "Hrvatska agencija za zapošljavanje. Poslovi u Njemačkoj — optička infrastruktura.",
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
