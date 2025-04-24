import styles from "@/app/ui/blog/blog-post.module.scss";
import { DOMAIN, PATHS } from "@/app/utils/constants/paths";
import { fetchPostTitleBySlug, getPostBySlug } from "@/app/utils/api";
import { Markdown } from "@/app/utils/lib/markdown";

import { Metadata, ResolvingMetadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
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

const PostPage = async (props: Props) => {
  const params = await props.params;
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
