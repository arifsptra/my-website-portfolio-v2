"use client";
import { pricing, consultation } from "@/app/data/pricing";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Pricing = () => {
  const { language } = useLanguage();
  const currentPricing = pricing[language];

  return (
    <section
      id="pricing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Pricing"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white dark:bg-slate-900 lg:bg-opacity-0 bg-opacity-60 py-5 backdrop-blur md:-mx-12 lg:w-full lg:mx-0 px-6 lg:px-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
          {language === "en" ? "Partnership" : "Kerja Sama"}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 group/list">
        {currentPricing.map((item, index) => (
          <div
            key={index}
            className={`group relative flex flex-col justify-between transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${
              index === 2 ? "md:col-span-2 lg:col-span-1 xl:col-span-2" : ""
            }`}
          >
            <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white dark:lg:group-hover:bg-slate-700 lg:group-hover:bg-opacity-15 dark:lg:group-hover:bg-opacity-15 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                {item.name}
              </h3>
              <p className="mt-2 text-3xl font-extrabold text-primary">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mr-1">
                  IDR
                </span>
                {item.price}
              </p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              <ul className="mt-6 space-y-3">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-3 h-5 w-5 shrink-0 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href={item.link}
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700/50 px-5 py-3 text-center text-sm font-medium text-slate-800 dark:text-slate-200 transition-all hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-800"
              >
                {item.cta}
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
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 group relative flex flex-col md:flex-row justify-between items-center rounded-xl border border-slate-200 dark:border-slate-800 p-6 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:border-primary/50 dark:bg-slate-800/50">
          <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white dark:lg:group-hover:bg-slate-700 lg:group-hover:bg-opacity-15 dark:lg:group-hover:bg-opacity-15 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          
          <div className="flex flex-col gap-2 mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
              {language === 'en' ? consultation.en.title : consultation.id.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg">
              {language === 'en' ? consultation.en.description : consultation.id.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-end">
            <div className="text-right">
               <p className="text-2xl font-extrabold text-primary">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mr-1">
                  IDR
                </span>
                {language === 'en' ? consultation.en.price : consultation.id.price}
                <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-1">
                  {language === 'en' ? consultation.en.unit : consultation.id.unit}
                </span>
              </p>
            </div>
            
            <Link
                href={language === 'en' ? consultation.en.link : consultation.id.link}
                target="_blank"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700/50 px-5 py-3 text-center text-sm font-medium text-slate-800 dark:text-slate-200 transition-all hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-800"
              >
                {language === 'en' ? consultation.en.cta : consultation.id.cta}
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
          </div>
      </div>
    </section>
  );
};

export default Pricing;
