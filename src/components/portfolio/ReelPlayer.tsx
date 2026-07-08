"use client";

import dynamic from "next/dynamic";
import { PortfolioReel } from "@/remotion/PortfolioReel";

const Player = dynamic(
  () => import("@remotion/player").then((module) => module.Player),
  {
    ssr: false,
    loading: () => (
      <div className="grid aspect-video w-full place-items-center border border-white/12 bg-black text-sm text-white/70">
        Preparing motion reel
      </div>
    ),
  },
);

export function ReelPlayer() {
  return (
    <div className="reel-shell relative overflow-hidden border border-white/14 bg-[#08090d] shadow-2xl shadow-black/40">
      <Player
        component={PortfolioReel}
        durationInFrames={210}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
        controls
        loop
        autoPlay
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          display: "block",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
    </div>
  );
}
