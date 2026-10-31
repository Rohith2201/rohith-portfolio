import { ArrowUpRight } from "lucide-react";

export function SiteCta() {
  return (
    <section className="border-t border-[#17221d]/15 bg-[#e25b38] text-[#f7f7f2]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f7f7f2]/70">
            / Have a good one?
          </p>
          <h2 className="mt-5 max-w-3xl text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[.94] tracking-[-.06em]">
            Let&apos;s make something{" "}
            <em className="font-serif font-normal">useful.</em>
          </h2>
        </div>
        <a
          href="mailto:hello@rohith.xyz"
          className="group inline-flex shrink-0 items-center gap-3 border-b border-[#f7f7f2]/60 pb-2 text-lg hover:border-[#f7f7f2]"
        >
          Start a conversation{" "}
          <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
}
