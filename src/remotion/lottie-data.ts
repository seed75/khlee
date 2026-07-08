import type { LottieAnimationData } from "@remotion/lottie";

export const pulseLottie: LottieAnimationData = {
  v: "5.9.0",
  fr: 30,
  ip: 0,
  op: 90,
  w: 240,
  h: 240,
  nm: "Portfolio pulse",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "pulse-ring",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [78], e: [20] },
            { t: 45, s: [20], e: [78] },
            { t: 90, s: [78] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [120, 120, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [62, 62, 100], e: [126, 126, 100] },
            { t: 45, s: [126, 126, 100], e: [62, 62, 100] },
            { t: 90, s: [62, 62, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [120, 120] },
          nm: "Ellipse",
        },
        {
          ty: "st",
          c: { a: 0, k: [0.725, 0.949, 0.153, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 8 },
          lc: 2,
          lj: 2,
          nm: "Stroke",
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
      bm: 0,
    },
  ],
};
