import { Lottie } from "@remotion/lottie";
import { CameraMotionBlur, Trail } from "@remotion/motion-blur";
import { ThreeCanvas } from "@remotion/three";
import { springTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { projects } from "../lib/portfolio-data";
import { pulseLottie } from "./lottie-data";

export function PortfolioReel() {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#07080b",
        color: "white",
        fontFamily: "Geist, Arial, sans-serif",
      }}
    >
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={66}>
          <IntroScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={springTiming({ durationInFrames: 18 })}
        />
        <TransitionSeries.Sequence durationInFrames={66}>
          <ProjectScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={springTiming({ durationInFrames: 18 })}
        />
        <TransitionSeries.Sequence durationInFrames={78}>
          <ProofScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
}

function IntroScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entrance = spring({ frame, fps, config: { damping: 16, stiffness: 120 } });

  return (
    <AbsoluteFill>
      <Img
        src={staticFile("/images/portfolio-command-center.png")}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.72,
          transform: `scale(${1.08 - entrance * 0.04})`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, #07080b 0%, rgba(7,8,11,0.76) 45%, rgba(7,8,11,0.18) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 120,
          top: 170,
          width: 980,
          transform: `translateY(${interpolate(entrance, [0, 1], [70, 0])}px)`,
          opacity: entrance,
        }}
      >
        <p style={{ color: "#B9F227", fontSize: 34, fontWeight: 900, margin: 0 }}>
          FRONTEND / FULL-STACK DEVELOPER
        </p>
        <h1
          style={{
            fontSize: 132,
            lineHeight: 0.94,
            margin: "30px 0 0",
            fontWeight: 1000,
          }}
        >
          Kanghyeok Lee.
          <br />
          <span style={{ color: "#B9F227" }}>Personal Portfolio.</span>
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.76)",
            fontSize: 36,
            lineHeight: 1.42,
            width: 860,
          }}
        >
          A job-focused portfolio with selected projects, skills, and interview-ready evidence.
        </p>
      </div>
      <div style={{ position: "absolute", right: 130, bottom: 120, width: 240, height: 240 }}>
        <Lottie animationData={pulseLottie} loop renderer="svg" />
      </div>
    </AbsoluteFill>
  );
}

function ProjectScene() {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        padding: 96,
        background:
          "linear-gradient(135deg, #101114 0%, #07080b 45%, rgba(47,107,255,0.32) 100%)",
      }}
    >
      <Trail layers={7} lagInFrames={2} trailOpacity={0.22}>
        <div
          style={{
            position: "absolute",
            top: 84,
            left: interpolate(frame, [0, 66], [80, 1320]),
            width: 360,
            height: 10,
            background: "linear-gradient(90deg, #B9F227, #FF4FD8, #2F6BFF)",
          }}
        />
      </Trail>
      <p style={{ color: "#FF6B57", fontSize: 34, fontWeight: 900, margin: 0 }}>
        SELECTED PROJECTS
      </p>
      <h2 style={{ margin: "18px 0 42px", fontSize: 86, lineHeight: 1, fontWeight: 1000 }}>
        Challenge → Contribution → Outcome
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        {projects.map((project, index) => {
          const progress = spring({
            frame: frame - index * 8,
            fps: 30,
            config: { damping: 18, stiffness: 110 },
          });

          return (
            <div
              key={project.id}
              style={{
                minHeight: 560,
                border: `3px solid ${project.accent}`,
                background: `linear-gradient(145deg, ${project.accent}1f, rgba(255,255,255,0.08), ${project.secondaryAccent}24)`,
                padding: 34,
                transform: `translateY(${interpolate(progress, [0, 1], [80, 0])}px)`,
                opacity: progress,
              }}
            >
              <p style={{ color: project.accent, fontSize: 28, fontWeight: 900 }}>
                0{index + 1}
              </p>
              <h3
                style={{
                  fontSize: 52,
                  lineHeight: 1.02,
                  margin: "40px 0 24px",
                  fontWeight: 1000,
                }}
              >
                {project.name}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 30, lineHeight: 1.35 }}>
                {project.tagline}
              </p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function ProofScene() {
  const frame = useCurrentFrame();
  const rotation = interpolate(frame, [0, 78], [0, Math.PI * 1.4]);

  return (
    <AbsoluteFill style={{ background: "#f7f7ef", color: "#07080b", overflow: "hidden" }}>
      <CameraMotionBlur shutterAngle={110} samples={8}>
        <div style={{ position: "absolute", right: -160, top: -90, width: 900, height: 900 }}>
          <ThreeCanvas
            width={900}
            height={900}
            camera={{ position: [0, 0, 6], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 3, 4]} intensity={2.2} color="#ffffff" />
            <mesh rotation={[rotation * 0.6, rotation, rotation * 0.2]}>
              <boxGeometry args={[2.6, 2.6, 2.6]} />
              <meshStandardMaterial color="#2F6BFF" wireframe />
            </mesh>
            <mesh rotation={[rotation * -0.2, rotation * 0.7, rotation * 0.4]}>
              <torusKnotGeometry args={[1.1, 0.16, 120, 12]} />
              <meshStandardMaterial color="#FF4FD8" metalness={0.25} roughness={0.2} />
            </mesh>
          </ThreeCanvas>
        </div>
      </CameraMotionBlur>
      <div style={{ position: "absolute", left: 120, top: 140, width: 980 }}>
        <p style={{ color: "#2F6BFF", fontSize: 34, fontWeight: 1000, margin: 0 }}>
          READY TO INTERVIEW
        </p>
        <h2
          style={{
            fontSize: 118,
            lineHeight: 0.96,
            margin: "28px 0 34px",
            fontWeight: 1000,
          }}
        >
          Personal portfolio.
          <br />
          Hire-ready evidence.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, width: 980 }}>
          {["Next.js 16", "Remotion 4", "Lighthouse 95+"].map((item, index) => (
            <div
              key={item}
              style={{
                border: "3px solid #07080b",
                padding: 26,
                background: index === 1 ? "#B9F227" : "#ffffff",
                fontSize: 30,
                fontWeight: 1000,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
}
