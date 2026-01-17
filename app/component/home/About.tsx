"use client";
import { about } from "@/app/data/about";
import { profile } from "@/app/data/profile";
import Image from "next/image";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <>
      <section id="image" className="mb-10" aria-label="My Photo">
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src={profile[language].photo}
            alt="Arif Saputra"
            width={600}
            height={600}
          />
        </div>
      </section>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About Me"
      >
        <div className="lg:hidden sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white dark:bg-slate-900 bg-opacity-60 py-5 backdrop-blur md:-mx-12 lg:w-full lg:mx-0 px-6 lg:px-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
            {language === "en" ? "About" : "Tentang"}
          </h2>
        </div>
        {about[language]}
      </section>
    </>
  );
};

export default About;
