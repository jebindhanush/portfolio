import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { portfolio } from "@/data/portfolio";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${portfolio.person.name} — ${portfolio.person.title}`,
  description: portfolio.person.introduction,
  alternates: { canonical: siteConfig.siteUrl },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: `${portfolio.person.name} — ${portfolio.person.title}`,
    description: portfolio.person.introduction,
    siteName: `${portfolio.person.name} Portfolio`,
    images: [
      {
        url: `${siteConfig.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${portfolio.person.name} — ${portfolio.person.title}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${portfolio.person.name} — ${portfolio.person.title}`,
    description: portfolio.person.introduction,
    images: [`${siteConfig.siteUrl}/og-image.png`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0d0f" },
    { media: "(prefers-color-scheme: light)", color: "#f4f2ed" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.person.name,
    jobTitle: portfolio.person.title,
    email: portfolio.person.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    sameAs: portfolio.socials
      .filter((social) => social.label !== "Email")
      .map((social) => social.href),
    url: siteConfig.siteUrl,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
