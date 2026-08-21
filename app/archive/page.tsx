"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { all_projects } from "../data/project";
import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "../component/ProjectCard";

const TECH_CATEGORY: Record<string, string> = {
  Flutter: "mobile",
  Dart: "mobile",
  IOS: "mobile",
  Android: "mobile",
  Java: "desktop",
  NodeJS: "backend",
  ExpressJS: "backend",
  Flask: "backend",
  Python: "backend",
  Go: "backend",
  PrismaJS: "backend",
  Strapi: "backend",
  MongoDB: "backend",
  MySQL: "backend",
  PostgreSQL: "backend",
  Keycloak: "backend",
  Docker: "backend",
  "BMKG API": "backend",
};

const yearRange = (year: string): [number, number] => {
  const [start, end] = year.split("-").map((y) => parseInt(y.trim()));
  return Number.isFinite(end) ? [start, end] : [start, start];
};

const Archive = () => {
  const { language } = useLanguage();
  const currentProjects = all_projects[language];

  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const [category, setCategory] = useState("all");

  const years = useMemo(
    () =>
      Array.from(
        new Set(
          currentProjects.flatMap((p) => {
            const [start, end] = yearRange(p.year);
            const list: string[] = [];
            for (let y = start; y <= end; y++) list.push(String(y));
            return list;
          })
        )
      ).sort((a, b) => parseInt(b) - parseInt(a)),
    [currentProjects]
  );

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return currentProjects.filter((p) => {
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.madeAt.toLowerCase().includes(q) ||
        p.buildWith.some((b) => b.toLowerCase().includes(q));
      const [start, end] = yearRange(p.year);
      const selected = parseInt(year);
      const matchYear =
        year === "all" || (selected >= start && selected <= end);
      const matchCategory =
        category === "all" ||
        p.buildWith.some((t) => (TECH_CATEGORY[t] ?? "website") === category);
      return matchQuery && matchYear && matchCategory;
    });
  }, [currentProjects, query, year, category]);

  const labels =
    language === "en"
      ? {
          search: "Search projects...",
          all: "All",
          allCategories: "All Categories",
          categories: [
            { value: "website", label: "Website" },
            { value: "mobile", label: "Mobile" },
            { value: "backend", label: "Backend & API" },
            { value: "desktop", label: "Desktop" },
          ],
          count: (n: number) => `${n} project${n !== 1 ? "s" : ""}`,
          empty: "No projects found.",
        }
      : {
          search: "Cari proyek...",
          all: "Semua",
          allCategories: "Semua Kategori",
          categories: [
            { value: "website", label: "Website" },
            { value: "mobile", label: "Mobile" },
            { value: "backend", label: "Backend & API" },
            { value: "desktop", label: "Desktop" },
          ],
          count: (n: number) => `${n} proyek`,
          empty: "Tidak ada proyek yang ditemukan.",
        };

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

      <div className="mt-8 flex flex-col gap-4">
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 w-4 -translate-y-1/2 fill-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.search}
            className="w-full rounded-lg border border-slate-600/10 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-600/20 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder:text-slate-500"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2">
            {["all", ...years].map((y) => (
              <li key={y}>
                <button
                  type="button"
                  onClick={() => setYear(y)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150 ${
                    year === y
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                >
                  {y === "all" ? labels.all : y}
                </button>
              </li>
            ))}
          </ul>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-slate-600/10 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-600/20 dark:bg-slate-800/50 dark:text-slate-200"
          >
            <option value="all">{labels.allCategories}</option>
            {labels.categories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <p className="text-sm text-slate-400 dark:text-slate-500">
          {labels.count(filteredProjects.length)}
        </p>
      </div>

      {filteredProjects.length > 0 ? (
        <div
          id="project"
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-slate-400 dark:text-slate-500">
          {labels.empty}
        </p>
      )}
    </main>
  );
};

export default Archive;
