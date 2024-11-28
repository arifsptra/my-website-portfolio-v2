"use client";
import { useEffect, useRef } from "react";

// Throttle function to limit the rate of function execution
const throttle = (fn: (...args: any[]) => void, wait: number) => {
  let lastTime = 0;
  return (...args: any[]) => {
    const currentTime = Date.now();
    if (currentTime - lastTime >= wait) {
      fn(...args);
      lastTime = currentTime;
    }
  };
};

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCursor = throttle((e: MouseEvent) => {
      if (cursorRef.current) {
        // Update the cursor's transform property for smooth movement
        cursorRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      }
    }, 100); // Adjust throttle timing as needed

    // Add mousemove event listener
    window.addEventListener("mousemove", updateCursor);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="-z-20 fixed transform -translate-x-[200px] -translate-y-[200px] pointer-events-none w-[600px] h-[600px] rounded-full transition-transform duration-150"
      style={{
        background:
          "radial-gradient(circle, rgba(0, 136, 184, 0.05) 0%, rgba(0, 136, 184, 0.06) 5%, rgba(255, 255, 255, 0) 100%)",
      }}
    />
  );
};

export default CustomCursor;
