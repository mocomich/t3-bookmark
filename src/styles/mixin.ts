import { keyframes } from "@emotion/react";

import { maxSize, spSize, tabSize } from "./config/sizes";

export const vwCalcFn = (value: number, vp: number | string = maxSize) =>
  `calc(${value} / ${vp} * 100vw)`;

export const sp = `@media (max-width: ${spSize}px)`;

export const tab = `@media (min-width: ${spSize}px) and (max-width: ${tabSize}px)`;
export const pc = `@media (min-width: ${spSize}px)`;

export const fadeIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

export const fadeOut = keyframes({
  "0%": { opacity: 0, transform: "translateY(0)" },
  "100%": { opacity: 1, transform: "translateY(10px)" },
});

export {};
