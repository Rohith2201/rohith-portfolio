"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "About", href: "/#about" },
  { label: "Works", href: "/works" },
  { label: "Blogs", href: "/blogs" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/works") return pathname.startsWith("/works");
    if (href === "/blogs") return pathname.startsWith("/blogs");
    return false;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#17221d]/10 bg-[#f7f7f2]/90 px-4 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#111614]/90 sm:px-6">
        <Link
          href="/"
          aria-label="Rohith Juluru, home"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 font-mono text-sm font-semibold tracking-tight"
        >
          rohith<span className="text-[#e25b38]">.</span>xyz
        </Link>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"} absolute left-4 right-4 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-3xl border border-[#17221d]/10 bg-[#f7f7f2] p-3 shadow-lg transition duration-200 dark:border-white/10 dark:bg-[#111614] md:visible md:static md:translate-y-0 md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none md:dark:bg-transparent`}
        >
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`rounded-full px-4 py-2 text-sm transition-colors hover:text-[#e25b38] ${active ? "bg-[#17221d]/[0.06] text-[#e25b38] dark:bg-white/[0.07]" : "text-current/70"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 inline-flex items-center justify-between rounded-2xl bg-[#17221d] px-4 py-3 text-sm text-[#f7f7f2] transition-colors hover:bg-[#e25b38] dark:bg-[#f7f7f2] dark:text-[#17221d] md:hidden"
          >
            Let&apos;s talk <ArrowUpRight size={16} />
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/#contact"
            className="hidden items-center gap-2 rounded-full bg-[#17221d] px-4 py-2.5 text-sm text-[#f7f7f2] transition-colors hover:bg-[#e25b38] dark:bg-[#f7f7f2] dark:text-[#17221d] md:inline-flex"
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            className="grid size-10 place-items-center rounded-full border border-[#17221d]/10 transition-colors hover:bg-[#17221d]/5 dark:border-white/10 dark:hover:bg-white/5 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}
