import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@/app/ui/globals.css";
import styles from "@/app/ui/layout/layout.module.scss";
import Header from "@/app/ui/layout/header/header";
import Footer from "@/app/ui/layout/footer/footer";
import { profile } from "./utils/constants/profile";
import { DOMAIN } from "./utils/constants/paths";
const raleway = Raleway({ subsets: ["latin"] });
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "Mahmoud Bekheet Portfolio",
    template: "%s | Mahmoud Bekheet",
  },
  description:
    "Mahmoud's Portfolio - Senior Front-end Developer with expertise in React.js, Next.js, TypeScript, and Node.js. Connect for collaborations and discussions.",
  authors: {
    url: profile.linkedin,
    name: profile.title,
  },
  keywords: profile.keywords,
  metadataBase: new URL(`${DOMAIN}`),
  alternates: {
    canonical: DOMAIN,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.layout + " " + raleway.className}>
        <Header className={styles.header} />
        <main className={styles.content}>
          {children}
          <Footer className={styles.footer} title={profile.title} />
        </main>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM || ""} />
    </html>
  );
}
