import styles from "@/app/ui/blog/blog-post.module.scss";
import { getPostBySlug } from "@/lib/api";
import { Markdown } from "@/lib/markdown";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const post = (await getPostBySlug(params?.slug))[0];
  {
    /* <SEO
    title={post.title}
    description={post.description}
    includeWebsiteName={false}
    url={`${props.data.site.siteMetadata.siteUrl}/blog/${post.slug}/`}
  /> */
  }

  return (
    <div className={styles.post + " " + roboto.className}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <div className={styles.postContent}>
        <Markdown content={post.body} className={styles.postImg} />
      </div>
    </div>
  );
};

export default PostPage;
