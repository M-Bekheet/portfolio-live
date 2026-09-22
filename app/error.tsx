"use client";

import Link from "next/link";

import styles from "@/app/ui/error.module.scss";

const Error = ({
  reset,
}: {
  error: Error & { digest?: string };
  reset: VoidFunction;
}) => {
  return (
    <section className={`container ${styles.error}`}>
      <p className="eyebrow">Something broke</p>
      <h1 className={styles.title}>That did not load</h1>
      <p className={styles.text}>
        The page failed while rendering. You can try again, or head back to the
        homepage.
      </p>
      <div className={styles.actions}>
        <button type="button" className="btn btn--primary" onClick={() => reset()}>
          Try again
        </button>
        <Link href="/" className="btn btn--secondary">
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
