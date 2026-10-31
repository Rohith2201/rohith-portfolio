import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = { title: 'Terms & Conditions — Rohith Juluru', description: 'Terms and conditions for freelance work with Rohith Juluru.' }

export default function TermsConditionsPage() {
  return <main className="min-h-screen bg-[#f7f7f2] px-6 py-10 text-[#17221d] lg:px-10"><div className="mx-auto max-w-3xl"><Breadcrumbs current="Terms & conditions" /><article className="py-24"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">/ Legal</p><h1 className="mt-5 text-6xl tracking-[-.07em]">Terms &<br /><em className="font-serif font-normal">conditions.</em></h1><p className="mt-8 text-sm text-[#17221d]/55">Last updated October 31, 2026</p><div className="mt-16 flex flex-col gap-10 text-lg leading-8 text-[#17221d]/75"><p>Freelance projects are scoped and agreed in writing before work begins. A proposal or statement of work outlines deliverables, timelines, fees, payment milestones, and what each party is responsible for.</p><p>Work begins after the agreed deposit or first milestone payment. Additional requests outside the agreed scope may change the timeline and fee. Both parties agree to communicate promptly and treat confidential information with care.</p><p>Unless agreed otherwise, the client receives rights to final, paid-for deliverables. Rohith may show completed work in a portfolio unless the project is confidential. These terms are a starting point and do not replace a signed project agreement.</p></div></article></div></main>
}
