import styles from "@/app/ui/blog/blog.module.scss";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";
import { DOMAIN, PATHS } from "../utils/paths";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore insights and expertise on React, TypeScript, and Node.js. Dive into a wealth of knowledge about web development, application design, and software engineering.",
  keywords: [
    "next.js",
    "typescript",
    "node",
    "react",
    "server components",
    "productivity",
  ],
  metadataBase: new URL(`${DOMAIN}`),
  alternates: {
    canonical: `${DOMAIN}/${PATHS.blog}`,
  },
};

const BlogPage = async () => {
  const posts = await getAllPosts(false);
  return (
    <section className={styles.blog}>
      <h1 className="section-title">Blog</h1>
      <ul className={styles.posts}>
        {posts.reverse().map((post, index) => (
          <li key={`edge_${index}`} className={styles.post}>
            <Link href={`/blog/${post.slug}`} title={post.title}>
              <h2 className={styles.postTitle}>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogPage;
