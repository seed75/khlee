import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function PortfolioHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="portfolio-header" id="top">
        <div className="folio-shell portfolio-header-inner">
          <Link className="portfolio-name" href="/">{profile.name}</Link>
          <nav aria-label="Main navigation">
            <Link href="/work">Work</Link>
            <Link href="/#approach">About</Link>
            <Link href="/resume">Résumé</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="portfolio-footer" id="contact">
      <div className="folio-shell footer-inner">
        <div>
          <h2>Let’s talk.</h2>
          <p>{profile.availability}. Based in Sydney, Australia.</p>
        </div>
        <a className="footer-email" href={`mailto:${profile.email}`}>
          {profile.email} <ArrowUpRight size={19} aria-hidden="true" />
        </a>
        <div className="footer-links">
          <span>{profile.name}</span>
          <nav aria-label="Professional links">
            <a href={profile.github}>GitHub</a>
            <a href={profile.linkedin}>LinkedIn</a>
            <Link href="/resume">Résumé</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
