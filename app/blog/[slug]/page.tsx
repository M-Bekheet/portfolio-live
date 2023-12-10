import styles from "@/app/ui/blog/blog-post.module.scss";
import { DOMAIN, PATHS } from "@/app/utils/paths";
import { fetchPostTitleBySlug, getPostBySlug } from "@/lib/api";
import { Markdown } from "@/lib/markdown";

import { Metadata, ResolvingMetadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const title = (await fetchPostTitleBySlug(slug))[0].title || "";
  return {
    title,
    metadataBase: new URL(`${DOMAIN}`),
    alternates: {
      canonical: `/${PATHS.blog}/${slug}`,
    },
  };
}

const PostPage = async ({ params }: Props) => {
  const post = (await getPostBySlug(params?.slug))[0];
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
