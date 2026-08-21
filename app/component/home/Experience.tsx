"use client";
import { experience } from "@/app/data/experience";
import { gsap, prefersReducedMotion, revealUp, useGSAP } from "@/app/lib/gsap";
import Link from "next/link";
import React, { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ExperienceList from "./ExperienceList";

const Experience = () => {
  const { language } = useLanguage();
  const currentExperience = experience[language];
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      revealUp("h2", sectionRef.current);
      gsap.from("ol > li", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: "ol", start: "top 80%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="My Experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white dark:bg-slate-900 lg:bg-opacity-0 bg-opacity-60 py-5 backdrop-blur md:-mx-12 lg:w-full lg:mx-0 px-6 lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
          {language === "en" ? "Experience" : "Pengalaman"}
        </h2>
      </div>
      <div>
        <ExperienceList items={currentExperience.slice(0, 3)} />
        <div className="mt-8">
          <Link
            href="/experience"
            className="group flex items-baseline gap-2 w-max rounded-lg fill-slate-800 dark:fill-slate-400 hover:fill-primary hover:text-primary dark:hover:fill-primary transition-all ease-in-out duration-150"
          >
            <p className="text-sm font-medium">
              {language === "en" ? "Learn More" : "Selengkapnya"}
            </p>
            <div className="w-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
