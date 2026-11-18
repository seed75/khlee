import type { Metadata } from "next";
import { PortfolioFooter, PortfolioHeader } from "@/components/portfolio/PortfolioLayout";
import { WorkGrid } from "@/components/portfolio/PortfolioExperience";

export const metadata: Metadata = {
  title: "Work",
  description: "Five projects by Kanghyeok Lee with real interfaces, development decisions, and live demos.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="portfolio">
      <PortfolioHeader />
      <main className="folio-shell work-index" id="main-content" tabIndex={-1}>
        <header className="work-index-header">
          <h1>Work</h1>
          <p>Five projects, from incident review to a conference website. Each case study includes the build decisions and a working link.</p>
        </header>
        <WorkGrid heading="h2" />
      </main>
      <PortfolioFooter />
    </div>
  );
}
