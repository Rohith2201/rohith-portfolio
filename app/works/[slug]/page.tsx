import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { SiteCta } from "@/components/site-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project
      ? `${project.title} — Rohith Juluru`
      : "Work — Rohith Juluru",
    description: project?.description,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="site-shell min-h-screen bg-white text-[#17221d]">
      <article>
        <header className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-20 lg:pt-32">
          <div className="flex items-center justify-between gap-4">
            <Breadcrumbs
              current={project.title}
              parent={{ label: "Works", href: "/works" }}
            />
            <div className="flex shrink-0 items-center gap-4">
              {project.links
                ?.filter((link) => link.placement === "top")
                .map((link) =>
                  link.icon === "github" ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      aria-label={`${project.title} source code on GitHub`}
                      title="View source code on GitHub"
                      className="grid size-10 place-items-center rounded-full border border-[#17221d]/15 transition-colors hover:border-[#e25b38] hover:text-[#e25b38]"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="size-[18px] fill-current"
                      >
                        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26 3.35.96.1-.74.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11.02 11.02 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm transition-colors hover:text-[#e25b38]"
                    >
                      {link.label} <ArrowUpRight size={14} />
                    </a>
                  ),
                )}
            </div>
          </div>
          <h1 className="mt-8 w-full text-[clamp(4rem,11vw,10rem)] font-medium leading-[1] tracking-[-.06em]">
            {project.title}
            <span className="text-[#e25b38]">.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-[#17221d]/15 py-4 font-mono text-[10px] uppercase tracking-[0.16em]">
            <span className="text-[#e25b38]">{project.type}</span>
            <span className="text-[#17221d]/30">/</span>
            <span className="text-[#17221d]/50">{project.year}</span>
          </div>
          {project.links?.some((link) => link.placement !== "top") && (
            <nav aria-label={`${project.title} project links`} className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {project.links.filter((link) => link.placement !== "top").map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[#e25b38]"
                >
                  {link.label} <ArrowUpRight size={15} />
                </a>
              ))}
            </nav>
          )}
          <p className="mt-10 max-w-2xl text-xl leading-8 text-[#17221d]/65">
            {project.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#17221d]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        <figure className="mx-auto max-w-7xl px-6 lg:px-10">
          <img
            src={project.cover}
            alt={`${project.title} overview`}
            className={`aspect-[2/1] w-full rounded-sm ${project.slug === "code-365" ? "bg-[#d8e6df] object-contain" : project.slug === "smart-mart" ? "bg-white object-contain" : "object-cover"}`}
          />
          <figcaption className="mt-3 font-mono text-center text-xs uppercase text-[#17221d]/50">
            {project.title} — overview
          </figcaption>
        </figure>

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[.25fr_.75fr] lg:gap-12 lg:px-10 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#e25b38]">
            / The project
          </p>
          <div className="flex flex-col gap-8 text-xl leading-9 text-[#17221d]/80 lg:text-2xl">
            {project.content
              ? project.content.map((block, index) =>
                  block.type === "paragraph" ? (
                    <p key={`paragraph-${index}`}>{block.text}</p>
                  ) : block.type === "heading" ? (
                    <h2
                      key={`heading-${index}`}
                      className="text-2xl font-medium leading-tight tracking-[-.04em] text-[#17221d] lg:text-3xl"
                    >
                      {block.text}
                    </h2>
                  ) : (
                    <figure key={`image-${index}`} className="py-4">
                      <img
                        src={block.src}
                        alt={block.alt}
                        loading="lazy"
                        className={`aspect-[1.5/1] w-full rounded-sm ${project.slug === "smart-mart" ? "bg-white object-contain" : "object-cover"}`}
                      />
                      <figcaption className="mt-3 font-mono text-center text-xs uppercase tracking-[0.12em] text-[#17221d]/50">
                        {block.caption}
                      </figcaption>
                    </figure>
                  ),
                )
              : (
                  <>
                    {project.body.slice(0, 1).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <figure className="py-4">
                      <img
                        src={project.inlineImage}
                        alt={project.imageCaption}
                        loading="lazy"
                        className={`aspect-[1.5/1] w-full rounded-sm ${project.slug === "smart-mart" ? "bg-white object-contain" : "object-cover"}`}
                      />
                      <figcaption className="mt-3 font-mono text-center text-xs uppercase tracking-[0.12em] text-[#17221d]/50">
                        {project.imageCaption}
                      </figcaption>
                    </figure>
                    {project.body.slice(1).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </>
                )}
            <a
              href="https://www.linkedin.com/in/juluru-rohith"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-base text-[#17221d] hover:text-[#e25b38]"
            >
              Connect on LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </article>
      <SiteCta />
    </main>
  );
}
