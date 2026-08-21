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
        I am an Entrepreneur and Software Engineer dedicated to
        transforming innovative ideas into impactful digital products.
      </p>
      <p>
        With deep technical roots in full-stack development, I specialize in
        guiding cross-functional teams through the entire product
        lifecycle—from ideation and system architecture to market launch.
      </p>
      <p>
        I have successfully led the development of end-to-end B2B and SaaS
        solutions, ensuring that robust backend systems and intuitive UI/UX
        designs seamlessly integrate to align with strategic business goals. I
        am passionate about solving complex technical challenges, streamlining
        team workflows, and driving products to scale.
      </p>
      <p className="leading-relaxed">
        Beyond my engineering career, I am an entrepreneur dedicated to digital
        innovation. I founded and currently serve as CEO of{" "}
        <HoverLink
          href="https://selulosa.com"
          text="Selulosa"
          logoSrc="/img/logos/selulosa.png"
        />
        , a digital technology company where we handle a diverse ecosystem of
        SaaS products, including{" "}
        <HoverLink
          href="https://business.fotoin.app"
          text="Fotoin"
          logoSrc="/img/logos/fotoin.png"
        />
        , an AI-driven digital imaging platform,{" "}
        <HoverLink
          href="https://wator.id"
          text="Wator"
          logoSrc="/img/logos/wator.png"
        />
        , a WhatsApp automation and AI communication solution,{" "}
        <HoverLink
          href="https://networth.selulosa.com"
          text="Networth"
          logoSrc="/img/logos/networth.svg"
        />
        , a financial and wealth management SaaS, and{" "}
        <HoverLink
          href="https://hayaku.selulosa.com"
          text="Hayaku"
          logoSrc="/img/logos/hayaku.svg"
        />
        , a multi-vertical point-of-sale (POS) system. Additionally, as a
        separate venture, I established{" "}
        <HoverLink
          href="https://riffia.vercel.app"
          text="riffia"
          logoSrc="/img/logos/riffia.png"
        />
        , a creative custom apparel brand. You can learn more about our B2B
        services at{" "}
        <Link
          href="https://selulosa.com/layanan-b2b"
          className="font-semibold text-slate-900 hover:text-primary dark:text-slate-200 dark:hover:text-primary decoration-slate-300 underline-offset-4 decoration-1 hover:decoration-primary transition-all"
          target="_blank"
        >
          selulosa.com
        </Link>
        .
      </p>
    </div>
  ),
  id: (
    <div className="space-y-3">
      <p>
        Saya adalah seorang Entrepreneur dan Software Engineer
        yang berdedikasi untuk mewujudkan ide-ide inovatif menjadi produk
        digital yang berdampak nyata.
      </p>
      <p>
        Berbekal keahlian teknis yang mendalam dalam pengembangan full-stack,
        saya memiliki spesialisasi dalam memandu tim lintas divisi di sepanjang
        siklus hidup produk—mulai dari tahap penggagasan dan perancangan
        arsitektur sistem hingga peluncuran ke pasar.
      </p>
      <p>
        Saya telah sukses memimpin pengembangan solusi B2B dan SaaS secara
        menyeluruh (end-to-end), memastikan integrasi yang mulus antara sistem
        backend yang tangguh dan desain UI/UX yang intuitif demi mendukung
        tujuan strategis bisnis. Saya memiliki semangat tinggi dalam memecahkan
        tantangan teknis yang kompleks, mengoptimalkan alur kerja tim, serta
        mendorong skala produk agar dapat digunakan lebih luas.
      </p>
      <p className="leading-relaxed">
        Di luar karir saya sebagai engineer, saya adalah seorang pengusaha yang
        berdedikasi pada inovasi digital. Saya mendirikan dan saat ini menjabat
        sebagai CEO di{" "}
        <HoverLink
          href="https://selulosa.com"
          text="Selulosa"
          logoSrc="/img/logos/selulosa.png"
        />
        , sebuah perusahaan teknologi digital di mana kami mengelola berbagai
        ekosistem produk SaaS, termasuk{" "}
        <HoverLink
          href="https://business.fotoin.app"
          text="Fotoin"
          logoSrc="/img/logos/fotoin.png"
        />
        , platform digital imaging berbasis AI,{" "}
        <HoverLink
          href="https://wator.id"
          text="Wator"
          logoSrc="/img/logos/wator.png"
        />
        , solusi otomatisasi komunikasi dan AI WhatsApp,{" "}
        <HoverLink
          href="https://networth.selulosa.com"
          text="Networth"
          logoSrc="/img/logos/networth.svg"
        />
        , aplikasi SaaS untuk manajemen keuangan dan kekayaan, serta{" "}
        <HoverLink
          href="https://hayaku.selulosa.com"
          text="Hayaku"
          logoSrc="/img/logos/hayaku.svg"
        />
        , sistem point-of-sale (POS) multi-vertical. Selain itu, sebagai
        entitas bisnis yang terpisah, saya juga mendirikan{" "}
        <HoverLink
          href="https://riffia.vercel.app"
          text="riffia"
          logoSrc="/img/logos/riffia.png"
        />
        , sebuah merek pakaian kustom yang kreatif. Anda dapat mempelajari lebih
        lanjut tentang layanan B2B kami di{" "}
        <Link
          href="https://selulosa.com"
          className="font-semibold text-slate-900 hover:text-primary dark:text-slate-200 dark:hover:text-primary underline decoration-slate-300 underline-offset-4 decoration-1 hover:decoration-primary transition-all"
          target="_blank"
        >
          selulosa.com
        </Link>
        .
      </p>
    </div>
  ),
};
