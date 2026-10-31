import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/content";
import { SiteCta } from "@/components/site-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return {
    title: post ? `${post.title} — Rohith Juluru` : "Writing — Rohith Juluru",
    description: post?.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main className="site-shell min-h-screen bg-white text-[#17221d]">
      <article>
        <header className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-20 lg:pt-32">
          <Breadcrumbs
            current={post.title}
            parent={{ label: "Blogs", href: "/blogs" }}
          />
          <h1 className="mt-8 w-full text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[1] tracking-[-.06em]">
            {post.title}
            <span className="text-[#e25b38]">.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-y border-[#17221d]/15 py-4 font-mono text-[10px] uppercase tracking-[0.16em]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[#e25b38]">{post.category}</span>
              <span className="text-[#17221d]/30">/</span>
              <span className="text-[#17221d]/50">{post.date}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[#17221d]/50">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#17221d]/65">
            {post.excerpt}
          </p>
        </header>
        <figure className="mx-auto max-w-7xl px-6 lg:px-10">
          <img
            src={post.cover}
            alt={`${post.title} cover`}
            className="aspect-[2/1] w-full rounded-sm object-cover"
          />
          <figcaption className="mt-3 font-mono text-center text-xs uppercase tracking-[0.12em] text-[#17221d]/50">
            {post.title} — cover image
          </figcaption>
        </figure>
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[.25fr_.75fr] lg:gap-12 lg:px-10 lg:py-28">
          <aside className="font-mono text-xs uppercase tracking-[0.16em] text-[#e25b38]">
            / The notes
          </aside>
          <div className="flex flex-col gap-8 text-xl leading-9 text-[#17221d]/80 lg:text-2xl">
            {post.content ? (
              post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={`heading-${index}`}
                      className="text-2xl font-medium leading-tight tracking-[-.04em] text-[#17221d] lg:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "paragraph") {
                  return <p key={`paragraph-${index}`}>{block.text}</p>;
                }

                return (
                  <figure key={`image-${index}`} className="py-4">
                    <img
                      src={block.src}
                      alt={block.alt}
                      loading="lazy"
                      className="aspect-[1.5/1] w-full rounded-sm object-cover"
                    />
                    <figcaption className="mt-3 font-mono text-center text-xs uppercase tracking-[0.12em] text-[#17221d]/50">
                      {block.caption}
                    </figcaption>
                  </figure>
                );
              })
            ) : post.sections ? (
              post.sections.map((section, index) => (
                <section key={section.heading} className="flex flex-col gap-5">
                  <h2 className="text-2xl font-medium leading-tight tracking-[-.04em] text-[#17221d] lg:text-3xl">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {index === 1 && (
                    <figure className="py-4">
                      <img
                        src={post.inlineImage}
                        alt={post.imageCaption}
                        loading="lazy"
                        className="aspect-[1.5/1] w-full rounded-sm object-cover"
                      />
                      <figcaption className="mt-3 font-mono text-center text-xs uppercase tracking-[0.12em] text-[#17221d]/50">
                        {post.imageCaption}
                      </figcaption>
                    </figure>
                  )}
                </section>
              ))
            ) : (
              <>
                {post.body.slice(0, 1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <figure className="py-4">
                  <img
                    src={post.inlineImage}
                    alt={post.imageCaption}
                    loading="lazy"
                    className="aspect-[1.5/1] w-full rounded-sm object-cover"
                  />
                  <figcaption className="mt-3 font-mono text-center text-xs uppercase tracking-[0.12em] text-[#17221d]/50">
                    {post.imageCaption}
                  </figcaption>
                </figure>
                {post.body.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </>
            )}
            <div className="mt-8 border-t border-[#17221d]/15 pt-8 text-sm leading-6 text-[#17221d]/60">
              <a
                href="https://github.com/Rohith2201"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#17221d] hover:text-[#e25b38]"
              >
                More from Rohith <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </article>
      <SiteCta />
    </main>
  );
}
