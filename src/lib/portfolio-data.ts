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
    "Australia-based junior developer focused on sharp frontend craft, practical full-stack delivery, and AI-assisted product workflows.",
  intro:
    "I build expressive, responsive interfaces with React and Next.js, then connect them to clean data models, testing habits, and deployment-ready code.",
  email: "kanghyeoklee@users.noreply.github.com",
  github: "https://github.com/seed75/khlee",
  linkedin: "https://www.linkedin.com/",
  location: "Australia / Remote",
  availability: "Open to junior frontend, full-stack, and AI developer roles",
};

export const heroStats = [
  { value: "Junior FE", label: "target role" },
  { value: "AI-ready", label: "product mindset" },
  { value: "3 Projects", label: "case studies" },
  { value: "Australia", label: "job market" },
  { value: "Next.js 16", label: "app router" },
  { value: "Remotion", label: "motion reel" },
  { value: "TypeScript", label: "daily stack" },
  { value: "Build OK", label: "verified" },
];

export const projects: Project[] = [
  {
    id: "subscription-cost-manager",
    name: "Subscription Cost Manager",
    tagline:
      "A personal finance MVP concept that helps users track subscriptions, recurring bills, free trials, and potential savings.",
    role: "Product planning, MVP scope, UI information architecture",
    period: "MVP concept",
    impact:
      "Turned a broad money-management idea into a focused subscription tracking product that can be built and validated quickly.",
    problem:
      "Users often forget recurring payments and free trials because subscription details are spread across banking apps, emails, and memory.",
    decision:
      "Scoped the MVP around manual subscription entry, monthly totals, upcoming renewal dates, trial reminders, cancellation notes, and a simple paid-plan path.",
    result:
      "Produced a build-ready product brief with target users, pricing logic, validation questions, launch phases, and core data structure.",
    stack: ["Product UX", "MVP Planning", "Next.js", "TypeScript", "Local Storage"],
    metrics: ["5-item MVP scope", "Free/paid model", "User validation script"],
    accent: "#B9F227",
    secondaryAccent: "#2F6BFF",
  },
  {
    id: "ai-interview-portfolio",
    name: "AI Interview Portfolio",
    tagline:
      "A job-focused personal portfolio designed for Australian junior frontend, full-stack, and AI developer applications.",
    role: "Frontend design, Next.js implementation, content modelling",
    period: "2026",
    impact:
      "Built a dynamic hiring surface that explains projects through challenge, contribution, outcome, skills, resume, and contact flows.",
    problem:
      "A generic portfolio can look attractive but still fail recruiters if it does not quickly communicate role fit, project ownership, and technical evidence.",
    decision:
      "Created a reusable project data model powering the homepage, printable resume route, and Remotion reel, with bold motion and responsive visual hierarchy.",
    result:
      "Shipped a Next.js 16 portfolio with a printable resume page, interactive sections, verified production build, and GitHub deployment-ready source.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Motion", "Tailwind CSS"],
    metrics: ["2 app routes", "Responsive UI", "Build verified"],
    accent: "#FF6B57",
    secondaryAccent: "#FF4FD8",
  },
  {
    id: "remotion-portfolio-reel",
    name: "Remotion Portfolio Reel",
    tagline:
      "A React-based motion reel that turns portfolio project data into a short video-style hiring pitch.",
    role: "Remotion composition, animation system, render pipeline",
    period: "2026",
    impact:
      "Added a memorable video layer to the portfolio so recruiters can scan technical range before reading the full case studies.",
    problem:
      "Static portfolio pages can miss the energy and storytelling needed to stand out in a crowded junior developer applicant pool.",
    decision:
      "Used Remotion Player, Renderer, Transitions, Motion Blur, Lottie, and Three.js from a shared project data source.",
    result:
      "Created an embedded reel, CLI render script, and still-frame export path while keeping the content synced with the website.",
    stack: ["Remotion", "Renderer", "Player", "Transitions", "Lottie", "Three.js"],
    metrics: ["7-second reel", "Single data source", "MP4-ready pipeline"],
    accent: "#2F6BFF",
    secondaryAccent: "#B9F227",
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
