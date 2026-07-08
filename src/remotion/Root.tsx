import { Composition } from "remotion";
import { PortfolioReel } from "./PortfolioReel";

export function RemotionRoot() {
  return (
    <Composition
      id="PortfolioReel"
      component={PortfolioReel}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
    />
  );
}
