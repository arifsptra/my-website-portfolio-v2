import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    year: string;
    name: string;
    madeAt: string;
    image?: string;
    description: string;
    buildWith: string[];
    link: { github: string; website: string };
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { year, name, madeAt, image, description, buildWith, link } = project;
  const primaryHref = link.website || link.github || "";
  const visibleTech = buildWith.slice(0, 3);
  const extraTech = buildWith.length - visibleTech.length;

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-600/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-primary-glow dark:border-slate-600/20 dark:bg-slate-800/50 ${
        primaryHref ? "cursor-pointer" : ""
      }`}
    >
      {primaryHref && (
        <Link
          href={primaryHref}
          target="_blank"
          aria-label={name}
          className="absolute inset-0 z-0"
        />
      )}
      <div className="relative aspect-video overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : link.github ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-900 to-primary/30">
            <span className="w-16 fill-slate-500 transition-all duration-300 group-hover:scale-110 group-hover:fill-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25C2,35.164,8.63,43.804,17.791,46.836z" />
              </svg>
            </span>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
            <span className="select-none text-5xl font-bold text-primary/40">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
            {year}
          </span>
          <span className="truncate text-slate-400 dark:text-slate-500">
            {madeAt}
          </span>
        </div>

        <h3 className="font-semibold leading-snug text-slate-800 transition-colors duration-150 group-hover:text-primary dark:text-slate-200 dark:group-hover:text-primary">
          {name}
        </h3>

        <p className="text-sm leading-relaxed text-slate-500 line-clamp-3 dark:text-slate-400">
          {description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {visibleTech.map((tech, i) => (
            <li
              key={i}
              className="w-max rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </li>
          ))}
          {extraTech > 0 && (
            <li className="px-2 py-1 text-xs font-medium text-slate-400 dark:text-slate-500">
              +{extraTech}
            </li>
          )}
        </ul>

        {(link.website || link.github) && (
          <div className="flex items-center gap-4 border-t border-slate-600/10 pt-3 dark:border-slate-600/20">
            {link.website && (
              <Link
                href={link.website}
                target="_blank"
                className="group/link relative z-10 flex w-max items-center gap-1.5 fill-slate-800 text-sm font-medium text-slate-500 transition-all duration-150 ease-in-out hover:fill-primary hover:text-primary dark:fill-slate-400 dark:text-slate-400 dark:hover:fill-primary dark:hover:text-primary"
              >
                {new URL(link.website).hostname}
                <span className="inline-block w-2.5 transition-all duration-150 ease-in-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z" />
                  </svg>
                </span>
              </Link>
            )}
            {link.github && (
              <Link
                href={link.github}
                target="_blank"
                className="group/gh relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors duration-150 hover:text-primary dark:text-slate-400 dark:hover:text-primary"
              >
                GitHub
                <span className="inline-block w-3 fill-current">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25C2,35.164,8.63,43.804,17.791,46.836z" />
                  </svg>
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
