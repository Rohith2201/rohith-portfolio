"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { blogPosts, projects } from "@/lib/content";

const works = projects.slice(0, 3).map((project, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: project.title,
  type: `${project.type} / ${project.year}`,
  description: project.description,
  tags: project.tags,
  slug: project.slug,
  accent: ["bg-[#f0d8c9]", "bg-[#d8e6df]", "bg-[#d9d7e8]"][index % 3],
}));

/*
  {
    number: '01',
    title: 'Sage AI',
    type: 'AI product / 2024',
    description: 'A calm, capable AI workspace for turning messy research into clear decisions.',
    tags: ['Next.js', 'AI SDK', 'Postgres'],
    accent: 'bg-[#d8e6df]',
  },
  {
    number: '02',
    title: 'Good Practice',
    type: 'Brand system / 2023',
    description: 'A design and development system for a new generation of thoughtful digital products.',
    tags: ['Strategy', 'Design systems', 'Web'],
    accent: 'bg-white',
  },
  {
    number: '03',
    title: 'Atlas Notes',
    type: 'Open source / 2023',
    description: 'An opinionated, local-first writing tool for people who think in connections.',
    tags: ['TypeScript', 'React', 'Open source'],
    accent: 'bg-[#d9d7e8]',
  },
] */

const posts = blogPosts.slice(0, 3);

export default function Page() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry from ${formData.get("name")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      "",
      formData.get("message"),
    ].join("\n");
    window.location.href = `mailto:hello@rohith.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <main className="portfolio-shell site-shell min-h-screen overflow-hidden bg-white text-[#17221d]">
      <section
        id="top"
        className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-10 lg:pb-32 lg:pt-52"
      >
        <div>
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
            <span className="size-2 rounded-full bg-[#e25b38]" /> Available for
            select projects
          </div>
          <h1 className="max-w-4xl text-[clamp(3.5rem,9vw,8.8rem)] font-medium leading-[1.02] tracking-[-.06em]">
            Building
            <br />
            <em className="font-serif py-2 font-normal">useful</em> things
            <br />
            for curious people<span className="text-[#e25b38]">.</span>
          </h1>
        </div>
        <div className="max-w-sm pb-2 lg:justify-self-end">
          <p className="text-xl leading-8 text-[#17221d]/70">
            Hi, I&apos;m Rohith — a freelance software &amp; ML developer based
            in India. I help founders and teams turn ambitious ideas into calm,
            capable digital products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="/works"
              className="inline-flex items-center gap-2 border-b border-[#17221d] pb-1 text-sm font-medium"
            >
              See my work <ArrowUpRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#17221d] px-4 py-2 text-xs text-[#f7f7f2] transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
              / About me
            </p>
          </div>
          <div>
            <p className="max-w-3xl text-3xl leading-tight tracking-[-.03em] lg:text-5xl">
              I like making complex things feel simple. From an idea to a
              working product, I bring curiosity, care, and a little bit of
              code.
            </p>
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-y-8 border-t border-[#17221d]/15 pt-6 text-sm sm:grid-cols-4">
              <div>
                <p className="font-mono text-2xl">04+</p>
                <p className="mt-1 text-[#17221d]/60">years building</p>
              </div>
              <div>
                <p className="font-mono text-2xl">18</p>
                <p className="mt-1 text-[#17221d]/60">projects shipped</p>
              </div>
              <div>
                <p className="font-mono text-2xl">03</p>
                <p className="mt-1 text-[#17221d]/60">open source</p>
              </div>
              <div>
                <p className="font-mono text-2xl">∞</p>
                <p className="mt-1 text-[#17221d]/60">things to learn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
              / Selected work
            </p>
            <a href="/works" className="group">
              <h2 className="text-5xl tracking-[-.06em] transition-colors group-hover:text-[#e25b38] lg:text-7xl">
                A few things
                <br />
                <em className="font-serif font-normal">I&apos;ve made.</em>
              </h2>
            </a>
          </div>
          <span className="hidden font-mono text-xs text-[#17221d]/50 sm:block">
            (03 projects)
          </span>
        </div>
        <div className="grid gap-5">
          {works.map((work) => (
            <a
              href={`/works/${work.slug}`}
              key={work.number}
              className="group grid gap-8 border-t border-[#17221d]/20 py-8 md:grid-cols-[.12fr_.38fr_.5fr] md:items-center"
            >
              <span className="font-mono text-sm text-[#e25b38]">
                {work.number}
              </span>
              <div>
                <h3 className="text-3xl tracking-[-.04em] transition-[color,transform] group-hover:translate-x-2 group-hover:text-[#e25b38]">
                  {work.title}{" "}
                  <ArrowUpRight
                    className="inline-block opacity-0 transition-opacity group-hover:opacity-100"
                    size={25}
                  />
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#17221d]/50">
                  {work.type}
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
                <p className="max-w-md text-[#17221d]/65">{work.description}</p>
                <div
                  className={`flex h-20 w-28 items-center justify-center rounded-full ${work.accent} transition-transform group-hover:rotate-6`}
                >
                  <Sparkles
                    size={25}
                    strokeWidth={1.3}
                    className="text-black"
                  />
                </div>
              </div>
              <div className="md:col-start-2 flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#17221d]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8 flex items-end justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
              / Selected collaborators
            </p>
            <span className="font-mono text-xs text-[#17221d]/50">
              A few teams I&apos;ve worked with
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <div className="flex min-h-24 items-center justify-center border border-[#17221d]/15 bg-white p-4 sm:min-h-32">
              <img
                src="/assets/work/chaturasolutions/logo%20.png"
                alt="Chatura Solutions LLP logo"
                className="h-12 w-full max-w-60 object-contain sm:h-14"
              />
            </div>
            <div className="flex min-h-24 items-center justify-center border border-[#17221d]/15 bg-[#1d2b78] p-4 sm:min-h-32">
              <img
                src="/assets/work/nritupskills/logo.png"
                alt="NRIT Upskills logo"
                className="h-12 w-full max-w-60 object-contain sm:h-14"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e98667]">
              / Experience
            </p>
          </div>
          <div className="grid gap-10">
            <div className="grid gap-2 border-b border-[#17221d]/15 pb-8 sm:grid-cols-[.3fr_1fr_auto]">
              <p className="font-mono text-xs text-[#17221d]/60">
                Aug 2025 — now
              </p>
              <div>
                <h3 className="text-2xl">Software Development Engineer</h3>
                <p className="mt-2 text-[#17221d]/65">LTIMindtree</p>
              </div>
              <span className="font-mono text-xs text-[#e98667]">01</span>
            </div>
            <div className="grid gap-2 border-b border-[#17221d]/15 pb-8 sm:grid-cols-[.3fr_1fr_auto]">
              <p className="font-mono text-xs text-[#17221d]/60">
                Jan 2025 — Aug 2025
              </p>
              <div>
                <h3 className="text-2xl">Intern</h3>
                <p className="mt-2 text-[#17221d]/65">Chatura Solutions</p>
              </div>
              <span className="font-mono text-xs text-[#e98667]">02</span>
            </div>
            <div className="grid gap-2 border-b border-[#17221d]/15 pb-8 sm:grid-cols-[.3fr_1fr_auto]">
              <p className="font-mono text-xs text-[#17221d]/60">2022</p>
              <div>
                <h3 className="text-2xl">CMO</h3>
                <p className="mt-2 text-[#17221d]/65">Appenexus</p>
              </div>
              <span className="font-mono text-xs text-[#e98667]">03</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="writing"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
              / From the journal
            </p>
            <a href="/blogs" className="group inline-block">
              <h2 className="mt-5 text-5xl tracking-[-.06em] transition-colors group-hover:text-[#e25b38] lg:text-6xl">
                Thinking
                <br />
                <em className="font-serif font-normal">out loud.</em>
                <ArrowUpRight
                  className="ml-2 inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={28}
                />
              </h2>
            </a>
          </div>
          <div>
            {posts.map((post) => (
              <a
                href={`/blogs/${post.slug}`}
                key={post.title}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-t border-[#17221d]/20 py-8"
              >
                <span className="font-mono text-[10px] text-[#17221d]/45">
                  {post.date}
                </span>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#e25b38]">
                    {post.category}
                  </span>
                  <h3 className="mt-2 text-2xl tracking-[-.02em] transition-colors group-hover:text-[#e25b38]">
                    {post.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-32">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
              / Get in touch
            </p>
            <h2 className="mt-6 text-6xl tracking-[-.07em] lg:text-8xl">
              Have a good
              <br />
              <em className="font-serif font-normal">idea?</em>
            </h2>
            <div className="mt-12 flex flex-col gap-3 text-sm">
              <a
                href="mailto:hello@rohith.xyz"
                className="flex items-center gap-3 hover:text-[#e25b38]"
              >
                <Mail size={16} /> hello@rohith.xyz
              </a>
              <span className="flex items-center gap-3">
                <MapPin size={16} /> Andhra Pradesh, India
              </span>
            </div>
          </div>
          <div>
            {sent ? (
              <div
                role="status"
                className="flex min-h-80 flex-col items-center justify-center border-t border-[#17221d]/20 text-center"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#17221d] text-[#f7f7f2]">
                  <Check size={22} />
                </div>
                <h3 className="text-3xl tracking-[-.04em]">
                  Email draft prepared.
                </h3>
                <p className="mt-2 text-[#17221d]/60">
                  Your email app should open with your message ready to send. If
                  it doesn&apos;t, write to hello@rohith.xyz.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-7 border-t border-[#17221d]/20 pt-7"
              >
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#17221d]/60">
                    Your name
                  </span>
                  <input
                    required
                    name="name"
                    className="border-b border-[#17221d]/25 bg-transparent py-3 outline-none placeholder:text-[#17221d]/35 focus:border-[#e25b38]"
                    placeholder="Jane Smith"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#17221d]/60">
                    Email address
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="border-b border-[#17221d]/25 bg-transparent py-3 outline-none placeholder:text-[#17221d]/35 focus:border-[#e25b38]"
                    placeholder="jane@company.com"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#17221d]/60">
                    Tell me a little about it
                  </span>
                  <textarea
                    required
                    minLength={20}
                    name="message"
                    aria-describedby="message-hint"
                    rows={3}
                    className="resize-none border-b border-[#17221d]/25 bg-transparent py-3 outline-none placeholder:text-[#17221d]/35 focus:border-[#e25b38]"
                    placeholder="What are you working on?"
                  />
                  <span id="message-hint" className="text-xs text-[#17221d]/50">
                    A few details help me reply with a useful next step.
                  </span>
                </label>
                <button
                  type="submit"
                  className="mt-2 flex w-fit items-center gap-3 bg-[#17221d] px-6 py-3 text-sm text-[#f7f7f2] transition-transform hover:-translate-y-1"
                >
                  Send message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
