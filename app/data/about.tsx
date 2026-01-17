import Image from "next/image";
import Link from "next/link";

interface HoverLinkProps {
  href: string;
  text: string;
  logoSrc: string;
}

const HoverLink = ({ href, text, logoSrc }: HoverLinkProps) => (
  <span className="group relative inline-block">
    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 transition-all duration-300 group-hover:-top-12 group-hover:opacity-100">
      <div className="rounded-lg bg-white p-1.5 shadow-xl border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
        <Image
          src={logoSrc}
          alt={`${text} logo`}
          width={100}
          height={100}
          className="h-8 w-auto object-contain"
        />
      </div>
      <div className="mx-auto h-2 w-2 -translate-y-1 rotate-45 bg-white border-r border-b border-slate-100 dark:bg-slate-800 dark:border-slate-700" />
    </span>

    <Link
      href={href}
      className="font-semibold text-slate-900 hover:text-primary dark:text-slate-200 dark:hover:text-primary underline decoration-slate-300 underline-offset-4 decoration-1 hover:decoration-primary transition-all"
      target="_blank"
    >
      {text}
    </Link>
  </span>
);

export const about = {
  en: (
    <div className="space-y-3">
      <p>
        I am a seasoned Software Engineer with over 5 years of experience crafting
        high-performance web and mobile applications.
      </p>
      <p>
        I specialize in bridging design and functionality, creating intuitive
        UI/UX interfaces, and integrating robust backend systems. My expertise
        spans the entire development lifecycle, from building scalable front-end
        architectures to managing databases for optimal performance.
      </p>
      <p>
        As a leader, I have successfully guided cross-functional teams to deliver
        end-to-end, user-centric solutions that align with business goals. I am
        passionate about solving complex technical challenges, streamlining
        workflows, and transforming innovative ideas into impactful digital
        products.
      </p>
      <p className="leading-relaxed">
        Beyond my engineering career, I am a serial entrepreneur dedicated to
        digital innovation. I founded and currently serve as CEO of{" "}
        <HoverLink
          href="https://business.fotoin.app"
          text="Fotoin"
          logoSrc="/img/logos/fotoin.png"
        />
        , a digital imaging platform, and{" "}
        <HoverLink
          href="https://wator.app"
          text="Wator"
          logoSrc="/img/logos/wator.png"
        />
        , a communication automation solution. Additionally, I established{" "}
        <HoverLink
          href="https://riffia.vercel.app"
          text="riffia"
          logoSrc="/img/logos/riffia.png"
        />
        , a creative custom apparel brand.
      </p>
      <p>
        Across all my ventures, my mission is to empower micro, small, and
        medium-sized enterprises (MSMEs) to achieve sustainable growth through
        tailored technological solutions and strategic business development.
      </p>
    </div>
  ),
  id: (
    <div className="space-y-3">
      <p>
        Saya adalah Software Engineer berpengalaman dengan lebih dari 5 tahun pengalaman dalam membuat
        aplikasi web dan seluler berkinerja tinggi.
      </p>
      <p>
        Saya mengkhususkan diri dalam menjembatani desain dan fungsionalitas, menciptakan antarmuka
        UI/UX yang intuitif, dan mengintegrasikan sistem backend yang tangguh. Keahlian saya
        mencakup seluruh siklus hidup pengembangan, mulai dari membangun arsitektur front-end yang skalabel
        hingga mengelola database untuk kinerja yang optimal.
      </p>
      <p>
        Sebagai seorang pemimpin, saya telah berhasil membimbing tim lintas fungsi untuk memberikan
        solusi end-to-end yang berpusat pada pengguna yang sejalan dengan tujuan bisnis. Saya
        bersemangat untuk memecahkan tantangan teknis yang kompleks, menyederhanakan
        alur kerja, dan mengubah ide-ide inovatif menjadi produk digital yang berdampak.
      </p>
      <p className="leading-relaxed">
        Di luar karir teknik saya, saya adalah seorang pengusaha serial yang berdedikasi pada
        inovasi digital. Saya mendirikan dan saat ini menjabat sebagai CEO{" "}
        <HoverLink
          href="https://business.fotoin.app"
          text="Fotoin"
          logoSrc="/img/logos/fotoin.png"
        />
        , sebuah platform pencitraan digital, dan{" "}
        <HoverLink
          href="https://wator.app"
          text="Wator"
          logoSrc="/img/logos/wator.png"
        />
        , solusi otomatisasi komunikasi. Selain itu, saya mendirikan{" "}
        <HoverLink
          href="https://riffia.vercel.app"
          text="riffia"
          logoSrc="/img/logos/riffia.png"
        />
        , sebuah merek pakaian kustom yang kreatif.
      </p>
      <p>
        Di seluruh usaha saya, misi saya adalah memberdayakan usaha mikro, kecil, dan
        menengah (UMKM) untuk mencapai pertumbuhan berkelanjutan melalui
        solusi teknologi yang disesuaikan dan pengembangan bisnis strategis.
      </p>
    </div>
  ),
};
