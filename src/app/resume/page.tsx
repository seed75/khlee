import Link from "next/link";
import { GitBranch, Globe, Mail, MapPin } from "lucide-react";
import { profile, projects, stackGroups, timeline } from "@/lib/portfolio-data";
import { PrintButton } from "./PrintButton";

export const metadata = {
  title: "Resume | Kanghyeok Lee",
  description:
    "My resume as a Sydney-based junior frontend, full-stack, and AI developer.",
};

export default function ResumePage() {
  return (
    <main className="resume-print-root min-h-screen bg-[#f7f7ef] text-[#101114]">
      <section className="resume-print-shell mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link
            href="/"
            className="border border-black px-4 py-2 text-sm font-black transition hover:bg-black hover:text-white"
          >
            Back to my portfolio
          </Link>
          <PrintButton />
        </div>

        <article className="resume-print-card border border-black bg-white p-6 shadow-[12px_12px_0_#101114]">
          <header className="resume-print-header border-b-4 border-black pb-6">
            <p className="text-sm font-black uppercase text-[#2F6BFF]">{profile.role}</p>
            <h1 className="resume-print-name mt-3 text-5xl font-black leading-none sm:text-7xl">
              {profile.name}
            </h1>
            <p className="resume-print-summary mt-4 max-w-3xl text-base leading-7 text-black/72">
              {profile.headline} {profile.intro}
            </p>
            <div className="resume-print-contact mt-5 flex flex-wrap gap-3 text-sm font-bold">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border border-black px-3 py-2 transition hover:bg-black hover:text-white"
              >
                <Mail size={15} />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black px-3 py-2 transition hover:bg-black hover:text-white"
              >
                <GitBranch size={15} />
                {profile.github.replace("https://", "")}
              </a>
              <a
                href={profile.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black px-3 py-2 transition hover:bg-black hover:text-white"
              >
                <Globe size={15} />
                My Portfolio
              </a>
              <span className="inline-flex items-center gap-2 border border-black px-3 py-2">
                <MapPin size={15} />
                {profile.location}
              </span>
            </div>
          </header>

          <section className="resume-print-section grid gap-8 border-b border-black/20 py-7 md:grid-cols-[0.72fr_1.28fr] print:!grid-cols-1 print:!gap-4">
            <h2 className="text-xl font-black">My Profile</h2>
            <div className="grid gap-3">
              {timeline.map((item) => (
                <div key={item.step} className="resume-print-item grid gap-1">
                  <p className="font-black">{item.label}</p>
                  <p className="text-sm leading-6 text-black/68">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-print-section grid gap-8 border-b border-black/20 py-7 md:grid-cols-[0.72fr_1.28fr] print:!grid-cols-1 print:!gap-4">
            <h2 className="text-xl font-black">Projects I Built</h2>
            <div className="grid gap-5">
              {projects.map((project) => (
                <div key={project.id} className="resume-print-project">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-black">{project.name}</h3>
                    <span className="border border-black px-2 py-1 text-xs font-bold">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-[#2F6BFF]">{project.role}</p>
                  <p className="mt-2 text-sm leading-6 text-black/70">{project.impact}</p>
                  <p className="mt-2 text-sm leading-6 text-black/64">{project.result}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="bg-[#101114] px-2 py-1 text-xs font-bold text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-print-section grid gap-8 py-7 md:grid-cols-[0.72fr_1.28fr] print:!grid-cols-1 print:!gap-4">
            <h2 className="text-xl font-black">Tools I Use</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {stackGroups.map((group) => (
                <div key={group.title} className="resume-print-stack border border-black p-4">
                  <h3 className="font-black">{group.title}</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-black/68">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}
