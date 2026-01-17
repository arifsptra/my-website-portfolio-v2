import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "./component/CustomCursor";
import ThemeProvider from "./component/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Arif Saputra | Software Engineer & Jasa Pembuatan Website",
  description:
    "Arif Saputra adalah Software Engineer berpengalaman menyediakan Jasa Pembuatan Website dan Aplikasi Mobile profesional. Expert in React, Next.js, and Mobile Apps.",
  keywords: [
    "Jasa Pembuatan Website",
    "Jasa Buat Aplikasi",
    "Web Developer Indonesia",
    "Software Engineer Portfolio",
    "Arif Saputra",
    "Next.js Developer",
    "React Developer",
    "Mobile App Developer",
    "Jasa Web Company Profile",
    "Jasa Web Landing Page",
  ],
  metadataBase: new URL("https://arifsaputra.my.id"),
  openGraph: {
    title: "Arif Saputra | Software Engineer & Jasa Pembuatan Website",
    description:
      "Arif Saputra menyediakan Jasa Pembuatan Website dan Aplikasi Kustom profesional. Tingkatkan bisnis Anda dengan solusi digital berkualitas tinggi.",
    url: "https://arifsaputra.my.id",
    siteName: "Arif Saputra",
    images: [
      {
        url: "https://arifsaputra.my.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arif Saputra - Software Engineer",
      },
    ],
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Saputra | Software Engineer & Jasa Pembuatan Website",
    description: "Jasa Pembuatan Website dan Aplikasi Mobile Profesional.",
    images: ["https://arifsaputra.my.id/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Arif Saputra",
                url: "https://arifsaputra.my.id",
                image: "https://arifsaputra.my.id/og-image.jpg",
                jobTitle: "Software Engineer",
                worksFor: { "@type": "Organization", name: "Selulosa" },
                sameAs: [
                  "https://www.linkedin.com/in/arifsptra",
                  "https://github.com/arifsptra",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Arif Saputra - Jasa Pembuatan Website",
                url: "https://arifsaputra.my.id",
                image: "https://arifsaputra.my.id/og-image.jpg",
                description:
                  "Jasa Pembuatan Website dan Aplikasi Mobile profesional. Kami melayani pembuatan Company Profile, Landing Page, dan Aplikasi Kustom.",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "ID",
                },
                priceRange: "IDR 499.000 - IDR 15.000.000",
                telephone: "+62-838-1698-8646",
              },
            ]),
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
        <LanguageProvider>
          <CustomCursor />
          <ThemeProvider />
          <div className="mx-auto max-w-screen-xl min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
