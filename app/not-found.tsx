import type { Metadata } from "next";
import Link from "next/link";

import styles from "@/app/ui/not-found.module.scss";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className={`container ${styles.notFound}`}>
      <p className="eyebrow">Error 404</p>
      <h1 className={styles.title}>This page does not exist</h1>
      <p className={styles.text}>
        The link may be out of date, or the page may have moved. The homepage
        has the current case studies and contact details.
      </p>
      <Link href="/" className="btn btn--primary">
        Back to homepage
      </Link>
    </section>
  );
}
