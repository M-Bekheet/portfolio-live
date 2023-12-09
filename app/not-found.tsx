import styles from "@/app/ui/not-found.module.scss";
import Link from "next/link";

{
  /* <SEO title="404: Not found" /> */
}
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
