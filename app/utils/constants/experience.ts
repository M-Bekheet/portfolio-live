export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  meta: string;
  note: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Cura Healthcare",
    role: "Senior Front-end Developer",
    period: "Sep 2022 – Present",
    meta: "4 years · Remote · Saudi health-tech platform",
    note: "Worked across web and mobile delivery, including a period leading the web engineering team.",
  },
  {
    company: "Hammoq Inc",
    role: "Full-stack Developer",
    period: "Dec 2021 – Sep 2022",
    meta: "Full-time · React, TypeScript, Node.js, Express, MongoDB",
    note: "Delivered product features across the front end, back end, and database for marketplace operations.",
  },
  {
    company: "DataPure AI",
    role: "Front-end Developer (Contract)",
    period: "Aug 2022 – Nov 2022",
    meta: "Contract · ran concurrently with Cura Healthcare",
    note: "Owned front-end delivery for data annotation tooling, with contributions across the stack.",
  },
  {
    company: "Freelance (Outsource & Upwork)",
    role: "Front-end Developer",
    period: "Aug 2017 – Mar 2019",
    meta: "Independent · HTML, CSS, JavaScript, WordPress, Stripe",
    note: "Delivered 10+ client websites and maintained e-commerce stores for small businesses.",
  },
];

export const education = {
  institution: "Cairo University",
  qualification: "Bachelor's Degree, Engineering",
  period: "2015 – 2020",
};
