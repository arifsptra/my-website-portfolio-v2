import CustomCursor from "./component/CustomCursor";
import About from "./component/home/About";
import Experience from "./component/home/Experience";
import Header from "./component/home/Header";
import Project from "./component/home/Project";
import Footer from "./component/home/Footer";

export default function Home() {
  return (
    <>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />

        <main id="content" className="w-full lg:w-1/2 lg:py-24">
          <About />

          <Experience />

          <Project />

          <Footer />
        </main>
      </div>
    </>
  );
}
