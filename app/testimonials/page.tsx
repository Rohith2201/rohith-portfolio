import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteCta } from "@/components/site-cta";

export const metadata: Metadata = {
  title: "Testimonials — Rohith Juluru",
  description:
    "Feedback from people who have collaborated with Rohith Juluru on software and product work.",
  alternates: { canonical: "/testimonials" },
};

const testimonials = [
  {
    company: "Chatura Solutions",
    project: "Learning platform",
    quote:
      "The experience has been wonderful. Rohith helped us create a thoughtful learning platform that feels clear and easy to use.",
  },
  {
    company: "Cheezechoice",
    project: "Food delivery website",
    quote:
      "The design is good—fresh, welcoming, and easy to navigate. It gives the Cheezechoice experience a polished feel.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="site-shell min-h-screen bg-white text-[#17221d]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
          / Kind words
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
          <h1 className="text-[clamp(3.8rem,9vw,8rem)] font-medium leading-[.94] tracking-[-.07em]">
            Better work,
            <br />
            <em className="font-serif font-normal">together.</em>
          </h1>
          <p className="max-w-md text-lg leading-8 text-[#17221d]/65">
            The best projects come from trust, open communication, and a shared
            sense of ownership. I appreciate everyone who has built alongside
            me.
          </p>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32"
        aria-labelledby="testimonials-heading"
      >
        <div className="grid gap-10 border-y border-[#17221d]/15 py-10 lg:grid-cols-[.35fr_1fr] lg:gap-16 lg:py-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
              / From collaborators
            </p>
            <h2
              id="testimonials-heading"
              className="mt-4 text-3xl tracking-[-.04em]"
            >
              Testimonials
            </h2>
          </div>
          <div className="grid gap-5">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.company}
                className="rounded-3xl border border-[#17221d]/15 bg-white/55 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-6xl leading-none text-[#e25b38]"
                >
                  “
                </span>
                <blockquote className="-mt-2 max-w-3xl text-2xl leading-snug tracking-[-.03em] sm:text-3xl">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#17221d]/10 pt-5 dark:border-white/10">
                  <span className="font-medium">{testimonial.company}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#17221d]/50 dark:text-white/50">
                    {testimonial.project}
                  </span>
                </figcaption>
              </figure>
            ))}
            <a
              href="mailto:hello@rohith.xyz?subject=Testimonial%20for%20Rohith"
              className="mt-2 inline-flex w-fit items-center gap-2 border-b border-[#17221d]/40 pb-1 text-sm transition-colors hover:text-[#e25b38]"
            >
              Worked together? Share a note <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
      <SiteCta />
    </main>
  );
}
