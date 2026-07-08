import path from "node:path";
import { bundle } from "@remotion/bundler";
import { enableTailwind } from "@remotion/tailwind-v4";
import { getVideoMetadata } from "@remotion/media-utils";
import { renderMedia, selectComposition } from "@remotion/renderer";

const entryPoint = path.join(process.cwd(), "src/remotion/index.ts");
const outputLocation = path.join(process.cwd(), "public/videos/portfolio-reel.mp4");

const serveUrl = await bundle({
  entryPoint,
  webpackOverride: (currentConfiguration) => enableTailwind(currentConfiguration),
});

const composition = await selectComposition({
  serveUrl,
  id: "PortfolioReel",
});

await renderMedia({
  composition,
  serveUrl,
  codec: "h264",
  outputLocation,
  inputProps: {},
});

const metadata = await getVideoMetadata(outputLocation);
console.log(
  `Rendered ${outputLocation} (${metadata.width}x${metadata.height}, ${metadata.durationInSeconds}s)`,
);
