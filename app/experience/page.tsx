"use client";
import Link from "next/link";
import React from "react";
import { experience } from "../data/experience";
import { useLanguage } from "../context/LanguageContext";
import ExperienceList from "../component/home/ExperienceList";

const ExperiencePage = () => {
  const { language } = useLanguage();
  const currentExperience = experience[language];

  return (
    <main className="lg:py-24">
      <Link
        href={"/"}
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-primary fill-primary"
      >
        <div className="w-2.5 group-hover:-translate-x-1 transition-all duration-150 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="rotate-180"
          >
            <path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
          </svg>
        </div>
        <p className="text-sm font-medium">Arif Saputra</p>
      </Link>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-800 dark:text-slate-200">
        {language === "en" ? "Experience" : "Pengalaman"}
      </h1>

      <div className="mt-12">
        <ExperienceList items={currentExperience} />
      </div>
    </main>
  );
};

export default ExperiencePage;
