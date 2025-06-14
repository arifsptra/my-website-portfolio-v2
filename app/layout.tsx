import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "./component/CustomCursor";
import ThemeProvider from "./component/ThemeProvider";

// Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Arif Saputra | Full Stack Software Engineer",
  description:
    "Arif Saputra is a Full Stack Software Engineer and the President Director of Allwes.id, showcasing expertise in end-to-end software development and strategic leadership.",
  metadataBase: new URL("https://arif.allwes.id"),
  openGraph: {
    title: "Arif Saputra | Full Stack Software Engineer",
    description:
      "Explore Arif Saputra's portfolio: Full Stack Software Engineer & founder of ALLWES.ID",
    url: "https://arif.allwes.id",
    siteName: "Arif Saputra",
    images: [
      {
        url: "https://arif.allwes.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arif Saputra",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Saputra | Full Stack Software Engineer",
    description:
      "Founder of ALLWES.ID | Building digital experiences across sectors",
    images: ["https://arif.allwes.id/og-image.jpg"],
  },
};

// Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arif Saputra",
              url: "https://arif.allwes.id",
              image: "https://arif.allwes.id/og-image.jpg",
              jobTitle: "Full Stack Software Engineer",
              worksFor: { "@type": "Organization", name: "ALLWES.ID" },
              sameAs: [
                "https://www.linkedin.com/in/arifsptra",
                "https://github.com/arifsptra",
                "https://twitter.com/arifsptra",
              ],
            }),
          }}
        />
      </head>
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
