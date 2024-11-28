import Image from "next/image";
import Link from "next/link";
import { about } from "./data/about";
import { profile } from "./data/profile";
import CustomCursor from "./component/CustomCursor";
import { experience } from "./data/experience";
import About from "./component/home/About";
import Experience from "./component/home/Experience";
import Header from "./component/home/Header";
import Project from "./component/home/Project";
import Footer from "./component/home/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="mx-auto max-w-screen-xl min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        {/* <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        ></a> */}
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

          <main id="content" className="w-full lg:w-1/2 lg:py-24">
            <About />

            <Experience />

            <Project />

            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
