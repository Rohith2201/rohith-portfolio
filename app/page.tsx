'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  X,
} from 'lucide-react'

const works = [
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
    accent: 'bg-[#f0d8c9]',
  },
  {
    number: '03',
    title: 'Atlas Notes',
    type: 'Open source / 2023',
    description: 'An opinionated, local-first writing tool for people who think in connections.',
    tags: ['TypeScript', 'React', 'Open source'],
    accent: 'bg-[#d9d7e8]',
  },
]

const posts = [
  { date: '06.14.24', title: 'The quiet power of building in public', category: 'Notes' },
  { date: '04.02.24', title: 'What I learned shipping my first AI product', category: 'Building' },
  { date: '01.18.24', title: 'A practical guide to better interfaces', category: 'Design' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f2] text-[#17221d]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#17221d]/10 bg-[#f7f7f2]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="font-mono text-sm font-semibold tracking-tight">rohith<span className="text-[#e25b38]">.</span>xyz</a>
          <nav className={`${menuOpen ? 'absolute left-0 right-0 top-20 flex border-b border-[#17221d]/10 bg-[#f7f7f2] p-6' : 'hidden'} flex-col gap-5 text-sm md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
            {['About', 'Work', 'Writing', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#e25b38]">{item}</a>)}
          </nav>
          <a href="#contact" className="hidden items-center gap-2 text-sm md:flex">Let&apos;s talk <ArrowUpRight size={16} /></a>
          <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-40 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-10 lg:pb-32 lg:pt-52">
        <div>
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]"><span className="size-2 rounded-full bg-[#e25b38]" /> Available for select projects</div>
          <h1 className="max-w-4xl text-[clamp(3.5rem,9vw,8.8rem)] font-medium leading-[.88] tracking-[-.075em]">Building<br /><em className="font-serif font-normal">useful</em> things<br />for curious people<span className="text-[#e25b38]">.</span></h1>
        </div>
        <div className="max-w-sm pb-2 lg:justify-self-end">
          <p className="text-xl leading-8 text-[#17221d]/70">Hi, I&apos;m Rohith — a software & ML developer based in India. I care about the space where thoughtful design meets useful technology.</p>
          <div className="mt-8 flex items-center gap-5"><a href="/works" className="inline-flex items-center gap-2 border-b border-[#17221d] pb-1 text-sm font-medium">See my work <ArrowUpRight size={15} /></a><span className="font-mono text-xs text-[#17221d]/50">01 — 04</span></div>
        </div>
      </section>

      <section id="about" className="border-y border-[#17221d]/10 bg-[#e6eee9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">/ About me</p></div><div><p className="max-w-3xl text-3xl leading-tight tracking-[-.03em] lg:text-5xl">I like making complex things feel simple. From an idea to a working product, I bring curiosity, care, and a little bit of code.</p><div className="mt-12 grid max-w-2xl grid-cols-2 gap-y-8 border-t border-[#17221d]/15 pt-6 text-sm sm:grid-cols-4"><div><p className="font-mono text-2xl">04+</p><p className="mt-1 text-[#17221d]/60">years building</p></div><div><p className="font-mono text-2xl">18</p><p className="mt-1 text-[#17221d]/60">projects shipped</p></div><div><p className="font-mono text-2xl">03</p><p className="mt-1 text-[#17221d]/60">open source</p></div><div><p className="font-mono text-2xl">∞</p><p className="mt-1 text-[#17221d]/60">things to learn</p></div></div></div></div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="mb-14 flex items-end justify-between"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">/ Selected work</p><a href="/works"><h2 className="text-5xl tracking-[-.06em] lg:text-7xl">A few things<br /><em className="font-serif font-normal">I&apos;ve made.</em></h2></a></div><span className="hidden font-mono text-xs text-[#17221d]/50 sm:block">(03 projects)</span></div><div className="grid gap-5">{works.map((work) => <article key={work.number} className="group grid gap-8 border-t border-[#17221d]/20 py-8 md:grid-cols-[.12fr_.38fr_.5fr] md:items-center"><span className="font-mono text-sm text-[#e25b38]">{work.number}</span><div><h3 className="text-3xl tracking-[-.04em] transition-transform group-hover:translate-x-2">{work.title} <ArrowUpRight className="inline-block opacity-0 transition-opacity group-hover:opacity-100" size={25} /></h3><p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#17221d]/50">{work.type}</p></div><div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center"><p className="max-w-md text-[#17221d]/65">{work.description}</p><div className={`flex h-20 w-28 items-center justify-center rounded-full ${work.accent} transition-transform group-hover:rotate-6`}><Sparkles size={25} strokeWidth={1.3} /></div></div><div className="md:col-start-2 flex flex-wrap gap-2">{work.tags.map((tag) => <span key={tag} className="rounded-full border border-[#17221d]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider">{tag}</span>)}</div></article>)}</div></section>

      <section className="border-y border-[#17221d]/10 bg-[#17221d] text-[#f7f7f2]"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e98667]">/ Experience</p></div><div className="grid gap-10"><div className="grid gap-2 border-b border-[#f7f7f2]/20 pb-8 sm:grid-cols-[.3fr_1fr_auto]"><p className="font-mono text-xs text-[#f7f7f2]/50">2022 — now</p><div><h3 className="text-2xl">Independent developer</h3><p className="mt-2 text-[#f7f7f2]/60">Building digital products with ambitious teams and curious founders.</p></div><span className="font-mono text-xs text-[#e98667]">01</span></div><div className="grid gap-2 border-b border-[#f7f7f2]/20 pb-8 sm:grid-cols-[.3fr_1fr_auto]"><p className="font-mono text-xs text-[#f7f7f2]/50">2021 — 22</p><div><h3 className="text-2xl">Software engineer</h3><p className="mt-2 text-[#f7f7f2]/60">Worked across frontend, ML systems, and the spaces between.</p></div><span className="font-mono text-xs text-[#e98667]">02</span></div></div></div></section>

      <section id="writing" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">/ From the journal</p><h2 className="mt-5 text-5xl tracking-[-.06em] lg:text-6xl">Thinking<br /><em className="font-serif font-normal">out loud.</em></h2></div><div>{posts.map((post) => <a href={`/blogs/${post.title === 'The quiet power of building in public' ? 'building-in-public' : post.title === 'What I learned shipping my first AI product' ? 'shipping-ai-products' : 'better-interfaces'}`} key={post.title} className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-t border-[#17221d]/20 py-6"><span className="font-mono text-xs text-[#17221d]/45">{post.date}</span><div><span className="font-mono text-[10px] uppercase tracking-widest text-[#e25b38]">{post.category}</span><h3 className="mt-2 text-xl tracking-[-.02em] transition-colors group-hover:text-[#e25b38]">{post.title}</h3></div><ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>)}</div></div></section>

      <section id="contact" className="border-t border-[#17221d]/10 bg-[#f0d8c9]"><div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-32"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">/ Get in touch</p><h2 className="mt-6 text-6xl tracking-[-.07em] lg:text-8xl">Have a good<br /><em className="font-serif font-normal">idea?</em></h2><div className="mt-12 flex flex-col gap-3 text-sm"><a href="mailto:hello@rohith.xyz" className="flex items-center gap-3 hover:text-[#e25b38]"><Mail size={16} /> hello@rohith.xyz</a><span className="flex items-center gap-3"><MapPin size={16} /> Andhra Pradesh, India</span></div></div><div>{sent ? <div className="flex min-h-80 flex-col items-center justify-center border-t border-[#17221d]/20 text-center"><div className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#17221d] text-[#f7f7f2]"><Check size={22} /></div><h3 className="text-3xl tracking-[-.04em]">Message received.</h3><p className="mt-2 text-[#17221d]/60">Thanks for reaching out — I&apos;ll be in touch soon.</p></div> : <form onSubmit={handleSubmit} className="flex flex-col gap-7 border-t border-[#17221d]/20 pt-7"><label className="flex flex-col gap-2 text-sm"><span className="font-mono text-xs uppercase tracking-wider text-[#17221d]/60">Your name</span><input required name="name" className="border-b border-[#17221d]/25 bg-transparent py-3 outline-none placeholder:text-[#17221d]/35 focus:border-[#e25b38]" placeholder="Jane Smith" /></label><label className="flex flex-col gap-2 text-sm"><span className="font-mono text-xs uppercase tracking-wider text-[#17221d]/60">Email address</span><input required type="email" name="email" className="border-b border-[#17221d]/25 bg-transparent py-3 outline-none placeholder:text-[#17221d]/35 focus:border-[#e25b38]" placeholder="jane@company.com" /></label><label className="flex flex-col gap-2 text-sm"><span className="font-mono text-xs uppercase tracking-wider text-[#17221d]/60">Tell me a little about it</span><textarea required name="message" rows={3} className="resize-none border-b border-[#17221d]/25 bg-transparent py-3 outline-none placeholder:text-[#17221d]/35 focus:border-[#e25b38]" placeholder="What are you working on?" /></label><button type="submit" className="mt-2 flex w-fit items-center gap-3 bg-[#17221d] px-6 py-3 text-sm text-[#f7f7f2] transition-transform hover:-translate-y-1">Send message <Send size={16} /></button></form>}</div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-10"><p className="font-mono text-xs text-[#17221d]/50">© 2024 Rohith Juluru</p><div className="flex items-center gap-5"><a href="#top" className="hover:text-[#e25b38]">Back to top ↑</a><a href="https://github.com/Rohith2201" target="_blank" rel="noreferrer" className="font-mono text-xs hover:text-[#e25b38]">GitHub</a><a href="https://www.linkedin.com/in/juluru-rohith" target="_blank" rel="noreferrer" className="font-mono text-xs hover:text-[#e25b38]">LinkedIn</a></div></footer>
    </main>
  )
}
