import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/content'
import { SiteCta } from '@/components/site-cta'

export const metadata = {
  title: 'Writing — Rohith Juluru',
  description: 'Notes on building useful products, AI, design, and the web.',
}

export default function BlogsPage() {
  return (
    <main className="site-shell min-h-screen bg-[#f7f7f2] text-[#17221d]">
      <header className="border-b border-[#17221d]/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="/" className="font-mono text-sm font-semibold tracking-tight">rohith<span className="text-[#e25b38]">.</span>xyz</a>
          <a href="/" className="inline-flex items-center gap-2 text-sm hover:text-[#e25b38]"><ArrowLeft size={16} /> Back home</a>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">/ The journal</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <h1 className="text-[clamp(4rem,10vw,9rem)] font-medium leading-[.86] tracking-[-.08em]">Thinking<br /><em className="font-serif font-normal">out loud.</em><span className="text-[#e25b38]">.</span></h1>
          <p className="max-w-md text-xl leading-8 text-[#17221d]/65">Notes from the process of making things: product lessons, design details, and ideas worth keeping around.</p>
        </div>
      </section>
      <section className="border-t border-[#17221d]/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {blogPosts.map((post, index) => (
            <a href={`/blogs/${post.slug}`} key={post.slug} className="group grid gap-8 border-b border-[#17221d]/15 py-10 md:grid-cols-[.12fr_.35fr_.53fr] md:items-center lg:py-14">
              <span className="font-mono text-sm text-[#e25b38]">0{index + 1}</span>
              <div>
          
                <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#e25b38]"><div className="flex flex-wrap items-center gap-3"><span>{post.category}</span><span className="text-[#17221d]/30">/</span><span className="text-[#17221d]/45">{post.date}</span></div><span className="inline-flex shrink-0 items-center gap-1 text-[#17221d]/45"><Clock size={12} /> {post.readTime}</span></div>
                <h2 className="mt-4 text-3xl tracking-[-.045em] transition-colors group-hover:text-[#e25b38] lg:text-4xl">{post.title}</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
                <p className="max-w-md text-[#17221d]/65">{post.excerpt}</p>
                <div className="flex size-16 items-center justify-center rounded-full border border-[#17221d]/20 transition-all group-hover:-translate-y-1 group-hover:border-[#e25b38] group-hover:text-[#e25b38]"><ArrowUpRight size={20} /></div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <SiteCta />
      <footer className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm lg:px-10"><p className="font-mono text-xs text-[#17221d]/50">© 2024 Rohith Juluru</p><a href="https://github.com/Rohith2201" target="_blank" rel="noreferrer" className="font-mono text-xs hover:text-[#e25b38]">GitHub ↗</a></footer>
    </main>
  )
}
