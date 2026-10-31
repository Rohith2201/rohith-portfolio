import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/content'
import { SiteCta } from '@/components/site-cta'
import { Breadcrumbs } from '@/components/breadcrumbs'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  return { title: project ? `${project.title} — Rohith Juluru` : 'Work — Rohith Juluru', description: project?.description }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#17221d]">
      <header className="border-b border-[#17221d]/10"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"><a href="/" className="font-mono text-sm font-semibold tracking-tight">rohith<span className="text-[#e25b38]">.</span>xyz</a><a href="/works" className="inline-flex items-center gap-2 text-sm hover:text-[#e25b38]"><ArrowLeft size={16} /> All work</a></div></header>
      <article>
        <header className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-20 lg:pt-32"><Breadcrumbs current={project.title} /><div className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-[#e25b38]">{project.type} / {project.year}</div><h1 className="mt-8 max-w-5xl text-[clamp(4rem,11vw,10rem)] font-medium leading-[.82] tracking-[-.08em]">{project.title}<span className="text-[#e25b38]">.</span></h1><p className="mt-10 max-w-2xl text-xl leading-8 text-[#17221d]/65">{project.description}</p><div className="mt-8 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-[#17221d]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider">{tag}</span>)}</div></header>
        <figure className="mx-auto max-w-7xl px-6 lg:px-10"><img src={project.cover} alt={`${project.title} overview`} className="aspect-[2/1] w-full rounded-sm object-cover" /><figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-[#17221d]/50">{project.title} — overview</figcaption></figure>
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[.35fr_.65fr] lg:px-10 lg:py-28"><aside className="font-mono text-xs uppercase tracking-[0.16em] text-[#e25b38]">/ The project</aside><div className="flex flex-col gap-8 text-xl leading-9 text-[#17221d]/80 lg:text-2xl">{project.body.slice(0, 1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<figure className="py-4"><img src={project.inlineImage} alt={`${project.title} detail`} className="aspect-[1.5/1] w-full rounded-sm object-cover" /><figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-[#17221d]/50">{project.imageCaption}</figcaption></figure>{project.body.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a href="https://www.linkedin.com/in/juluru-rohith" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-base text-[#17221d] hover:text-[#e25b38]">Connect on LinkedIn <ArrowUpRight size={15} /></a></div></div>
      </article>
      <SiteCta />
    </main>
  )
}
