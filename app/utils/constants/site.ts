export const DOMAIN = "https://bekheet.vercel.app";

// Résumé delivery.
//
// To publish a downloadable résumé, set NEXT_PUBLIC_RESUME_URL in .env.local
// (and in the host's environment, e.g. Vercel) to a hosted PDF or a file placed
// in /public, for example: NEXT_PUBLIC_RESUME_URL=/mahmoud-bekheet-resume.pdf
//
// While it is unset or empty, the site renders a truthful "Request résumé"
// mail action instead of a broken download link.
export const RESUME_URL = (process.env.NEXT_PUBLIC_RESUME_URL ?? "").trim();
export const HAS_RESUME = RESUME_URL.length > 0;

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_MY_PUBLIC_EMAIL || "Mahmoud.A.Bekheet@gmail.com";

export const SITE = {
  name: "Mahmoud Bekheet",
  monogram: "MB",
  role: "Senior Front-end Developer",
  focus: "React · Next.js · TypeScript",
  tagline:
    "I design and build high-performance, accessible web products with React, Next.js, and TypeScript, and I ship the full-stack pieces when the work needs them.",
  location: "Cairo, Egypt",
  availabilitySummary: "Open to full-time remote or onsite roles",
  relocation:
    "Open to full-time remote or onsite roles in Egypt or abroad, and open to international relocation.",
  email: CONTACT_EMAIL,
  linkedin: "https://www.linkedin.com/in/mahmoud-bekheet/",
  github: "https://github.com/M-Bekheet",
  twitter: "@b_kheet",
  summary:
    "Senior Front-end Developer with 6 years of professional experience delivering high-performance, accessible, and SEO-optimized web applications using React, Next.js, and TypeScript. Based in Cairo, Egypt, and open to full-time remote or onsite roles in Egypt or abroad, including international relocation. Full-stack range with Node.js, Express, and MongoDB.",
  keywords: [
    "Senior Front-end Developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "front-end engineer",
    "Flutter",
    "Node.js",
    "Cairo",
    "remote",
  ],
} as const;

export const NAV = [
  { href: "/#work", label: "Selected work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL = {
  linkedin: { href: SITE.linkedin, label: "LinkedIn" },
  github: { href: SITE.github, label: "GitHub" },
} as const;
