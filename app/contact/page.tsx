import { Metadata } from "next";
import Contact from "../ui/contact/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Are you looking for an experienced Full-stack web developer proficient in React, TypeScript, or Node.js? contact me anytime.",
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
