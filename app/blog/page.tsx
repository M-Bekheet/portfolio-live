import styles from "@/app/ui/blog/blog.module.scss";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";

const BlogPage = async () => {
  {
    /* <SEO
    title="Blog"
    description="Explore insights and expertise from a seasoned Full-stack Developer skilled in React, TypeScript, and Node.js. Dive into a wealth of knowledge about web development, application design, and software engineering."
    url={`${data.site.siteMetadata.siteUrl}/blog/`}
  /> */
  }

  const posts = await getAllPosts(false);
  return (
    <section className={styles.blog}>
      <h1 className="section-title">Blog</h1>
      <ul className={styles.posts}>
        {posts.map((post, index) => (
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
