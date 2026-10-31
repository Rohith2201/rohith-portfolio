import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/content'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#17221d]">
      <header className="border-b border-[#17221d]/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="/" className="font-mono text-sm font-semibold tracking-tight">rohith<span className="text-[#e25b38]">.</span>xyz</a>
          <a href="/" className="inline-flex items-center gap-2 text-sm hover:text-[#e25b38]"><ArrowLeft size={16} /> Back home</a>
        </div>
      </header>
      <article>
        <header className="mx-auto max-w-5xl px-6 pb-16 pt-24 lg:px-10 lg:pb-20 lg:pt-32">
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.16em] text-[#e25b38]"><span>{post.category}</span><span className="text-[#17221d]/30">/</span><span className="text-[#17221d]/50">{post.date}</span><span className="inline-flex items-center gap-1 text-[#17221d]/50"><Clock size={13} /> {post.readTime}</span></div>
          <h1 className="mt-8 max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[.9] tracking-[-.075em]">{post.title}<span className="text-[#e25b38]">.</span></h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#17221d]/65">{post.excerpt}</p>
        </header>
        <div className="mx-auto max-w-7xl px-6 lg:px-10"><img src={post.cover} alt="" className="aspect-[2/1] w-full rounded-sm object-cover" /></div>
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[.35fr_.65fr] lg:px-10 lg:py-28"><aside className="font-mono text-xs uppercase tracking-[0.16em] text-[#e25b38]">/ The notes</aside><div className="flex flex-col gap-8 text-xl leading-9 text-[#17221d]/80 lg:text-2xl">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="mt-8 border-t border-[#17221d]/15 pt-8 text-sm leading-6 text-[#17221d]/60"><a href="https://github.com/Rohith2201" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#17221d] hover:text-[#e25b38]">More from Rohith <ArrowUpRight size={15} /></a></div></div></div>
      </article>
    </main>
  )
}
