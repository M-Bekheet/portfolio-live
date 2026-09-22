export type DemoKind = "konva" | "screenshot" | null;

export type BuiltItem = {
  title: string;
  detail: string;
};

export type CaseStudyPreview = {
  problem: string;
  approach: string;
  result: string;
};

export type CaseStudy = {
  slug: string;
  order: string;
  name: string;
  subtitle: string;
  role: string;
  period: string;
  context: string;
  summary: string;
  preview: CaseStudyPreview;
  contextLabel: string;
  constraints: string[];
  built: BuiltItem[];
  outcome: string[];
  metrics: { value: string; label: string }[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  demo: DemoKind;
  image?: string;
  imageAlt?: string;
  confidentiality?: boolean;
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cura-healthcare",
    order: "01",
    name: "Cura Healthcare",
    subtitle: "Doctor app and telemedicine workflows",
    role: "Senior Front-end Developer",
    period: "Sep 2022 – Present · 4 years",
    context: "Remote · Saudi health-tech platform",
    summary:
      "I built Cura’s replacement Flutter doctor app end to end and delivered major doctor-facing features in Next.js, spanning patient journeys, real-time communication, integrations, and performance across web and mobile.",
    preview: {
      problem:
        "Cura needed a replacement doctor app and consistent telemedicine workflows across web and mobile.",
      approach:
        "Built the Flutter doctor app end to end and major doctor-facing features in Next.js, reusing web features across apps.",
      result:
        "Shared web features reduced development time by approximately 50%, based on internal estimates.",
    },
    contextLabel: "Context",
    constraints: [
      "Cura is a Saudi telemedicine platform reporting 3,000+ monthly consultations.",
      "The work needed to support patient and doctor journeys across web and mobile, while allowing shared features to evolve efficiently.",
    ],
    built: [
      {
        title: "New Flutter doctor app, built end to end",
        detail:
          "Built the replacement doctor app in Flutter from the ground up, including mobile navigation, notifications, permissions, and integration with the web experience. I also delivered major doctor-facing features in Next.js, with shared web functionality supporting both patient and doctor apps.",
      },
      {
        title: "Patient journeys, integrations, and real-time chat",
        detail:
          "Built core patient journeys across authentication, search, profiles, consultation booking, and checkout, including payment-service integration. Co-developed insurance integrations and built real-time patient–doctor chat, with further contributions to lab-test ordering, e-prescriptions, and voice and video calling.",
      },
      {
        title: "Platform maintenance and performance",
        detail:
          "Contributed to the Next.js modernization and improved rendering, assets, and data loading through caching, lazy loading, and request optimization. Reduced startup time for the mobile web experience, with before-and-after measurements, and contributed localization, SEO, and journey analytics.",
      },
    ],
    outcome: [
      "The development-time reduction is an approximate internal estimate; performance figures are approximate before-and-after measurements covering different scopes and may overlap.",
      "Shared web features reduced duplicate implementation across the patient and doctor apps. Web-content updates could ship independently of native app releases.",
    ],
    metrics: [
      {
        value: "~50%",
        label: "reduced development time from shared web features",
      },
      {
        value: "~30%",
        label: "improvement in measured web-performance metrics",
      },
      { value: "~35%", label: "reduction in average data-loading time" },
      { value: "~30–40%", label: "reduction in mobile web startup time" },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
      "Ionic",
      "Redux / RTK",
      "Material UI",
      "REST API",
    ],
    demo: null,
    featured: true,
  },
  {
    slug: "datapure-ai",
    order: "02",
    name: "DataPure AI",
    subtitle: "High-volume canvas annotation workspace",
    role: "Front-end Developer (Contract)",
    period: "Aug 2022 – Nov 2022",
    context: "Contract · ran concurrently with Cura Healthcare",
    summary:
      "Built the client-side annotation application from the ground up with React, the Canvas API, and Konva.js, handling 9,000+ shapes within a single workspace.",
    preview: {
      problem: "One annotation workspace handles thousands of shapes at once.",
      approach:
        "A React, Canvas, and Konva workspace with Redux state for concurrent operations and a redesigned drawing workflow.",
      result:
        "9,000+ shapes in a single workspace, with an approximately 80% improvement in annotator productivity.",
    },
    contextLabel: "Context",
    constraints: [
      "A single annotation workspace renders and manipulates 9,000+ shapes at once.",
      "Annotation workflows involved simultaneous operations with consistent UI state across them.",
    ],
    built: [
      {
        title: "Built the annotation workspace",
        detail:
          "Built the client-side application from the ground up with React, the Canvas API, and Konva.js.",
      },
      {
        title: "Designed the Redux state layer",
        detail:
          "Designed Redux state management for complex annotation workflows, keeping UI state consistent across simultaneous operations.",
      },
      {
        title: "Redesigned the drawing workflow",
        detail:
          "Reworked the drawing flow and added keyboard-shortcut support in the React interface.",
      },
      {
        title: "Added persistence across the stack",
        detail:
          "Contributed full-stack features for shape persistence and retrieval using Next.js API routes, Node.js, and MongoDB.",
      },
    ],
    outcome: [],
    metrics: [
      { value: "9,000+", label: "shapes in a single workspace" },
      { value: "80%", label: "improvement in annotator productivity" },
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Konva.js",
      "Canvas API",
      "Redux",
      "Node.js",
      "MongoDB",
    ],
    demo: "konva",
    confidentiality: true,
    featured: true,
  },
  {
    slug: "hammoq",
    order: "03",
    name: "Hammoq Inc",
    subtitle: "Automated marketplace listing engine",
    role: "Full-stack Developer",
    period: "Dec 2021 – Sep 2022",
    context: "Full-stack · React and TypeScript front end, Node.js back end",
    summary:
      "Engineered an automated listing engine end to end, raising daily listing throughput 8× without adding headcount.",
    preview: {
      problem:
        "Listing throughput sat at roughly 10 listings per day, and the MongoDB model needed rework.",
      approach:
        "An automated listing engine on React, TypeScript, and Node.js/Express, with a redesigned MongoDB data model.",
      result: "Daily listing throughput increased 8× without adding headcount.",
    },
    contextLabel: "The problem",
    constraints: [
      "Daily listing throughput was approximately 10 listings per day.",
      "The MongoDB data model needed to align with business requirements, and query performance needed improvement.",
    ],
    built: [
      {
        title: "Automated the listing pipeline",
        detail:
          "Engineered an automated listing engine on React, TypeScript, and Node.js/Express.",
      },
      {
        title: "Built full-stack features end to end",
        detail:
          "Built features across the React and TypeScript front end and the Node.js, Express, and MongoDB back end.",
      },
      {
        title: "Redesigned the MongoDB architecture",
        detail:
          "Redesigned the database architecture to improve query performance and align the data model with business requirements.",
      },
    ],
    outcome: [
      "Daily listing throughput increased 8×, from approximately 10 to 80+ listings per day, without adding headcount.",
    ],
    metrics: [
      { value: "8×", label: "daily listing throughput" },
      { value: "10 → 80+", label: "listings per day, no added headcount" },
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux / RTK",
      "Material UI",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    demo: null,
    featured: true,
  },
  {
    slug: "rankmint",
    order: "04",
    name: "RankMint",
    subtitle: "AI-powered SEO and content-analysis product",
    role: "Developer · Personal product",
    period: "Live in production",
    context: "Public product · rankmint.vercel.app",
    summary:
      "A live SEO and content-analysis tool that turns a manual audit that took hours into a single pass.",
    preview: {
      problem: "Manual SEO audits took hours.",
      approach:
        "A real-time analysis tool with a 6-dimensional scoring engine, 3-tier keyword discovery, and a 5-category site health check.",
      result: "Audits go from hours to seconds, live in production.",
    },
    contextLabel: "The problem",
    constraints: ["Manual SEO audits took hours to complete."],
    built: [
      {
        title: "Real-time analysis and scoring",
        detail:
          "Architected a real-time, AI-powered analysis tool on LLM and REST APIs, with a 6-dimensional scoring engine.",
      },
      {
        title: "Keyword discovery and site health",
        detail:
          "Built a 3-tier keyword discovery system and a 5-category website health checker that surface actionable recommendations in a single pass.",
      },
      {
        title: "Rich-text editor and exports",
        detail:
          "Implemented a rich-text editor with RESTful API integration and multi-format export support.",
      },
    ],
    outcome: ["Live and publicly usable at rankmint.vercel.app."],
    metrics: [
      { value: "6", label: "scoring dimensions" },
      { value: "3-tier", label: "keyword discovery" },
      { value: "hours → seconds", label: "manual audit time" },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "LLM APIs",
      "REST API",
    ],
    liveUrl: "https://rankmint.vercel.app/",
    demo: "screenshot",
    image: "/images/samples/rankmint.png",
    imageAlt:
      "Screenshot of the RankMint SEO analysis interface, showing a website health score and category breakdown.",
    featured: true,
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
