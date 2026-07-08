"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Braces,
  Download,
  Film,
  GitBranch,
  Layers3,
  Mail,
  MousePointer2,
  Radio,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  heroStats,
  labs,
  profile,
  projects,
  stackGroups,
  timeline,
} from "@/lib/portfolio-data";
import { ReelPlayer } from "./ReelPlayer";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Reel", href: "#reel" },
  { label: "Contact", href: "#contact" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export function PortfolioExperience() {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === activeProject) ?? projects[0],
    [activeProject],
  );

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#07080b] text-white"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--spotlight-x",
          `${((event.clientX - rect.left) / rect.width) * 100}%`,
        );
        event.currentTarget.style.setProperty(
          "--spotlight-y",
          `${((event.clientY - rect.top) / rect.height) * 100}%`,
        );
      }}
      style={
        {
          "--spotlight-x": "54%",
          "--spotlight-y": "42%",
        } as React.CSSProperties
      }
    >
      <div className="site-spotlight" />
      <SiteNav />
      <Hero />
      <ProofStrip />
      <Projects selectedProject={selectedProject} setActiveProject={setActiveProject} />
      <SkillsSection />
      <StackSection />
      <ExperienceSection />
      <ReelSection />
      <ContactSection />
    </main>
  );
}

function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07080b]/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-lime-300/70 bg-lime-300 text-sm font-black text-black">
            KH
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            {profile.name}
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-white/68 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            aria-label="GitHub"
            href={profile.github}
            className="grid size-9 place-items-center border border-white/12 text-white/72 transition hover:border-cobalt hover:text-white"
          >
            <GitBranch size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-9 items-center gap-2 border border-coral bg-coral px-3 text-sm font-bold text-black transition hover:bg-white"
          >
            <Mail size={16} />
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92svh] overflow-hidden pt-16">
      <Image
        src="/images/portfolio-command-center.png"
        alt="A cinematic developer command center with code, architecture panels, and video timelines"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-68"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#07080b_0%,rgba(7,8,11,0.74)_36%,rgba(7,8,11,0.28)_78%,#07080b_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,11,0.34),#07080b_95%)]" />
      <div className="radial-grid absolute inset-0" />
      <div className="data-rain absolute inset-x-0 top-16 h-24 opacity-70" />

      <div className="relative z-10 mx-auto grid min-h-[calc(92svh-4rem)] w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 border border-lime-300/50 bg-black/42 px-3 py-2 text-sm font-semibold text-lime-200 backdrop-blur">
            <Radio size={16} />
            OPEN TO FRONTEND / FULL-STACK ROLES
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.96] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {profile.name}.
            <span className="block text-lime-300">Frontend Developer.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            {profile.headline} {profile.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 border border-lime-300 bg-lime-300 px-5 text-sm font-black text-black transition hover:border-white hover:bg-white"
            >
              <MousePointer2 size={18} />
              프로젝트 보기
            </a>
            <a
              href="/resume"
              className="inline-flex h-12 items-center justify-center gap-2 border border-white/18 bg-white/8 px-5 text-sm font-bold text-white backdrop-blur transition hover:border-coral hover:bg-coral hover:text-black"
            >
              <Download size={18} />
              이력서 보기
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 border border-white/18 px-5 text-sm font-bold text-white/80 transition hover:border-cobalt hover:text-white"
            >
              <Mail size={18} />
              이메일 보내기
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="hero-console relative hidden min-h-[560px] overflow-hidden border border-white/14 bg-black/44 backdrop-blur-xl lg:block"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(185,242,39,0.15),transparent_28%,rgba(47,107,255,0.22)_55%,rgba(255,107,87,0.17))]" />
          <div className="scanline absolute inset-0" />
          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-white/62">HIRING SIGNALS</p>
                <p className="mt-2 text-3xl font-black text-white">Why hire Kang?</p>
              </div>
              <Sparkles className="text-lime-300" size={28} />
            </div>
            <div className="grid gap-3">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  animate={{ x: [0, index % 2 === 0 ? 12 : -10, 0] }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center justify-between border border-white/12 bg-white/[0.06] px-4 py-4"
                >
                  <span className="text-sm text-white/62">{stat.label}</span>
                  <span className="font-mono text-2xl font-black text-lime-300">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["UI", "Code", "Ship"].map((item) => (
                <div
                  key={item}
                  className="border border-white/12 bg-black/40 px-3 py-4 text-center text-sm font-bold text-white/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-y border-white/10 bg-[#0b0d13]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {heroStats.map((stat) => (
          <div key={stat.label} className="bg-[#0b0d13] py-6">
            <p className="font-mono text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-white/58">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects({
  selectedProject,
  setActiveProject,
}: {
  selectedProject: (typeof projects)[number];
  setActiveProject: (id: string) => void;
}) {
  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className="relative border-b border-white/10 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-4 flex items-center gap-2 text-sm font-bold text-coral">
            <Boxes size={18} />
            CASE STUDIES
          </div>
          <h2 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl">
            채용자가 확인해야 할 Selected Projects.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/64">
            프로젝트는 예쁜 썸네일보다 `내가 무엇을 맡았고`, `어떤 결정을 했고`, `어떤 결과를 냈는지`가 먼저 보이게 구성했습니다.
          </p>
        </div>

        <div className="grid gap-4">
          {projects.map((project) => {
            const selected = project.id === selectedProject.id;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProject(project.id)}
                className="group grid gap-5 border p-5 text-left transition md:grid-cols-[1fr_auto]"
                style={{
                  borderColor: selected ? project.accent : "rgba(255,255,255,0.12)",
                  background: selected
                    ? `linear-gradient(135deg, ${project.accent}18, rgba(255,255,255,0.06), ${project.secondaryAccent}1f)`
                    : "rgba(255,255,255,0.035)",
                }}
              >
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className="h-2.5 w-8"
                      style={{ backgroundColor: project.accent }}
                    />
                    <span className="font-mono text-xs font-bold text-white/52">
                      {project.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{project.name}</h3>
                  <p className="mt-2 text-base leading-7 text-white/68">
                    {project.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-white/60 group-hover:text-white">
                  Open
                  <ArrowUpRight size={18} />
                </div>
              </button>
            );
          })}

          <motion.article
            key={selectedProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-4 border border-white/14 bg-[#0d1018] p-5"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_0.74fr]">
              <div>
                <p className="font-mono text-sm font-bold text-lime-300">
                  {selectedProject.role}
                </p>
                <h3 className="mt-3 text-3xl font-black text-white">
                  {selectedProject.impact}
                </h3>
                <div className="mt-6 grid gap-4">
                  <EvidenceLine label="Challenge" value={selectedProject.problem} />
                  <EvidenceLine label="My contribution" value={selectedProject.decision} />
                  <EvidenceLine label="Outcome" value={selectedProject.result} />
                </div>
              </div>
              <div className="grid content-between gap-4 border border-white/10 bg-black/32 p-4">
                <div className="grid gap-2">
                  {selectedProject.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-white/78"
                    >
                      <BadgeCheck size={17} style={{ color: selectedProject.accent }} />
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-bold text-white/62"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
}

function EvidenceLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 border-l-2 border-white/14 pl-4">
      <span className="font-mono text-xs font-bold text-white/42">{label}</span>
      <p className="text-sm leading-6 text-white/70">{value}</p>
    </div>
  );
}

function ReelSection() {
  return (
    <motion.section
      id="reel"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden border-b border-white/10 bg-[#101114] py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,107,87,0.14),transparent_30%,rgba(47,107,255,0.2)_70%,rgba(185,242,39,0.1))]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-2 text-sm font-bold text-lime-300">
            <Film size={18} />
            REMOTION REEL
          </div>
          <h2 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl">
            짧은 시간 안에 강점을 보여주는 프로젝트 쇼릴.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/68">
            채용 담당자가 긴 설명을 읽기 전에도 프로젝트와 기술 감각을 빠르게 확인할 수 있도록 Remotion 기반 쇼릴을 넣었습니다.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {["Player", "Renderer", "Transitions"].map((item) => (
              <div key={item} className="border border-white/12 bg-black/30 px-4 py-4">
                <p className="font-mono text-sm font-black text-white">{item}</p>
                <p className="mt-1 text-xs text-white/52">wired</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10">
          <ReelPlayer />
        </div>
      </div>
    </motion.section>
  );
}

function SkillsSection() {
  return (
    <motion.section
      id="skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className="border-b border-white/10 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-bold text-cobalt">
              <Zap size={18} />
              SKILLS
            </div>
            <h2 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
              취업 포트폴리오에서 바로 보여야 하는 강점.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/60">
            기술 목록만 나열하지 않고, 실제 업무에서 어떤 방식으로 기여할 수 있는지 중심으로 정리했습니다.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {labs.map((item, index) => (
            <motion.article
              key={item.name}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative min-h-64 overflow-hidden border border-white/12 bg-white/[0.045] p-5"
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: item.accent }}
              />
              <p className="font-mono text-xs font-black text-white/42">0{index + 1}</p>
              <h3 className="mt-8 text-2xl font-black text-white">{item.name}</h3>
              <p className="mt-2 font-mono text-sm font-bold" style={{ color: item.accent }}>
                {item.signal}
              </p>
              <p className="mt-6 text-sm leading-6 text-white/62">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function StackSection() {
  return (
    <section className="border-b border-white/10 bg-[#0c0f16] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-bold text-coral">
            <Layers3 size={18} />
            STACK
          </div>
          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
            실무에 바로 연결되는 기술 스택.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stackGroups.map((group) => (
            <article key={group.title} className="border border-white/12 bg-black/24 p-5">
              <h3 className="mb-5 text-xl font-black text-white">{group.title}</h3>
              <div className="grid gap-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-white/8 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-white/70"
                  >
                    <Braces size={16} className="text-lime-300" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-bold text-lime-300">
              <Sparkles size={18} />
              EXPERIENCE
            </div>
            <h2 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
              면접에서 설명 가능한 성장 흐름.
            </h2>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {timeline.map((item) => (
            <article
              key={item.step}
              className="relative overflow-hidden border border-white/12 bg-white/[0.04] p-5"
            >
              <span className="font-mono text-sm font-black text-cobalt">{item.step}</span>
              <h3 className="mt-10 text-2xl font-black text-white">{item.label}</h3>
              <p className="mt-5 text-sm leading-6 text-white/56">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#f7f7ef] py-20 text-black">
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#B9F227,#2F6BFF,#FF4FD8,#FF6B57)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-black text-cobalt">CONTACT</p>
          <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            Frontend / Full-stack 포지션으로 이야기 나눌 준비가 되어 있습니다.
          </h2>
        </div>
        <div className="grid content-end gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-12 items-center justify-center gap-2 border border-black bg-black px-5 text-sm font-black text-white transition hover:bg-coral hover:text-black"
          >
            <Mail size={18} />
            {profile.email}
          </a>
          <a
            href={profile.github}
            className="inline-flex h-12 items-center justify-center gap-2 border border-black px-5 text-sm font-black transition hover:bg-lime-300"
          >
            <GitBranch size={18} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
