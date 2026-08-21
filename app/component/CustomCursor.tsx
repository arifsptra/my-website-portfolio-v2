"use client";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/app/lib/gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.5,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.5,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX - 300);
      yTo(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div
      ref={cursorRef}
      className="-z-20 fixed pointer-events-none w-[600px] h-[600px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(0,136,184,0.08) 0%, rgba(0,136,184,0.04) 20%, rgba(0,136,184,0.02) 40%, transparent 80%)",
        filter: "blur(30px)",
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
