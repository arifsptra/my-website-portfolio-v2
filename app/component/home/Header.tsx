import { profile } from "@/app/data/profile";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-xl font-medium text-primary">
          {profile.role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{profile.about}</p>

        <div className="my-5">
          <Link
            href={profile.file_resume}
            className="group flex items-baseline gap-2 w-max  rounded-lg fill-slate-800 hover:fill-primary hover:text-primary transition-all ease-in-out duration-150"
            target="_blank"
          >
            <p className="text-sm font-medium">View Full Resume</p>
            <div className="w-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      <ul
        className="text-xs lg:text-sm flex lg:flex-col gap-3 mt-7 lg:mt-0 mb-10 lg:mb-0"
        aria-label="Social Media"
      >
        {profile.socialMedia.map((sm) => (
          <li
            key={sm.id}
            className="lg:hover:translate-x-2 transition-all ease-in-out duration-200"
          >
            <Link href={sm.link} className="flex items-center gap-2">
              <div className="w-6 fill-slate-800 hover:fill-slate-500 lg:hover:fill-primary lg:fill-primary">
                {sm.icon}
              </div>
              <p className="hidden md:block">{sm.decription}</p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="hidden lg:block -z-10 absolute -bottom-20 left-0 text-[200px] text-black text-opacity-5 font-bold">
        Arif.
      </p>
    </header>
  );
};

export default Header;
