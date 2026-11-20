import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import { BRAND, DOMAIN, TAGLINE } from "./lib/brand";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND} | Employer-Sponsored Benefits for Automotive Employees`,
  description:
    "AI Benefits Auto Hub helps automotive employers and their employees understand and use workplace benefits, with text reminders and a plain-language plan guide.",
  keywords: "employer benefits, automotive industry benefits, employee benefits enrollment, benefits plan guide",
  openGraph: {
    title: `${BRAND} | ${TAGLINE}`,
    description:
      "An employer-sponsored benefits program for automotive industry employees, with benefits reminders and a plain-language plan guide.",
    siteName: BRAND,
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://${DOMAIN}`),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

