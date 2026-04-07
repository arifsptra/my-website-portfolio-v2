"use client";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Pricing = () => {
  const { language } = useLanguage();

  return (
    <section
      id="pricing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Partnership"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white dark:bg-slate-900 lg:bg-opacity-0 bg-opacity-60 py-5 backdrop-blur md:-mx-12 lg:w-full lg:mx-0 px-6 lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
          {language === "en" ? "Partnership" : "Kerja Sama"}
        </h2>
      </div>

      <div className="group relative flex flex-col items-center text-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:border-primary/50 dark:bg-slate-800/50">
        <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white dark:lg:group-hover:bg-slate-700 lg:group-hover:bg-opacity-15 dark:lg:group-hover:bg-opacity-15 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

        <div className="flex flex-col gap-4 mb-8 max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
            {language === "en"
              ? "Looking for Professional B2B Services?"
              : "Mencari Layanan B2B Profesional?"}
          </h3>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mx-auto max-w-xl">
            {language === "en"
              ? "For custom web applications, mobile apps, company profiles, and digital imaging solutions, I provide dedicated B2B services through Selulosa."
              : "Untuk aplikasi web kustom, aplikasi seluler, profil perusahaan, dan solusi pencitraan digital, saya menyediakan layanan B2B khusus melalui Selulosa."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
          <Link
            href="https://selulosa.com/layanan-b2b"
            target="_blank"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-center text-sm font-medium text-white transition-all hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 shadow-md hover:shadow-lg"
          >
            {language === "en" ? "View B2B Services" : "Lihat Layanan B2B"}
            <svg
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href="https://selulosa.com/kontak"
            target="_blank"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700/50 px-6 py-3.5 text-center text-sm font-medium text-slate-800 dark:text-slate-200 transition-all hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-800"
          >
            {language === "en" ? "Contact Us" : "Hubungi Kami"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
