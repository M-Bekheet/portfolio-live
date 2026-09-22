import Link from "next/link";

import { ResumeAction } from "@/app/ui/actions/resume-action";
import { GitHubIcon, LinkedInIcon } from "@/app/ui/icons";
import { SITE, SOCIAL } from "@/app/utils/constants/site";
import styles from "./hero.module.scss";

const spec = [
  { term: "Current", detail: "Senior Front-end Developer, Cura Healthcare" },
  { term: "Based in", detail: "Cairo, Egypt" },
  { term: "Focus", detail: "React · Next.js · TypeScript" },
  { term: "Experience", detail: "6 years building web products" },
  { term: "Open to", detail: "Remote or onsite — Egypt or abroad" },
];

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <p className="eyebrow">
            {SITE.name} · {SITE.location} · {SITE.availabilitySummary}
          </p>
          <h1 id="hero-title" className={styles.title}>
            Senior <span className={styles.noBreak}>Front-end</span> Developer
          </h1>
          <p className={styles.focus}>{SITE.focus}</p>
          <p className="lede">{SITE.tagline}</p>

          <div className={styles.actions}>
            <Link href="/#work" className="btn btn--primary">
              Selected work
              <span aria-hidden="true">↓</span>
            </Link>
            <Link href="/contact" className="btn btn--secondary">
              Contact
            </Link>
            <ResumeAction variant="secondary" />
          </div>

          <ul className={styles.profiles}>
            <li>
              <a
                className={styles.profile}
                href={SOCIAL.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className={styles.profile}
                href={SOCIAL.github.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <aside className={styles.spec} aria-label="At a glance">
          <p className={styles.specLabel}>At a glance</p>
          <dl className={styles.specList}>
            {spec.map((row) => (
              <div key={row.term} className={styles.specRow}>
                <dt className={styles.specTerm}>{row.term}</dt>
                <dd className={styles.specDetail}>{row.detail}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
