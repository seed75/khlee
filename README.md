# Kanghyeok Lee Portfolio

This is my personal portfolio as a Sydney-based junior developer.

I built it around the projects I have actually been making: a subscription tracker, an AI resume tool, a job application tracker, and a static agency redesign. I wanted the site to feel direct, visual, and specific, not like a generic portfolio template.

## What I Wanted To Show

- I can take a small product idea and ship a working first version.
- I care about UI, but I also care about the data flow behind it.
- I use AI APIs where they fit the workflow, not just as decoration.
- I can explain what I built, what I skipped, and why.

## Projects

### Leakly

I built Leakly because forgotten subscriptions are a real, annoying money problem.

- Manual subscription entry, monthly totals, due-soon view, trial warnings, and a spending calendar.
- English/Korean support, light/dark mode, and installable PWA behaviour.
- Capacitor iOS wrapper running the same codebase in Xcode Simulator.

### TailorCV (RezRush)

I built this because tailoring a resume for each job is useful, but repetitive enough that people avoid it.

- Paste-and-tailor flow for existing resumes.
- Build-from-scratch flow for users starting from a background description.
- Supabase auth, OpenAI/Groq rewriting, resume/DOCX parsing, PDF export, and Stripe wiring.

### Job Application Tracker

I built this after my own job search started getting messy in a spreadsheet.

- Node/Express API over PostgreSQL with Controller, Service, and Repository layers.
- JWT + bcrypt authentication and status history.
- Dashboard, status filtering, CRUD flows, and Playwright end-to-end tests.

### Even & Mark

I built this to push my visual frontend work without relying on a framework.

- Plain HTML, CSS, and JavaScript.
- Conference-day timeline concept with a split-flap clock and lighting transitions.
- Reduced-motion support and no build step.

## Stack

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS, Motion, lucide-react
- Full-stack: Node.js, Express, PostgreSQL, Supabase, Stripe, API design
- AI: OpenAI/Groq integrations for rewriting and generation flows
- Quality: ESLint, TypeScript, Playwright, production build checks

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run lint
npm run build
```
