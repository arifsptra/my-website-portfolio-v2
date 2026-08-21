"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const revealUp = (
  targets: gsap.TweenTarget,
  trigger: HTMLElement | null,
  options?: gsap.TweenVars
) =>
  gsap.from(targets, {
    y: 24,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    ...options,
    scrollTrigger: {
      trigger,
      start: "top bottom",
      once: true,
      ...(typeof options?.scrollTrigger === "object"
        ? options.scrollTrigger
        : {}),
    },
  });

export { gsap, ScrollTrigger, useGSAP };
