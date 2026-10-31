import Link from 'next/link'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/Rohith2201', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juluru-rohith', external: true },
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms-conditions' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[#17221d]/10 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="font-mono text-xs text-[#17221d]/50 dark:text-white/50">
          © {new Date().getFullYear()} Rohith Juluru
        </p>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {footerLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs transition-colors hover:text-[#e25b38]"
              >
                {link.label} ↗
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs transition-colors hover:text-[#e25b38]"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </footer>
  )
}
