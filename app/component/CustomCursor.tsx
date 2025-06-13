"use client";
import { useEffect, useRef } from "react";

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.1);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.1);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - 300}px, ${pos.current.y - 300}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="-z-20 fixed pointer-events-none w-[600px] h-[600px] rounded-full transition-transform duration-150 ease-out"
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
