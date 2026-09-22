export type CapabilityGroup = {
  label: string;
  note: string;
  items: string[];
};

export const capabilities: CapabilityGroup[] = [
  {
    label: "Core",
    note: "Day-to-day front-end delivery",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    label: "State & Data",
    note: "Data flow, caching, and API integration",
    items: [
      "Redux",
      "Redux Toolkit (RTK)",
      "TanStack React Query",
      "Zustand",
      "Context API",
      "REST API",
      "GraphQL",
    ],
  },
  {
    label: "Styling & UI",
    note: "Design systems and UI implementation",
    items: ["Tailwind CSS", "Material UI (MUI)", "Styled Components", "SASS/SCSS"],
  },
  {
    label: "Mobile",
    note: "Native app delivery and web-in-app integration",
    items: ["Flutter", "Ionic", "WebView integration"],
  },
  {
    label: "Tooling",
    note: "Build, versioning, and delivery",
    items: ["Vite", "Webpack", "Git", "GitHub", "Docker", "NPM"],
  },
  {
    label: "Full-stack breadth",
    note: "Secondary, used when the work needs it",
    items: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Angular",
    ],
  },
];

export const languages = [
  { language: "Arabic", fluency: "Native" },
  { language: "English", fluency: "Fluent (Professional)" },
];
