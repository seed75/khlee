# Kanghyeok Lee Portfolio

A job-focused personal portfolio for junior frontend, full-stack, and AI developer roles in Australia.

The site is designed to give recruiters and engineering teams a fast read on my strengths: expressive frontend implementation, practical product thinking, AI-ready workflows, and clean project storytelling.

## Highlights

- Dynamic personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Motion.
- Selected project case studies written around challenge, contribution, and outcome.
- Printable resume route at `/resume`.
- Responsive, high-energy visual design with verified production build.

## Selected Projects

### Leakly

A subscription and recurring-payment tracker that shows exactly what's about to auto-charge this month, before it happens.

My focus:

- Scoped a focused MVP (manual entry, monthly totals, a 7-day due-soon view, trial-end warnings, a spending calendar) instead of over-building bank/card integrations up front.
- Shipped it as an installable, English/Korean, light/dark web app (PWA).
- Extended the same codebase into a Capacitor-wrapped iOS build running in Xcode's Simulator, as a step toward the App Store.

### TailorCV (RezRush)

An AI resume tool: paste a resume and a job description, get one tailored to that specific job back in seconds.

My focus:

- Built two independent flows on one data model — a fast paste-and-tailor path, and a "Build" mode that generates a resume from scratch for people without one ready.
- Wired up Supabase auth, OpenAI/Groq-powered rewriting, resume/DOCX parsing, PDF export, and Stripe for a paid tier.
- Kept the two flows additive so the core "paste it, tailor it" speed pitch never got slower for existing users.

### Job Application Tracker

A full-stack tracker built to solve a real problem from my own job search: losing track of where I'd applied and at what stage.

My focus:

- Built a Node/Express API over PostgreSQL with a Controller → Service → Repository split, rather than one flat routes file.
- Added JWT + bcrypt auth and a status-history table, instead of just overwriting the current status on each change.
- Covered the real user flows with Playwright end-to-end tests, not just unit-level pieces.

## Tech Stack

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS, Motion, lucide-react
- Quality: ESLint, TypeScript, Playwright checks, production build verification
- Product direction: junior frontend, full-stack fundamentals, AI-assisted workflows

## Getting Started

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

## Project Structure

```text
src/app/                  Next.js App Router pages
src/app/resume/           Printable resume route
src/components/portfolio/ Interactive portfolio UI
src/lib/portfolio-data.ts Shared profile, skills, and project data
public/images/            Generated visuals and preview images
scripts/                  Rendering helpers
```

## Role Fit

I am positioning this portfolio for:

- Junior Frontend Developer roles
- Junior Full-stack Developer roles
- AI Developer or AI Product Builder roles
- Product-focused teams that value clear UI, fast learning, and thoughtful execution

## Next Improvements

- Add live deployment URL after Vercel deployment.
- Add real project screenshots or short demo videos for each case study.
- Add Lighthouse report results after deployment.
