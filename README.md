# Kanghyeok Lee Portfolio

A job-focused personal portfolio for junior frontend, full-stack, and AI developer roles in Australia.

The site is designed to give recruiters and engineering teams a fast read on my strengths: expressive frontend implementation, practical product thinking, AI-ready workflows, and clean project storytelling.

## Highlights

- Dynamic personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Motion.
- Selected project case studies written around challenge, contribution, and outcome.
- Printable resume route at `/resume`.
- Embedded Remotion reel using Player, Renderer, Transitions, Motion Blur, Lottie, and Three.js.
- Responsive, high-energy visual design with verified production build.

## Selected Projects

### Subscription Cost Manager

A personal finance MVP concept for tracking subscriptions, recurring bills, free trials, cancellation notes, and potential savings.

My focus:

- Narrowed the product from a broad finance app into a focused subscription-management MVP.
- Defined target users, first-screen information, free/paid plan logic, validation questions, and core data structure.
- Planned a build path that avoids over-scoping sensitive financial integrations too early.

### AI Interview Portfolio

This portfolio itself: a hiring surface for Australian junior frontend, full-stack, and AI developer applications.

My focus:

- Built a reusable project data model that powers the homepage, resume page, and Remotion reel.
- Designed a bold responsive interface that avoids the usual static portfolio template feel.
- Verified the app with linting and production build checks.

### Remotion Portfolio Reel

A short React-based motion reel that turns project data into video-style portfolio content.

My focus:

- Used Remotion composition patterns with transitions, Lottie, motion blur, and Three.js visuals.
- Kept website and reel content synced through the same portfolio data source.
- Added CLI scripts for video rendering and still-frame export.

## Tech Stack

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS, Motion, lucide-react
- Video: Remotion, Remotion Player, Renderer, Transitions, Motion Blur, Lottie, Three.js
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
npm run remotion:studio
npm run remotion:render
npm run remotion:still
```

## Project Structure

```text
src/app/                  Next.js App Router pages
src/app/resume/           Printable resume route
src/components/portfolio/ Interactive portfolio UI
src/lib/portfolio-data.ts Shared profile, skills, and project data
src/remotion/             Remotion composition and video assets
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

- Replace placeholder LinkedIn and email with final public contact details.
- Add live deployment URL after Vercel deployment.
- Add real project screenshots or short demo videos for each case study.
- Add Lighthouse report results after deployment.
- Expand the Subscription Cost Manager concept into a working MVP.
