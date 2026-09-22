import Link from "next/link";

import { ArrowRight } from "@/app/ui/icons";
import { caseStudies } from "@/app/utils/constants/case-studies";
import styles from "./selected-work.module.scss";

export function SelectedWork() {
  const work = caseStudies.filter((study) => study.featured);

  return (
    <section id="work" className={`section container ${styles.section}`}>
      <header className={styles.head}>
        <p className="section-label">Selected work</p>
        <h2 className="section-title">Projects, problems, and results</h2>
        <p className="lede">
          Four projects, each with a real constraint, the approach I took,
          and the result. The case studies carry the detail.
        </p>
      </header>

      <ol className={styles.list}>
        {work.map((study) => (
          <li key={study.slug} className={styles.item}>
            <article className={styles.article}>
              <p className={styles.index} aria-hidden="true">
                {study.order}
              </p>

              <div className={styles.body}>
                <header>
                  <h3 className={styles.name}>
                    <Link href={`/work/${study.slug}`} className={styles.nameLink}>
                      {study.subtitle}
                    </Link>
                  </h3>
                  <p className={styles.subtitle}>{study.name}</p>
                  <p className={styles.meta}>
                    <span>{study.role}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.period}</span>
                  </p>
                </header>

                <div className={styles.detail}>
                  <div className={styles.block}>
                    <p className={styles.blockLabel}>Problem</p>
                    <p className={styles.blockText}>{study.preview.problem}</p>
                  </div>
                  <div className={styles.block}>
                    <p className={styles.blockLabel}>Approach</p>
                    <p className={styles.blockText}>{study.preview.approach}</p>
                  </div>
                  <div className={styles.block}>
                    <p className={styles.blockLabel}>Result</p>
                    <p className={styles.blockText}>{study.preview.result}</p>
                  </div>
                </div>

                <Link href={`/work/${study.slug}`} className={styles.cta}>
                  Read the {study.name} case study
                  <ArrowRight />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
