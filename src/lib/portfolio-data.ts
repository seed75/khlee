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
    "I am a Sydney-based junior developer who likes turning small, annoying problems into working products.",
  intro:
    "Most of my projects start from something I actually felt: forgotten subscriptions, messy job applications, repetitive resume edits, or boring websites. I usually build the first useful version quickly, then tighten the UI, data flow, and edge cases until it feels like something I would use myself.",
  email: "ed75hyeok@gmail.com",
  github: "https://github.com/seed75",
  siteUrl: "https://khlee-dusky.vercel.app",
  linkedin: "https://www.linkedin.com/in/kanghyeoklee62/",
  location: "Sydney, Australia",
  availability: "Open to junior frontend, full-stack, and AI developer roles",
};

export const heroStats = [
  { value: "Junior Dev", label: "target role" },
  { value: "Sydney", label: "based in" },
  { value: "4 Builds", label: "shipped work" },
  { value: "Next.js 16", label: "app router" },
  { value: "TypeScript", label: "daily stack" },
  { value: "AI APIs", label: "integration work" },
  { value: "E2E tests", label: "quality habit" },
];

export const projects: Project[] = [
  {
    id: "leakly",
    name: "Leakly",
    tagline:
      "A subscription and recurring-payment tracker that shows exactly what's about to auto-charge this month, before it happens.",
    role: "Solo product build, planning, UI, data model, iOS packaging",
    period: "2026",
    impact:
      "I built Leakly because subscriptions are easy to forget until the money is already gone.",
    problem:
      "The problem felt simple but familiar: recurring charges and free trials are scattered across banking apps, inboxes, and memory.",
    decision:
      "I kept the first version manual on purpose: subscription entry, monthly totals, a 7-day due-soon view, trial warnings, and a spending calendar. I left out bank/card linking because I wanted a version I could actually ship, test, and explain before adding privacy-heavy integrations. After that, I wrapped the same app with Capacitor for iOS.",
    result:
      "The result is a working English/Korean, light/dark, installable PWA with home, subscriptions, calendar, and settings screens, plus an iOS build running in Xcode Simulator.",
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
    role: "Solo full-stack build, AI integration, auth, payments, PDF export",
    period: "2026",
    impact:
      "I built this because rewriting a resume for every job is useful, but repetitive enough that people skip it.",
    problem:
      "During a busy job search, tailoring each resume takes time and mental energy. I wanted the tool to do the first structured pass, not pretend to replace the applicant.",
    decision:
      "I built two flows on one data model: a fast \"paste and tailor\" path for people who already have a resume, and a \"Build\" mode for people starting from a background description. I also added templates because the output should feel usable, not like raw AI text pasted into a box.",
    result:
      "I shipped accounts with Supabase, OpenAI/Groq-powered rewriting, resume/DOCX parsing, PDF export, and Stripe wiring for a paid tier.",
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
    role: "Solo full-stack build, API, auth, database, E2E tests",
    period: "2026",
    impact:
      "I built this after feeling how quickly job applications become hard to track in a spreadsheet.",
    problem:
      "When I was applying to many companies at once, I wanted more than a list of company names. I wanted stages, history, and a quick answer to \"what changed?\"",
    decision:
      "I built a Node/Express API over PostgreSQL with Controller, Service, and Repository layers instead of one flat routes file. I added JWT + bcrypt auth and a status-history table so changes are recorded instead of just overwritten.",
    result:
      "I shipped register/login, CRUD on applications, status filtering from Wishlist through Rejected, a dashboard summary, and Playwright tests for the main flows.",
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
    role: "Solo frontend build, concept, motion design, no-framework implementation",
    period: "2026",
    impact:
      "I built this to push the visual side harder without hiding behind a framework.",
    problem:
      "A lot of agency sites feel interchangeable: hero, services grid, contact form. For an events company, I wanted the page itself to feel more like an event.",
    decision:
      "I staged the page as a run-sheet. A split-flap header clock moves from 08:00 to 17:30 as you scroll, the background light changes through the day, and the sections use timecodes instead of generic labels. I also added reduced-motion support.",
    result:
      "I shipped a static, dependency-free site with a working split-flap clock, synced lighting transitions, and a hover interaction that cuts the lights on the hero wordmark.",
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
    signal: "responsive screens",
    detail:
      "I like screens that have a point of view, but I still check the practical bits: mobile layout, empty states, hover states, and readable content.",
    accent: "#B9F227",
  },
  {
    name: "Frontend Architecture",
    signal: "clear structure",
    detail:
      "I try to keep data, routes, and UI components separate enough that I can come back later and change things without fighting my own code.",
    accent: "#FF4FD8",
  },
  {
    name: "AI Integration",
    signal: "practical use cases",
    detail:
      "I use AI where it fits the workflow, like rewriting or generation, and avoid adding it just because it sounds impressive.",
    accent: "#FF6B57",
  },
  {
    name: "Quality Habit",
    signal: "check the flow",
    detail:
      "I am still junior, so I lean on checks: TypeScript, linting, production builds, and browser tests before I call a project done.",
    accent: "#2F6BFF",
  },
];

export const timeline: ExperienceItem[] = [
  {
    step: "01",
    label: "I start from the screen",
    detail: "I care about how the product feels first: layout, hierarchy, responsiveness, and whether the user can understand it quickly.",
  },
  {
    step: "02",
    label: "Then I make it real",
    detail: "I connect the UI to auth, databases, API routes, file parsing, payments, and deployment constraints when the product needs it.",
  },
  {
    step: "03",
    label: "I use AI as a feature",
    detail: "For me, AI is useful when it removes repetitive work or creates a better first draft, not when it is just a label on the homepage.",
  },
  {
    step: "04",
    label: "I explain my trade-offs",
    detail: "Most projects here are solo builds, so I can talk through what I chose, what I skipped, and what I would improve next.",
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
