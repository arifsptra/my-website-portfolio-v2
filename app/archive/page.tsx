"use client";
import Link from "next/link";
import React from "react";
import { all_projects } from "../data/project";
import { useLanguage } from "../context/LanguageContext";

const Archive = () => {
  const { language } = useLanguage();
  const currentProjects = all_projects[language];

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
        {language === "en" ? "All Projects" : "Semua Proyek"}
      </h1>

      <table id="project" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-100/75 dark:bg-slate-800/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-800 dark:text-slate-300">
              {language === "en" ? "Year" : "Tahun"}
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-800 dark:text-slate-300">
              {language === "en" ? "Project" : "Proyek"}
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-800 dark:text-slate-300 lg:table-cell">
              {language === "en" ? "Made at" : "Dibuat di"}
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-800 dark:text-slate-300 lg:table-cell">
              {language === "en" ? "Built with" : "Dibuat dengan"}
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-800 dark:text-slate-300">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((p, i) => (
            <tr
              key={i}
              className="border-b border-slate-600/10 last:border-none"
            >
              <td className="py-4 pr-4 align-top text-sm">{p.year}</td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-800 dark:text-slate-300 max-w-60">
                {p.name}
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <div className="translate-y-px whitespace-nowrap">
                  {p.madeAt}
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell max-w-72">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  {p.buildWith.map((b, x) => (
                    <li key={x} className="my-1 mr-1.5">
                      <p
                        key={x}
                        className="w-max px-3 py-1 font-medium text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {b}
                      </p>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="py-4 align-top max-w-10 overflow-hidden sm:max-w-max">
                {p.link.website && (
                  <Link
                    href={p.link.website}
                    className="group flex items-baseline gap-2 w-max rounded-lg fill-slate-800 dark:fill-slate-400 hover:fill-primary hover:text-primary dark:hover:fill-primary transition-all ease-in-out duration-150"
                    target="_blank"
                  >
                    <p className="text-sm font-medium">
                      {new URL(p.link.website).hostname}
                    </p>
                    <div className="w-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z" />
                      </svg>
                    </div>
                  </Link>
                )}
                {p.link.github && (
                  <Link
                    href={p.link.github}
                    className="group mb-2 inline-flex gap-1 items-center font-semibold leading-tight"
                    target="_blank"
                  >
                    <p className="text-sm font-medium group-hover:text-primary">
                      GitHub
                    </p>
                    <div className="group-hover:fill-primary dark:fill-slate-400 w-3 transition-all duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                      >
                        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25C2,35.164,8.63,43.804,17.791,46.836z" />
                      </svg>
                    </div>
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Archive;
