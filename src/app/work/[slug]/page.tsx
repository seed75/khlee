import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PortfolioFooter, PortfolioHeader } from "@/components/portfolio/PortfolioLayout";
import { work } from "@/lib/portfolio-work";

type CaseStudyProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return work.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = work.find(({ id }) => id === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: `/work/${project.id}` },
    openGraph: { title: project.name, description: project.tagline, images: [{ url: project.image, alt: project.alt }] },
  };
}

export default async function CaseStudy({ params }: CaseStudyProps) {
  const { slug } = await params;
  const index = work.findIndex(({ id }) => id === slug);
  if (index === -1) notFound();
  const project = work[index];
  const next = work[(index + 1) % work.length];

  return (
    <div className="portfolio">
      <PortfolioHeader />
      <main className="folio-shell case-page" id="main-content" tabIndex={-1}>
        <Link className="folio-text-link case-back" href="/work"><ArrowLeft size={17} aria-hidden="true" /> All work</Link>
        <header className="case-header">
          <div><h1>{project.name}</h1><p>{project.tagline}</p></div>
          {project.liveUrl && <a className="folio-button" href={project.liveUrl}>{project.status === "Working demo" ? "Try the demo" : "Open project"} <ArrowUpRight size={18} aria-hidden="true" /></a>}
        </header>

        <dl className="case-facts">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Year</dt><dd>{project.period}</dd></div>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
          <div><dt>Stack</dt><dd>{project.stack.join(" · ")}</dd></div>
        </dl>

        <figure className="case-image" data-project={project.id}>
          <div><Image src={project.image} width={project.width} height={project.height} alt={project.alt} preload sizes="(max-width: 700px) 94vw, 1120px" /></div>
          <figcaption>{project.caption}</figcaption>
        </figure>

        <div className="case-story">
          <section><h2>The problem</h2><p>{project.problem}</p></section>
          <section><h2>What I built</h2><p>{project.decision}</p></section>
          <section><h2>Outcome</h2><p>{project.result}</p></section>
          <section><h2>What I’d test next</h2><p>{project.reflection}</p></section>
        </div>

        <nav className="case-next" aria-label="More project work">
          <Link className="folio-text-link" href={`/work/${next.id}`}>Next project · {next.name} <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </nav>
      </main>
      <PortfolioFooter />
    </div>
  );
}
