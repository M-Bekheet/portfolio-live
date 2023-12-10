import styles from "@/app/ui/not-found.module.scss";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404: Not found",
};

const NotFoundPage = () => (
  <section className={styles.notFound}>
    <h1>NOT FOUND</h1>
    <p>
      It seems your searching for Neverland? Umm I have a better place. Visit me
      at&nbsp;
      <Link href="/">Home</Link>
    </p>
  </section>
);

export default NotFoundPage;
