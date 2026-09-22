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
    note: "Led two to three developers for six to eight months, then continued as a senior front-end developer on the platform.",
    highlights: [
      "Built the replacement doctor app in Flutter from the ground up, serving the same Next.js website used by the patient app.",
      "Built roughly 80–90% of the doctor-facing features on the shared website that both apps use.",
      "Co-developed MedGulf, Alrajhi Takaful, and BUPA insurance integrations, and built the real-time patient–doctor chat system.",
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
