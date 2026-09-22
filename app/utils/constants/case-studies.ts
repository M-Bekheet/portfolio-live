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
    subtitle: "Embedded telemedicine website and a Flutter doctor app",
    role: "Senior Front-end Developer",
    period: "Sep 2022 – Present · 4 years",
    context: "Remote · Saudi health-tech platform",
    summary:
      "I built the replacement Flutter doctor app end to end and the majority of the doctor-facing features on the shared Next.js website, on a Saudi telemedicine platform that serves one website inside both its patient and doctor apps through WebViews.",
    preview: {
      problem:
        "The website is served inside both the patient app and the doctor app, and the doctor side needed a new native app built from the ground up.",
      approach:
        "Built the new doctor app in Flutter from the ground up, plus the shared website features both apps embed.",
      result:
        "Shared web features serve both apps, and web changes ship without an app-store release.",
    },
    contextLabel: "Context",
    constraints: [
      "The Next.js website is served inside both the patient app and the Flutter doctor app through WebViews.",
      "A separate React and Ionic SDK web app is embedded in the website, and was originally the default embedded experience in the patient app.",
      "The replacement doctor app was built from the ground up in Flutter.",
      "The platform serves 3,000+ monthly consultations.",
    ],
    built: [
      {
        title: "New Flutter doctor app, built end to end",
        detail:
          "Built the replacement doctor app in Flutter from the ground up, covering authentication, site-and-app communication, push notifications, permissions, pull-to-refresh, embedded support and analytics tools, and WebView lifecycle and startup behavior. It serves the same Next.js website as the patient app, where I also built roughly 80–90% of the doctor-facing features.",
      },
      {
        title: "Patient journeys on the shared website",
        detail:
          "Built authentication end to end across the client and the Next.js server layer (mobile OTP and email/password, registration, password reset, and session refresh), plus search, patient profiles, and roughly 90% of the consultation and bundle checkout front end with its back end and payment-service integration. Also built the partner consultation-booking integration, the dynamic doctor-browser UI, and the free-consultation and upgrade surfaces on WordPress content.",
      },
      {
        title: "Insurance integrations and real-time chat",
        detail:
          "Co-developed integrations with major Saudi health insurance providers (MedGulf, Alrajhi Takaful, BUPA) and built the real-time patient–doctor chat system.",
      },
      {
        title: "Cross-app mobile integration",
        detail:
          "Connected the Flutter apps and the embedded website with auto-login between app and website, deep links and QR entry points with post-link navigation, and native website-and-app communication. The separate SDK is embedded in the host website through an iframe.",
      },
      {
        title: "SDK web app contributions",
        detail:
          "Contributed to the separate React and Ionic SDK web app used inside the website, including checkout, chat performance, and lab-test and e-prescription ordering. I also contributed to the voice and video calling integration.",
      },
      {
        title: "Platform maintenance and performance",
        detail:
          "Kept the platform current and measurable: SEO sitemaps and discoverability, Google Analytics and Mixpanel campaign and journey tracking, roughly half of the localization work, and a contributed migration from Next.js 12 to 14. The measured web-performance improvement combined stack modernization with rendering, asset, and loading work, and data-loading time fell through caching, lazy loading, and request optimization in Next.js. Startup work focused on the embedded website's first paint — deferring noncritical notification and support initialization, splash timing, and WebView readiness on the critical path — measured before and after.",
      },
      {
        title: "Team leadership",
        detail:
          "Led three developers for eight months — guidance, standups, code reviews, planning, and task assignment — while remaining a senior front-end developer on the platform.",
      },
    ],
    outcome: [
      "Approximate internal figures cover different scopes and may overlap.",
      "Sharing one website across the patient and doctor apps is the main reason for the reduced development time: features built once are served in both apps instead of being implemented twice.",
      "Because the website is shared, web-content updates ship without a separate app-store release; changes to native app code still require one.",
      "The insurance integrations expanded service accessibility and revenue streams.",
    ],
    metrics: [
      {
        value: "~50%",
        label: "reduced development time from shared web features",
      },
      { value: "3,000+", label: "monthly consultations supported" },
      {
        value: "~30%",
        label: "improvement in measured web-performance metrics",
      },
      { value: "~35%", label: "reduction in average data-loading time" },
      { value: "~30–40%", label: "reduction in embedded website startup time" },
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
