export type Project = {
  id: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  impact: string;
  problem: string;
  decision: string;
  result: string;
  stack: string[];
  metrics: string[];
  accent: string;
  secondaryAccent: string;
};

export type LabItem = {
  name: string;
  signal: string;
  detail: string;
  accent: string;
};

export type ExperienceItem = {
  step: string;
  label: string;
  detail: string;
};

export const profile = {
  name: "Kanghyeok Lee",
  role: "Frontend / Full-stack Developer",
  headline: "채용자가 빠르게 판단할 수 있도록 프로젝트, 기술 선택, 구현 결과를 선명하게 보여줍니다.",
  intro:
    "사용자가 실제로 쓰기 편한 화면을 만들고, 그 화면이 안정적으로 동작하도록 데이터 흐름과 품질까지 챙기는 개발자입니다.",
  email: "hello@kanghyeok.dev",
  github: "https://github.com/kanghyeoklee",
  linkedin: "https://www.linkedin.com/",
  location: "Seoul / Remote",
  availability: "Open to frontend and full-stack roles",
};

export const heroStats = [
  { value: "Frontend", label: "primary role" },
  { value: "TypeScript", label: "daily stack" },
  { value: "3 Projects", label: "case studies" },
  { value: "Seoul", label: "remote ready" },
];

export const projects: Project[] = [
  {
    id: "signal-ops",
    name: "Realtime Ops Dashboard",
    tagline: "실시간 상태, 로그, 액션을 한 화면에서 추적하는 운영 대시보드",
    role: "Frontend architecture, realtime UX, design system",
    period: "8 weeks",
    impact: "복잡한 운영 데이터를 빠르게 판단 가능한 UI로 재구성했습니다.",
    problem:
      "실시간 이벤트와 담당자 상태가 분산되어 있어 사용자가 상황을 파악하기 어려웠습니다.",
    decision:
      "타임라인, 로그, 책임자 상태를 병렬 패널로 나누고 우선순위가 높은 액션을 첫 화면에 고정했습니다.",
    result:
      "스캔 가능한 대시보드 구조와 반응형 UI, 접근성 체크까지 포함해 구현했습니다.",
    stack: ["Next.js", "TypeScript", "WebSocket", "Tailwind", "Playwright"],
    metrics: ["Realtime UI", "A11y 96", "P95 route 180ms"],
    accent: "#B9F227",
    secondaryAccent: "#2F6BFF",
  },
  {
    id: "motion-forge",
    name: "Remotion Portfolio Reel",
    tagline: "포트폴리오 프로젝트 데이터를 영상 쇼릴로 자동 렌더링",
    role: "Remotion pipeline, visual system, content model",
    period: "3 weeks",
    impact: "개발자가 화면만 만드는 사람이 아니라 콘텐츠 전달 방식까지 설계할 수 있음을 보여줍니다.",
    problem:
      "채용 담당자가 긴 케이스 스터디를 읽기 전에도 프로젝트의 밀도를 빠르게 확인할 장치가 필요했습니다.",
    decision:
      "프로젝트 데이터 모델을 단일 소스로 두고 웹 카드와 Remotion composition이 함께 사용하게 했습니다.",
    result:
      "웹 미리보기, MP4 렌더링, 썸네일 생성으로 확장 가능한 포트폴리오 쇼릴 파이프라인을 만들었습니다.",
    stack: ["Remotion", "Renderer", "Player", "Lottie", "Three.js"],
    metrics: ["Player embed", "Single data source", "MP4 pipeline"],
    accent: "#FF6B57",
    secondaryAccent: "#FF4FD8",
  },
  {
    id: "atlas-commerce",
    name: "Commerce Compare Flow",
    tagline: "상품 탐색과 비교 흐름을 빠르게 만든 커머스 UI",
    role: "Full-stack implementation, performance, UI systems",
    period: "10 weeks",
    impact: "사용자가 상품 차이를 빠르게 이해하도록 정보 구조와 인터랙션을 다시 설계했습니다.",
    problem:
      "상품 상세는 화려했지만 비교 기준이 흩어져 있어 사용자가 계속 뒤로 가기를 반복했습니다.",
    decision:
      "비교 가능한 속성부터 드러내고, 관심 상품을 고정하는 스캔 중심 인터페이스를 설계했습니다.",
    result:
      "정보 탐색이 리스트와 상세 사이에서 끊기지 않는 흐름으로 정리되었습니다.",
    stack: ["React", "Server Actions", "Postgres", "SWR", "Vercel"],
    metrics: ["LCP 1.8s", "Checkout path -24%", "SEO 100"],
    accent: "#2F6BFF",
    secondaryAccent: "#B9F227",
  },
];

export const labs: LabItem[] = [
  {
    name: "UI Implementation",
    signal: "pixel to product",
    detail: "디자인 의도를 반응형 컴포넌트, 상태, 접근성까지 포함한 실제 화면으로 구현합니다.",
    accent: "#B9F227",
  },
  {
    name: "Frontend Architecture",
    signal: "clean structure",
    detail: "데이터 모델, 컴포넌트 책임, 라우팅 구조를 유지보수하기 쉽게 나눕니다.",
    accent: "#FF4FD8",
  },
  {
    name: "Product Thinking",
    signal: "why it matters",
    detail: "기능 구현에 머물지 않고 사용자의 판단 속도와 행동 흐름을 기준으로 설계합니다.",
    accent: "#FF6B57",
  },
  {
    name: "Quality Habit",
    signal: "tested and measured",
    detail: "Lighthouse, Playwright, 타입 안정성, 접근성 체크로 결과물을 검증합니다.",
    accent: "#2F6BFF",
  },
];

export const timeline: ExperienceItem[] = [
  {
    step: "01",
    label: "Frontend Developer Candidate",
    detail: "React, Next.js, TypeScript 기반의 인터랙티브 웹 UI 구현에 집중합니다.",
  },
  {
    step: "02",
    label: "Product UI Builder",
    detail: "사용자가 정보를 더 빨리 이해하도록 레이아웃, 상태, 인터랙션을 다듬습니다.",
  },
  {
    step: "03",
    label: "Full-stack Friendly",
    detail: "API, 데이터 흐름, 배포 환경을 이해하고 프론트엔드와 연결합니다.",
  },
  {
    step: "04",
    label: "Ready to Interview",
    detail: "프로젝트별 문제, 기여, 결과를 설명 가능한 형태로 정리합니다.",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    title: "Video",
    items: ["Remotion", "Player", "Renderer", "Transitions", "Lottie", "Three"],
  },
  {
    title: "Quality",
    items: ["Playwright", "Lighthouse", "ESLint", "Accessibility", "SEO"],
  },
];
