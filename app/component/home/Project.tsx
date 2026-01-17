"use client";
import { preview_projects } from "@/app/data/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Project = () => {
  const { language } = useLanguage();
  const currentProjects = preview_projects[language];

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="My Project"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white dark:bg-slate-900 lg:bg-opacity-0 bg-opacity-60 py-5 backdrop-blur md:-mx-12 lg:w-full lg:mx-0 px-6 lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
          {language === "en" ? "Projects" : "Proyek"}
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {currentProjects.map((p, index) => (
            <li key={index} className="mb-12">
              <div className="group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white dark:lg:group-hover:bg-slate-700 lg:group-hover:bg-opacity-15 dark:lg:group-hover:bg-opacity-15 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <Link
                  href={p.link}
                  target="_blank"
                  className="z-10 flex flex-col-reverse lg:flex-row gap-4"
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={300}
                    height={300}
                    className="translate-y-1 w-56 lg:w-28 h-max rounded-md border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                  />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <div className="flex gap-2 text-lg font-medium group-hover:text-primary">
                        <h3 className="dark:text-slate-200">{p.name}</h3>
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
                      <p>{p.description}</p>
                    </div>
                    <div className="w-full flex flex-wrap gap-x-1 gap-y-2">
                      {p.buildWith.map((t, i) => (
                        <p
                          key={i}
                          className="w-max px-3 py-1 font-medium text-sm bg-primary/10 text-primary rounded-full"
                        >
                          {t}
                        </p>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Link
            href={"/archive"}
            className="group flex items-baseline gap-2 w-max  rounded-lg fill-slate-800 dark:fill-slate-400 hover:fill-primary hover:text-primary dark:hover:fill-primary transition-all ease-in-out duration-150"
          >
            <p className="text-sm font-medium">
              {language === "en"
                ? "View Full Project Archive"
                : "Lihat Arsip Proyek Lengkap"}
            </p>
            <div className="w-2.5 group-hover:translate-x-0.5 transition-all duration-150 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
