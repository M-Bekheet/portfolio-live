import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import styles from "@/app/ui/blog/blog-post.module.scss";
import { fetchPostMetaBySlug, getPostBySlug } from "@/app/utils/api";
import { Markdown } from "@/app/utils/lib/markdown";
import { SITE } from "@/app/utils/constants/site";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = (await fetchPostMetaBySlug(slug))?.[0];
  const title = meta?.title ?? "Writing";
  const description =
    meta?.description?.trim() ||
    `An occasional practical note by ${SITE.name} on front-end development, client projects, and learning.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${slug}`,
      siteName: SITE.name,
      locale: "en_US",
      images: [
        { url: "/opengraph-image", width: 1200, height: 630, alt: title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: SITE.twitter,
      images: ["/twitter-image"],
    },
  };
}

const PostPage = async (props: Props) => {
  const params = await props.params;
  const post = (await getPostBySlug(params?.slug))?.[0];

  if (!post) notFound();

  return (
    <article className={`container ${styles.post}`}>
      <Link href="/blog" className={styles.back}>
        All writing
      </Link>
      <h1 className={styles.postTitle}>{post.title}</h1>
      {post.description ? (
        <p className={styles.postDescription}>{post.description}</p>
      ) : null}
      <div className={`prose ${styles.content}`}>
        <Markdown content={post.body} className={styles.postImg} />
      </div>
    </article>
  );
};

export default PostPage;
