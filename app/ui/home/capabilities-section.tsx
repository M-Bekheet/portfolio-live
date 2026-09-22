import { capabilities, languages } from "@/app/utils/constants/capabilities";
import styles from "./capabilities.module.scss";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className={`section container ${styles.section}`}
      aria-labelledby="capabilities-title"
    >
      <header className={styles.head}>
        <p className="section-label">Capabilities</p>
        <h2 id="capabilities-title" className="section-title">
          Focused on the front end, fluent across the stack
        </h2>
        <p className="lede">
          The front-end stack I work in daily, and the adjacent tools I reach
          for when a project needs them.
        </p>
      </header>

      <dl className={styles.groups}>
        {capabilities.map((group) => (
          <div key={group.label} className={styles.group}>
            <dt className={styles.groupLabel}>
              {group.label}
              <span className={styles.groupNote}>{group.note}</span>
            </dt>
            <dd>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <div className={styles.languages}>
        <p className="section-label">Languages</p>
        <ul className={styles.languageList}>
          {languages.map((item) => (
            <li key={item.language}>
              <span className={styles.languageName}>{item.language}</span>
              <span className={styles.languageLevel}>{item.fluency}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
