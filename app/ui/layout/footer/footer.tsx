import Link from "next/link";

import { NAV, SITE, SOCIAL } from "@/app/utils/constants/site";
import styles from "./footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.identity}>
          <span className={styles.monogram} aria-hidden="true">
            {SITE.monogram}
          </span>
          <div>
            <p className={styles.name}>{SITE.name}</p>
            <p className={styles.role}>{SITE.role}</p>
          </div>
        </div>

        <nav aria-label="Footer" className={styles.nav}>
          <ul className={styles.navList}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <a className={styles.contactLink} href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <ul className={styles.social}>
            <li>
              <a
                className={styles.navLink}
                href={SOCIAL.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className={styles.navLink}
                href={SOCIAL.github.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.legal}`}>
        <p>
          © {year} {SITE.name}. {SITE.availabilitySummary}.
        </p>
        <p>{SITE.location}</p>
      </div>
    </footer>
  );
}
