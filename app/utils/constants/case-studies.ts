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
    subtitle: "Cross-platform telemedicine web and mobile platform",
    role: "Senior Front-end Developer",
    period: "Sep 2022 – Present · 4 years",
    context: "Remote · Saudi health-tech platform",
    summary:
      "Unified the web and mobile codebase into one cross-platform React and React Native solution serving web, iOS, and Android, and improved the platform's measured web-performance and data-loading metrics.",
    preview: {
      problem:
        "Web and mobile were separate codebases, and the web platform's performance and data loading needed work.",
      approach:
        "One React and React Native codebase for web, iOS, and Android, plus rendering, asset, loading, and caching work in Next.js.",
      result: "Average data-loading time down roughly 35%.",
    },
    contextLabel: "Context",
    constraints: [
      "Web and mobile were separate codebases rather than one cross-platform solution.",
      "The platform serves 3,000+ monthly consultations.",
      "Integrations with major Saudi health insurance providers (MedGulf, Alrajhi Takaful, BUPA) were part of the platform.",
      "A real-time patient–doctor chat system supports online consultations.",
    ],
    built: [
      {
        title: "Consolidated web and mobile into one codebase",
        detail:
          "Built the web and mobile codebase into a single cross-platform React and React Native solution serving web, iOS, and Android.",
      },
      {
        title: "Architected the Next.js and TypeScript platform",
        detail:
          "Architected and maintained the platform on Next.js and TypeScript, and designed reusable front-end patterns for authentication, API integration, state management, and cross-platform functionality.",
      },
      {
        title: "Performance and loading optimization",
        detail:
          "Worked on rendering, asset, and loading optimizations, plus caching, lazy loading, and request optimization in Next.js.",
      },
      {
        title: "Insurance integrations and real-time chat",
        detail:
          "Co-developed the MedGulf, Alrajhi Takaful, and BUPA integrations, and built the real-time patient–doctor chat system on React and REST APIs.",
      },
      {
        title: "Payment, auth, SEO, and tracking delivery",
        detail:
          "Led delivery of payment gateways, authentication flows, SEO enhancements, and user-tracking integrations.",
      },
      {
        title: "Code review and cross-team collaboration",
        detail:
          "Reviewed front-end implementations and worked with product, back end, mobile, and design teams on technical trade-offs and delivery decisions.",
      },
    ],
    outcome: [
      "The insurance integrations expanded service accessibility and revenue streams.",
    ],
    metrics: [
      { value: "~50%", label: "less development time after consolidation" },
      { value: "3,000+", label: "monthly consultations supported" },
      {
        value: "~30%",
        label: "improvement in measured web-performance metrics",
      },
      { value: "~35%", label: "faster average data loading" },
    ],
    stack: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
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
        "9,000+ shapes in a single workspace, with a faster annotation workflow.",
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
      result: "Daily throughput up several-fold without adding headcount.",
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
