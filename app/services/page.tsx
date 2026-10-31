import type { Metadata } from "next";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { SiteCta } from "@/components/site-cta";

export const metadata: Metadata = {
  title: "Software Development Services | Rohith Juluru",
  description:
    "Freelance software development by Rohith Juluru, a software and ML developer in India. Full-stack web apps, product engineering, and practical AI features.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Software Development Services | Rohith Juluru",
    description:
      "Full-stack web applications, product engineering, and practical AI features.",
    url: "https://rohith.xyz/services",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Web product development",
    description:
      "Take a product idea from a clear brief to a working web experience. Build the interface, backend, and data layer as one cohesive product.",
    details: [
      "Product interfaces",
      "Web applications",
      "MVPs and new features",
    ],
    example: { label: "Explore Code 365", href: "/works/code-365" },
    icon: Code2,
  },
  {
    number: "02",
    title: "Full-stack engineering",
    description:
      "Build or extend the systems behind your product, from responsive frontend experiences to APIs, authentication, databases, and integrations.",
    details: [
      "Frontend and backend",
      "APIs and integrations",
      "Technical improvements",
    ],
    example: { label: "Explore Smart Mart", href: "/works/smart-mart" },
    icon: ArrowUpRight,
  },
  {
    number: "03",
    title: "AI and ML features",
    description:
      "Add practical AI capabilities to a product, including retrieval workflows, model integrations, and focused automation that serves a real user need.",
    details: ["LLM integrations", "RAG and search", "Applied ML features"],
    example: {
      label: "Read about RAG search",
      href: "/blogs/rag-search-quality",
    },
    icon: Sparkles,
  },
];

const steps = [
  {
    number: "01",
    title: "Align",
    description:
      "Clarify the user, goal, scope, and what success should look like.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Choose a practical approach and break the work into clear milestones.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Share progress early, gather feedback, and make decisions together.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Polish the details and prepare the work for handoff or launch.",
  },
];

export default function ServicesPage() {
  return (
    <main className="site-shell min-h-screen bg-white text-[#17221d]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
          / Software development &amp; AI services
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_.6fr] lg:items-end">
          <h1 className="text-[clamp(3.8rem,9vw,8rem)] font-medium leading-[.94] tracking-[-.07em]">
            Software &amp; AI
            <br />
            <em className="font-serif font-normal">development.</em>
          </h1>
          <p className="max-w-md text-lg leading-8 text-[#17221d]/65">
            I help founders and teams turn product ideas into useful web
            applications, connected systems, and practical AI features.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href="mailto:hello@rohith.xyz?subject=Software%20project%20enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-[#17221d] px-5 py-3 text-sm text-[#f7f7f2] transition-colors hover:bg-[#e25b38] dark:bg-[#f7f7f2] dark:text-[#17221d]"
          >
            Discuss a project <ArrowUpRight size={15} />
          </a>
          <a
            href="/works"
            className="inline-flex items-center gap-2 border-b border-[#17221d]/40 pb-1 text-sm transition-colors hover:text-[#e25b38]"
          >
            View selected work <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32"
        aria-label="Services"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map(
            ({ number, title, description, details, example, icon: Icon }) => (
              <article
                key={number}
                className="flex min-h-[26rem] flex-col justify-between rounded-3xl border border-[#17221d]/15 bg-white/55 p-6 dark:bg-white/[0.03] sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#e25b38]">
                      {number} / 03
                    </span>
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-[#e25b38]"
                    />
                  </div>
                  <h2 className="mt-12 text-3xl leading-tight tracking-[-.05em]">
                    {title}
                  </h2>
                  <p className="mt-5 leading-7 text-[#17221d]/65">
                    {description}
                  </p>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {details.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-full border border-[#17221d]/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#17221d]/65"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href={example.href}
                  className="mt-7 inline-flex w-fit items-center gap-2 border-b border-[#17221d]/30 pb-1 text-sm transition-colors hover:text-[#e25b38]"
                >
                  {example.label} <ArrowUpRight size={14} />
                </a>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="border-y border-[#17221d]/15 bg-white/35">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
              / A simple process
            </p>
            <h2 className="mt-5 max-w-sm text-4xl leading-tight tracking-[-.05em] lg:text-5xl">
              Clear steps, close collaboration.
            </h2>
          </div>
          <div className="grid gap-0 sm:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="border-t border-[#17221d]/15 py-6 sm:px-5 sm:first:pl-0"
              >
                <p className="font-mono text-xs text-[#e25b38]">
                  {step.number}
                </p>
                <h3 className="mt-3 text-2xl tracking-[-.04em]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#17221d]/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteCta />
    </main>
  );
}
