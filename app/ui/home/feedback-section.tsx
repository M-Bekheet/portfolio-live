import { feedback } from "@/app/utils/constants/feedback";
import styles from "./feedback.module.scss";

export function FeedbackSection() {
  return (
    <section
      className={`section container ${styles.section}`}
      aria-labelledby="feedback-title"
    >
      <header className={styles.head}>
        <p className="section-label">Client feedback</p>
        <h2 id="feedback-title" className="section-title">
          A few words from early clients
        </h2>
        <p className={styles.note}>
          From freelance engagements between 2017 and 2019, with names as each
          client used them publicly.
        </p>
      </header>

      <ul className={styles.list}>
        {feedback.map((item) => (
          <li key={item.name} className={styles.item}>
            <blockquote className={styles.quote}>{item.quote}</blockquote>
            <p className={styles.attribution}>
              {item.name}
              <span aria-hidden="true"> · </span>
              {item.location}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
