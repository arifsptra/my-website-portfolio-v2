import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "./component/CustomCursor";
import ThemeProvider from "./component/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Arif Saputra | Full Stack Software Engineer",
  description:
    "Arif Saputra is a Full Stack Software Engineer and the President Director of Allwes.id, showcasing expertise in end-to-end software development and strategic leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}
        dark:bg-slate-900
        leading-relaxed
        dark:text-slate-400
        antialiased
        selection:bg-primary
        selection:text-white
        bg-white
        text-slate-500
      `}
      >
        <CustomCursor />
        <ThemeProvider />
        <div className="mx-auto max-w-screen-xl min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
