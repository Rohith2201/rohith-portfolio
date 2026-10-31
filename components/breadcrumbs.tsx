import Link from 'next/link'

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#17221d]/50">
      <Link href="/" className="transition-colors hover:text-[#e25b38]">Home</Link>
      <span aria-hidden="true">/</span>
      <span className="text-[#17221d]/75">{current}</span>
    </nav>
  )
}
