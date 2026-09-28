import Link from "next/link";

import { ArrowRight } from "@/app/ui/icons";
import styles from "./writing.module.scss";

export function WritingSection() {
  return (
    <section className={`section container ${styles.section}`}>
      <div className={styles.panel}>
        <div className={styles.text}>
          <p className="section-label">Writing</p>
          <h2 className="section-title">Notes from the work</h2>
          <p className="lede">
            Practical notes from front-end work, client projects, and things I
            am learning along the way.
          </p>
        </div>
        <Link href="/blog" className={styles.cta}>
          Read the writing
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
