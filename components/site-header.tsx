'use client'

import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Works', href: '/works' },
  { label: 'Writing', href: '/blogs' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#17221d]/10 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-black/95">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">rohith<span className="text-[#e25b38]">.</span>xyz</Link>
        <nav aria-label="Main navigation" className={`${menuOpen ? 'absolute left-0 right-0 top-20 flex border-b border-[#17221d]/10 bg-white p-6 dark:border-white/10 dark:bg-black' : 'hidden'} flex-col gap-5 text-sm md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#e25b38]">{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/#contact" className="hidden items-center gap-2 text-sm md:inline-flex">Let&apos;s talk <ArrowUpRight size={16} /></Link>
          <ThemeToggle />
          <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
    </header>
  )
}
