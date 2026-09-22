export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  meta: string;
  note?: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Cura Healthcare",
    role: "Senior Front-end Developer",
    period: "Sep 2022 – Present",
    meta: "4 years · Remote · Saudi health-tech platform",
    note: "Led the web engineering team for approximately 6–8 months during a period of expansion, then continued as a senior individual contributor.",
    highlights: [
      "Built and maintained a Next.js and TypeScript telemedicine platform for web, iOS, and Android.",
      "Designed reusable patterns for authentication, API integration, state management, and cross-platform code.",
      "Co-developed integrations with MedGulf, Alrajhi Takaful, and BUPA, and built a real-time patient–doctor chat system.",
    ],
  },
  {
    company: "Hammoq Inc",
    role: "Full-stack Developer",
    period: "Dec 2021 – Sep 2022",
    meta: "Full-time · React, TypeScript, Node.js, Express, MongoDB",
    highlights: [
      "Engineered an automated marketplace listing engine on React, TypeScript, and Node.js/Express.",
      "Built full-stack features end to end, and redesigned the MongoDB database architecture for better query performance.",
    ],
  },
  {
    company: "DataPure AI",
    role: "Front-end Developer (Contract)",
    period: "Aug 2022 – Nov 2022",
    meta: "Contract · ran concurrently with Cura Healthcare",
    highlights: [
      "Built the client-side annotation application from the ground up with React, the Canvas API, and Konva.js.",
      "Designed Redux state management for complex, concurrent annotation operations.",
    ],
  },
  {
    company: "Freelance (Outsource & Upwork)",
    role: "Front-end Developer",
    period: "Aug 2017 – Mar 2019",
    meta: "Independent · HTML, CSS, JavaScript, WordPress, Stripe",
    highlights: [
      "Delivered 10+ client websites with responsive layouts, cross-browser compatibility, and Stripe payment integrations.",
      "Maintained and extended WordPress e-commerce stores for small businesses.",
    ],
  },
];

export const education = {
  institution: "Cairo University",
  qualification: "Bachelor's Degree, Engineering",
  period: "2015 – 2020",
};
