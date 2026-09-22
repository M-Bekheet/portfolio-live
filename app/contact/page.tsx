import type { Metadata } from "next";
import Contact from "../ui/contact/contact";
import { SITE } from "../utils/constants/site";

const description =
  "Contact Mahmoud Bekheet, a senior front-end developer in Cairo working with React, Next.js, and TypeScript, about full-time remote or onsite roles in Egypt or abroad.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact Mahmoud Bekheet",
    description,
    url: "/contact",
    siteName: SITE.name,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Mahmoud Bekheet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mahmoud Bekheet",
    description,
    creator: SITE.twitter,
    images: ["/twitter-image"],
  },
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
