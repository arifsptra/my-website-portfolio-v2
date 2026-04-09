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
      <div className="group/list">
        <div className="group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white dark:lg:group-hover:bg-slate-700 lg:group-hover:bg-opacity-15 dark:lg:group-hover:bg-opacity-15 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

          <div className="z-10 flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                {language === "en"
                  ? "Looking for Professional B2B Services?"
                  : "Mencari Layanan B2B Profesional?"}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-normal">
                {language === "en"
                  ? "For custom web applications, mobile apps, company profiles, and digital imaging solutions, I provide dedicated B2B services through Selulosa."
                  : "Untuk aplikasi web kustom, aplikasi seluler, profil perusahaan, dan solusi pencitraan digital, saya menyediakan layanan B2B khusus melalui Selulosa."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-2">
              <Link
                href="https://selulosa.com/layanan-b2b"
                target="_blank"
                className="group/link flex items-baseline gap-2 w-max rounded-lg fill-slate-800 dark:fill-slate-400 hover:fill-primary hover:text-primary dark:hover:fill-primary transition-all ease-in-out duration-150 text-slate-800 dark:text-slate-400"
              >
                <span className="text-sm font-medium">
                  {language === "en"
                    ? "View B2B Services"
                    : "Lihat Layanan B2B"}
                </span>
                <div className="w-2.5 group-hover/link:translate-x-0.5 transition-all duration-150 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
                  </svg>
                </div>
              </Link>

              <Link
                href="https://selulosa.com/kontak"
                target="_blank"
                className="group/link flex items-baseline gap-2 w-max rounded-lg fill-slate-800 dark:fill-slate-400 hover:fill-primary hover:text-primary dark:hover:fill-primary transition-all ease-in-out duration-150 text-slate-800 dark:text-slate-400"
              >
                <span className="text-sm font-medium">
                  {language === "en" ? "Contact Us" : "Hubungi Kami"}
                </span>
                <div className="w-2.5 group-hover/link:translate-x-0.5 transition-all duration-150 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
