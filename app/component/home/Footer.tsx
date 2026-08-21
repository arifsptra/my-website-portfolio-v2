"use client";
import { footer } from "@/app/data/footer";
import { prefersReducedMotion, revealUp, useGSAP } from "@/app/lib/gsap";
import React, { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    revealUp(footerRef.current, footerRef.current);
  });

  return (
    <div ref={footerRef}>
      {footer[language]}
    </div>
  );
};

export default Footer;
