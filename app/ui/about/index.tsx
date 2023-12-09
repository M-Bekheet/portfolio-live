import styles from "./about.module.scss";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/app/utils/profile";

const { title, description, jobInfo, positionPreference, experience } = profile;

export const About = ({}) => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.info}>
        <h3 className="section-title">About</h3>
        <div className={styles.name}>
          {title}
          <span className="colored">.</span>
        </div>
        <h1 className={styles.description + " colored"}>{description}</h1>
        <p className={styles.jobDescription}>{jobInfo}</p>
        <p className={styles.jobDescription}>{positionPreference}</p>
        <p className={styles.jobDescription}>{experience}</p>
        <Link href="/contact" className={"button colored"}>
          Hire me
        </Link>
        <Link href="/#testimonials" className={"button"}>
          Know more
        </Link>
        <blockquote className={styles.quote}>Knowledge is power</blockquote>
      </div>
      <div className={styles.avatar}>
        <Image
          width={315}
          height={485}
          src={"/images/avatar2.png"}
          alt="Developer"
        />
      </div>
    </section>
  );
};
