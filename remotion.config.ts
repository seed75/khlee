import { Config } from "@remotion/cli/config";
import { enableTailwind } from "@remotion/tailwind-v4";

Config.setEntryPoint("./src/remotion/index.ts");
Config.setPublicDir("./public");
Config.setStudioPort(3001);
Config.setRendererPort(3002);
Config.setShouldOpenBrowser(false);
Config.setVideoImageFormat("jpeg");
Config.setConcurrency("50%");
Config.overrideWebpackConfig((currentConfiguration) =>
  enableTailwind(currentConfiguration),
);
