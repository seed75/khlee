import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { work, type Work } from "@/lib/portfolio-work";
import { PortfolioFooter, PortfolioHeader } from "./PortfolioLayout";

const capabilities = [
  { title: "Readable interfaces", detail: "Responsive layouts, keyboard controls, and interaction that supports the content.", project: "even-and-mark", label: "Even & Mark" },
  { title: "Reliable workflows", detail: "Clear state changes, review permissions, and a record of decisions.", project: "incidentdesk", label: "IncidentDesk" },
  { title: "Practical AI", detail: "Structured inputs, editable drafts, and outputs people can export.", project: "tailorcv", label: "TailorCV" },
];

export function ProjectImage({ project, featured = false }: { project: Work; featured?: boolean }) {
  return (
    <Image
      src={project.image}
      alt={project.alt}
      width={project.width}
      height={project.height}
      preload={featured}
      sizes={featured ? "(max-width: 600px) 94vw, (max-width: 920px) 45vw, 680px" : "(max-width: 600px) 94vw, (max-width: 920px) 45vw, 510px"}
    />
  );
}

export function WorkGrid({ heading: Heading = "h3" }: { heading?: "h2" | "h3" }) {
  return (
    <div className="work-grid">
      {work.map((project, index) => (
        <article className="project-card" key={project.id} data-project={project.id}>
          <div className="project-media">
            <ProjectImage project={project} featured={index === 0} />
          </div>
          <div className="project-copy">
            <p className="project-category">{project.category}</p>
            <Heading>
              <Link href={`/work/${project.id}`}>
                {project.name} <ArrowUpRight size={23} aria-hidden="true" />
              </Link>
            </Heading>
            <p>{project.tagline}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PortfolioExperience() {
  return (
    <div className="portfolio">
      <PortfolioHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="folio-shell portfolio-hero" aria-labelledby="hero-heading">
          <h1 id="hero-heading">I build tools for <span>everyday work.</span></h1>
          <div className="hero-intro">
            <p>I’m {profile.name}, a Sydney-based junior developer working across frontend, full-stack, and AI.</p>
            <div className="folio-actions">
              <a className="folio-button" href="#projects">View work <ArrowDown size={18} aria-hidden="true" /></a>
              <a className="folio-text-link" href="#contact">Contact</a>
            </div>
          </div>
        </section>

        <section className="folio-shell work-section" id="projects" aria-labelledby="work-heading">
          <div className="section-heading">
            <h2 id="work-heading">Selected work</h2>
            <Link href="/work" className="folio-text-link">Browse all work <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <WorkGrid />
        </section>

        <section className="portfolio-capabilities" id="skills" aria-labelledby="skills-heading">
          <div className="folio-shell folio-split-section">
            <h2 id="skills-heading">What I build</h2>
            <ul className="capability-list">
              {capabilities.map((capability) => (
                <li key={capability.title}>
                  <div><h3>{capability.title}</h3><p>{capability.detail}</p></div>
                  <Link className="folio-text-link" href={`/work/${capability.project}`}>
                    {capability.label} <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="folio-shell folio-split-section portfolio-about" id="approach" aria-labelledby="about-heading">
          <h2 id="about-heading">How I work</h2>
          <div>
            <p>I start with a task someone needs to finish, then build the smallest version I can test from start to finish. Most projects here are solo builds, so I can explain the interface, the data model, and the trade-offs I made along the way.</p>
            <Link href="/resume" className="folio-text-link">Read my résumé <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <PortfolioFooter />
    </div>
  );
}
