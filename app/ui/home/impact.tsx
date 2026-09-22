import styles from "./impact.module.scss";

const metrics = [
  {
    value: "~50%",
    label: "less cross-platform development time",
    source: "Cura Healthcare",
  },
  {
    value: "3,000+",
    label: "monthly consultations supported",
    source: "Cura Healthcare",
  },
  {
    value: "8×",
    label: "daily listing throughput",
    source: "Hammoq Inc",
  },
  {
    value: "80%",
    label: "annotator productivity gain",
    source: "DataPure AI",
  },
];

export function Impact() {
  return (
    <section className={styles.impact} aria-labelledby="impact-title">
      <div className="container">
        <h2 id="impact-title" className="visually-hidden">
          Selected outcomes
        </h2>
        <p className={styles.note}>
          Headline outcomes from the roles below. Figures are approximate; the
          case studies carry the detail.
        </p>
        <ul className={styles.strip}>
          {metrics.map((metric) => (
            <li key={metric.label} className={styles.item}>
              <span className={styles.value}>{metric.value}</span>
              <span className={styles.label}>{metric.label}</span>
              <span className={styles.source}>{metric.source}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
