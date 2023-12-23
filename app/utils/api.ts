import { Content } from "./lib/markdown";

interface Post {
  slug: string;
  title: string;
  description: string;
  body: Content;
}

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"], revalidate: 3600 },
    }
  ).then((response) => response.json());
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
        blogPostCollection(preview: false, order: [publishDate_DESC]){
    items {
      title, slug, publishDate
    }
  }
      }`,
    isDraftMode
  );
  return extractPostEntries(entries);
}

export async function getPostBySlug(slug: string): Promise<Post[]> {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          title
          description
          slug
          body {
            json
             links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
          }
        }
      }
    }`,
    false
  );
  return extractPostEntries(entries);
}

export async function fetchPostTitleBySlug(
  slug: string
): Promise<{ title: string }[]> {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          title
        }
      }
    }`,
    false
  );
  return extractPostEntries(entries);
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.blogPostCollection?.items;
}
