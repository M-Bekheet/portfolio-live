import { education, experience } from "@/app/utils/constants/experience";
import styles from "./experience.module.scss";

export function ExperienceSection() {
  return (
    <section id="experience" className={`section container ${styles.section}`}>
      <header className={styles.head}>
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I&apos;ve worked</h2>
        <p className="lede">
          Four years as a senior front-end developer at Cura Healthcare,
          including one period leading its web engineering team. Earlier roles
          added the full-stack range.
        </p>
      </header>

      <ol className={styles.timeline}>
        {experience.map((entry) => (
          <li key={entry.company} className={styles.entry}>
            <div className={styles.when}>
              <p className={styles.period}>{entry.period}</p>
              <p className={styles.meta}>{entry.meta}</p>
            </div>

            <div className={styles.what}>
              <h3 className={styles.company}>{entry.company}</h3>
              <p className={styles.role}>{entry.role}</p>
              {entry.note ? <p className={styles.note}>{entry.note}</p> : null}
              <ul className={styles.highlights}>
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className={styles.highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.education}>
        <p className="section-label">Education</p>
        <p className={styles.eduLine}>
          <span className={styles.eduStrong}>{education.institution}</span>
          <span aria-hidden="true"> · </span>
          {education.qualification}
          <span aria-hidden="true"> · </span>
          {education.period}
        </p>
      </div>
    </section>
  );
}
