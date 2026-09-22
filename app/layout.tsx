import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "@/app/ui/globals.css";
import styles from "@/app/ui/layout/layout.module.scss";
import Header from "@/app/ui/layout/header/header";
import Footer from "@/app/ui/layout/footer/footer";
import { DOMAIN, SITE } from "./utils/constants/site";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${SITE.name} — ${SITE.role} (React, Next.js, TypeScript)`;

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.summary,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.linkedin }],
  creator: SITE.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    title,
    description: SITE.summary,
    url: DOMAIN,
    siteName: SITE.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SITE.summary,
    creator: SITE.twitter,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  description: SITE.summary,
  url: DOMAIN,
  email: `mailto:${SITE.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  sameAs: [SITE.linkedin, SITE.github],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Node.js",
    "Front-end engineering",
    "Web performance",
    "Accessibility",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" className={styles.main}>
          {children}
        </main>
        <Footer />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM || ""} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
