import type { Metadata } from "next";
import Link from "next/link";

import styles from "@/app/ui/blog/blog.module.scss";
import { getAllPosts } from "@/app/utils/api";
import { ArrowRight } from "@/app/ui/icons";
import { SITE } from "@/app/utils/constants/site";

const description =
  "Occasional practical notes by Mahmoud Bekheet on front-end development, client projects, and learning. Notes appear only when there is something worth writing down.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  keywords: [
    "front-end development",
    "web development",
    "react",
    "angular",
    "freelance",
    "productivity",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    title: "Writing — occasional notes from the work",
    description,
    url: "/blog",
    siteName: SITE.name,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Writing by Mahmoud Bekheet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing — occasional notes from the work",
    description,
    creator: SITE.twitter,
    images: ["/twitter-image"],
  },
};

const BlogPage = async () => {
  const posts = (await getAllPosts(false)) ?? [];

  return (
    <section className={`container ${styles.blog}`}>
      <header className={styles.head}>
        <p className="section-label">Writing</p>
        <h1 className="section-title">Occasional notes from the work</h1>
        <p className="lede">
          Practical notes drawn from front-end work, client projects, and things
          I am learning. There is no publishing schedule: a note appears when
          there is something worth writing down.
        </p>
      </header>

      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.post}>
              <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                <span className={styles.postTitle}>{post.title}</span>
                <ArrowRight />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>
          No notes are published right now. When there is something worth
          sharing, it will appear here.
        </p>
      )}
    </section>
  );
};

export default BlogPage;
