import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { SiteCta } from "@/components/site-cta";

export default function WorksPage() {
  return (
    <main className="site-shell min-h-screen bg-white text-[#17221d]">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pb-32 lg:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
          / Selected work
        </p>
        <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h1 className="max-w-3xl text-[clamp(4rem,10vw,9rem)] font-medium leading-[.98] tracking-[-.06em]">
            Things I&apos;ve <em className="font-serif font-normal">made.</em>
          </h1>
          <p className="max-w-xs text-lg leading-7 text-[#17221d]/65">
            A collection of products, systems, and experiments built with care.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <a
              href={`/works/${project.slug}`}
              key={project.title}
              className="grid gap-8 border-t border-[#17221d]/20 pt-8 lg:grid-cols-[.12fr_.38fr_.5fr] lg:items-start"
            >
              <span className="font-mono text-sm text-[#e25b38]">
                0{index + 1}
              </span>
              <div>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h2 className="text-4xl tracking-[-.06em] lg:text-6xl">
                      {project.title}
                    </h2>
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-[#17221d]/50">
                      {project.type} / {project.year}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-2" />
                </div>
                <p className="mt-8 max-w-md text-lg leading-7 text-[#17221d]/65">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#17221d]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={project.cover}
                alt={`${project.title} project preview`}
                className={`aspect-[1.5/1] w-full rounded-sm grayscale transition-all duration-500 hover:grayscale-0 ${project.slug === "code-365" ? "bg-[#d8e6df] object-contain" : project.slug === "smart-mart" ? "bg-white object-contain" : "object-cover"}`}
              />
            </a>
          ))}
        </div>
      </section>
      <SiteCta />
    </main>
  );
}
