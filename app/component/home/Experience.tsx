"use client";
import { experience } from "@/app/data/experience";
import { profile } from "@/app/data/profile";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();
  const currentExperience = experience[language];
  const currentProfile = profile[language];

  return (
    <section
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
        <ol className="group/list">
          {currentExperience.map((e, index) => (
            <li key={index} className="mb-12">
              <div className="group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block  lg:group-hover:bg-white dark:lg:group-hover:bg-slate-700 lg:group-hover:bg-opacity-15 dark:lg:group-hover:bg-opacity-15 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <Link href={e.website} className="z-10" target="_blank">
                  <div className="flex justify-between items-baseline gap-2">
                    <div className="flex flex-col lg:flex-row lg:gap-2 text-lg font-medium group-hover:text-primary dark:text-slate-200">
                      <h3>{e.position}</h3>
                      <p className="hidden lg:block">-</p>
                      <p>{e.company}</p>
                    </div>
                    <div className="group-hover:fill-primary dark:fill-slate-200 w-3 -translate-x-0.5 translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm mb-4">
                    <p>
                      {e.start_mount} {e.start_year}
                    </p>
                    <p>-</p>
                    <p>
                      {e.end_mount} {e.end_year}
                    </p>
                  </div>
                  <div className="mb-4">
                    <ul className="flex flex-col gap-2">
                      {e.tasks?.map((t, i) => (
                        <li key={i} className="flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18px"
                            viewBox="0 -960 960 960"
                            width="18px"
                            fill="#0088b9"
                            className="h-6 w-4"
                          >
                            <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                          </svg>
                          <p className="w-full">{t}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full flex flex-wrap gap-x-1 gap-y-2">
                    {e.tools.map((t, i) => (
                      <p
                        key={i}
                        className="w-max px-3 py-1 font-medium text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {t}
                      </p>
                    ))}
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Link
            href={currentProfile.file_resume}
            className="group flex items-baseline gap-2 w-max  rounded-lg fill-slate-800  dark:fill-slate-400 hover:fill-primary hover:text-primary dark:hover:fill-primary transition-all ease-in-out duration-150"
            target="_blank"
          >
            <p className="text-sm font-medium">
              {language === "en" ? "View Full Resume" : "Lihat Resume Lengkap"}
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
