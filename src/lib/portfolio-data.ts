export type Project = {
  id: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  impact: string;
  problem: string;
  decision: string;
  result: string;
  stack: string[];
  metrics: string[];
  accent: string;
  secondaryAccent: string;
  liveUrl?: string;
};

export type LabItem = {
  name: string;
  signal: string;
  detail: string;
  accent: string;
};

export type ExperienceItem = {
  step: string;
  label: string;
  detail: string;
};

export const profile = {
  name: "Kanghyeok Lee",
  role: "Junior Frontend / Full-stack / AI Developer",
  headline:
    "I build things that stop money and bugs from quietly leaking out.",
  intro:
    "React and Next.js by day, obsessive bug-hunter by night. I shipped an app called Leakly to stop subscription leaks; turns out I'm just as allergic to leaky code.",
  email: "ed75hyeok@gmail.com",
  github: "https://github.com/seed75/khlee",
  linkedin: "https://www.linkedin.com/in/kanghyeoklee62/",
  location: "Sydney, Australia",
  availability: "Open to junior frontend, full-stack, and AI developer roles",
};

export const heroStats = [
  { value: "Junior FE", label: "target role" },
  { value: "AI-ready", label: "product mindset" },
  { value: "4 Projects", label: "case studies" },
  { value: "Australia", label: "job market" },
  { value: "Next.js 16", label: "app router" },
  { value: "Remotion", label: "motion reel" },
  { value: "TypeScript", label: "daily stack" },
  { value: "Build OK", label: "verified" },
];

export const projects: Project[] = [
  {
    id: "leakly",
    name: "Leakly",
    tagline:
      "A subscription and recurring-payment tracker that shows exactly what's about to auto-charge this month, before it happens.",
    role: "Solo product build — planning, UI, data model, iOS packaging",
    period: "2026",
    impact:
      "Took a common money-leak problem (forgotten subscriptions and trials) from a one-line idea to a working, installable app with a real feature set.",
    problem:
      "Recurring charges and free trials are scattered across banking apps, inboxes, and memory, so people notice they're overpaying only after the money is already gone.",
    decision:
      "Built a focused MVP around manual subscription entry, monthly totals, a 7-day due-soon view, trial-end warnings, and a spending calendar — deliberately left out bank/card linking and SMS scanning to ship something real instead of something ambitious-but-stalled. Later extended it into a Capacitor-wrapped iOS shell so it can run as an installable app, not just a browser tab.",
    result:
      "Shipped a working English/Korean, light/dark, installable web app (PWA) with home/subscriptions/calendar/settings screens, and a Capacitor iOS build that runs the same codebase in Xcode's Simulator as a step toward the App Store.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Capacitor (iOS)"],
    metrics: ["4 core screens", "EN / KO i18n", "PWA + iOS wrapper"],
    accent: "#B9F227",
    secondaryAccent: "#2F6BFF",
    liveUrl: "https://leakly-inky.vercel.app",
  },
  {
    id: "tailorcv",
    name: "TailorCV (RezRush)",
    tagline:
      "An AI resume tool: paste a resume and a job description, get one tailored to that specific job back in seconds.",
    role: "Solo full-stack build — AI integration, auth, payments, PDF export",
    period: "2026",
    impact:
      "Replaced the manual, repetitive job-application step of rewriting a resume for every posting with a single AI-assisted pass.",
    problem:
      "Tailoring a resume to each job posting is repetitive and easy to skip under time pressure, which quietly hurts application quality.",
    decision:
      "Built two flows on one data model: a fast \"paste and tailor\" path for people who already have a resume, and a \"Build\" mode that generates a complete resume from just a name and a background description for people who don't — rendered into a small set of visual templates rather than one fixed layout.",
    result:
      "Shipped an end-to-end product: Supabase-authenticated accounts, OpenAI/Groq-powered rewriting, resume/DOCX parsing on the way in, PDF export on the way out, and Stripe wired up for a paid tier.",
    stack: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Stripe"],
    metrics: ["2 independent flows", "PDF + DOCX I/O", "AI rewrite in ~10s"],
    accent: "#FF6B57",
    secondaryAccent: "#FF4FD8",
    liveUrl: "https://rez-rush.vercel.app",
  },
  {
    id: "job-application-tracker",
    name: "Job Application Tracker",
    tagline:
      "A full-stack tracker built to solve a real problem I had while job hunting: losing track of where I'd applied and at what stage.",
    role: "Solo full-stack build — API, auth, database, E2E tests",
    period: "2026",
    impact:
      "Replaced a messy spreadsheet with a proper layered application: real auth, a real database, and a dashboard that answers \"where do things stand\" at a glance.",
    problem:
      "Applying to many companies at once makes it easy to lose track of which stage each application is at, and a flat spreadsheet doesn't hold status history or answer \"what changed and when.\"",
    decision:
      "Built a Node/Express API over PostgreSQL with a Controller → Service → Repository split (rather than one flat routes file) so auth, business rules, and data access stay separately testable, with JWT + bcrypt auth and a status-history table instead of just overwriting the current status.",
    result:
      "Shipped a working app — register/login, full CRUD on applications, status filtering (Wishlist through Rejected), a dashboard summary, and Playwright end-to-end tests covering the real user flows, not just unit-level pieces.",
    stack: ["Node.js", "Express", "PostgreSQL", "React", "Playwright"],
    metrics: ["Layered API architecture", "JWT + bcrypt auth", "Playwright E2E coverage"],
    accent: "#2F6BFF",
    secondaryAccent: "#B9F227",
    liveUrl: "https://job-apptracker.vercel.app",
  },
  {
    id: "even-and-mark",
    name: "Even & Mark",
    tagline:
      "A redesign concept for a Melbourne event and marketing agency, staged as a single conference day from 08:00 to 17:30.",
    role: "Solo frontend build — concept, motion design, no-framework implementation",
    period: "2026",
    impact:
      "Turned a generic agency-site brief into a distinctive, storytelling-led frontend, built entirely in vanilla HTML/CSS/JS with zero dependencies.",
    problem:
      "Agency and PCO websites tend to default to the same stock layout — hero, services grid, contact form — which does little to communicate a company that runs live events for a living.",
    decision:
      "Staged the whole page as one run-sheet: a split-flap header clock ticks from 08:00 to 17:30 as you scroll, the background light shifts from morning to golden hour to night in sync with it, and every section carries a timecode instead of a generic label — with all motion respecting prefers-reduced-motion.",
    result:
      "Shipped a fully static, dependency-free site (plain HTML/CSS/JS, no build step) with a working split-flap clock, synced lighting transitions, and a hover interaction that cuts the lights on the hero wordmark.",
    stack: ["HTML", "CSS", "JavaScript", "Motion Design"],
    metrics: ["Zero dependencies", "prefers-reduced-motion support", "Custom split-flap clock"],
    accent: "#FFC145",
    secondaryAccent: "#2F6BFF",
    liveUrl: "https://mark-even.vercel.app",
  },
];

export const labs: LabItem[] = [
  {
    name: "UI Implementation",
    signal: "pixel to product",
    detail:
      "I translate visual ideas into responsive components with clear states, accessible markup, and polished interaction details.",
    accent: "#B9F227",
  },
  {
    name: "Frontend Architecture",
    signal: "clean structure",
    detail:
      "I separate content models, component responsibilities, routes, and reusable UI patterns so projects stay easy to change.",
    accent: "#FF4FD8",
  },
  {
    name: "AI Product Thinking",
    signal: "useful AI, not hype",
    detail:
      "I frame AI features around user value, workflow speed, and measurable outcomes before adding complexity.",
    accent: "#FF6B57",
  },
  {
    name: "Quality Habit",
    signal: "tested and measured",
    detail:
      "I use TypeScript, linting, production builds, browser checks, accessibility basics, and performance awareness before shipping.",
    accent: "#2F6BFF",
  },
];

export const timeline: ExperienceItem[] = [
  {
    step: "01",
    label: "Junior Frontend Candidate",
    detail: "Focused on React, Next.js, TypeScript, modern CSS, motion, and responsive UI implementation.",
  },
  {
    step: "02",
    label: "Full-stack Learner",
    detail: "Comfortable connecting UI to routes, data models, API thinking, deployment flow, and product constraints.",
  },
  {
    step: "03",
    label: "AI Developer Direction",
    detail: "Interested in AI-assisted products, prompt-driven workflows, automation, and practical user-facing AI tools.",
  },
  {
    step: "04",
    label: "Ready to Interview",
    detail: "Prepared to discuss each project through problem definition, technical choices, trade-offs, and next steps.",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    title: "Full-stack / AI",
    items: ["App Router", "API Design", "Data Modelling", "AI Workflows", "Automation"],
  },
  {
    title: "Quality",
    items: ["Playwright", "Lighthouse", "ESLint", "Accessibility", "SEO"],
  },
];
