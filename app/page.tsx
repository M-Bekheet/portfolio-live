import { Metadata } from "next";
import { About } from "./ui/about";
import { Testimonials } from "./ui/testimonials";
import { Work } from "./ui/work/work";

export const metadata: Metadata = {
  title: {
    default: "Mahmoud Bekheet Portfolio",
    template: "%s | Mahmoud Bekheet",
  },
  description:
    "Mahmoud's Portfolio - Senior Front-end Developer with expertise in React.js, Next.js, TypeScript, and Node.js. Connect for collaborations and discussions.",
};

export default function Home() {
  return (
    <>
      <About />
      <Work />
      <Testimonials />
    </>
  );
}
