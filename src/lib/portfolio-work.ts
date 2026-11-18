import { portfolioProjects } from "./portfolio-data";

const evidence = {
  incidentdesk: {
    cardRole: "Full-stack · Incident workflow",
    status: "Working demo",
    alt: "IncidentDesk sample report with the affected release, handoff controls and a versioned runbook",
    caption: "Guest workspace with synthetic incident data.",
    reflection: "I would test the handoff with support and engineering teams to see which details they still have to ask for after approval.",
  },
  leakly: {
    cardRole: "Product development · Web and iOS",
    status: "Working app",
    alt: "Leakly subscription picker with popular services and an option to add a custom subscription",
    caption: "Adding a subscription in the web app.",
    reflection: "The next thing I would test is how quickly a new user can enter their existing subscriptions and find what renews next.",
  },
  tailorcv: {
    cardRole: "Full-stack · AI integration",
    status: "Working app",
    alt: "RezRush landing page showing the resume tailoring workflow and the Start free action",
    caption: "The entry point for the resume-tailoring workflow.",
    reflection: "I would test how often a tailored draft preserves the applicant's original claims and which edits people make before exporting.",
  },
  "job-application-tracker": {
    cardRole: "Full-stack · End-to-end testing",
    status: "Working demo",
    alt: "Job Application Tracker guest dashboard with sample applications and a status filter",
    caption: "Guest dashboard with sample applications.",
    reflection: "I would check whether stage history answers the questions that come up after a few weeks of applications, when the list becomes harder to scan.",
  },
  "even-and-mark": {
    cardRole: "Frontend · Motion design",
    status: "Redesign concept",
    alt: "Even & Mark redesign concept with large event-industry typography and a split-flap clock in the navigation",
    caption: "The opening screen of the event-agency redesign concept.",
    reflection: "I would test the clock on touch devices and check whether the time-of-day cues help readers find the services they are looking for.",
  },
};

export const work = portfolioProjects.map((project) => {
  const proof = evidence[project.id as keyof typeof evidence];
  return {
    ...project,
    ...proof,
    image: `/images/work/${project.id}.webp`,
    width: project.id === "leakly" ? 650 : 1240,
    height: project.id === "leakly" ? 689 : 698,
  };
});

export type Work = (typeof work)[number];
