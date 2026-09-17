import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Covered California',
  description:
    'Covered California help from Welcome to America. Call our Community Health Worker line at 833-249-1563.',
}

export default function CoveredCAPage() {
  return (
    <>
      <section className="bg-navy-800 py-20 sm:py-24">
        <div className="section-wrapper">
          <Link href="/medi-cal" className="text-white/50 text-sm font-body hover:text-white/80 transition-colors mb-4 inline-flex items-center gap-1">
            <ArrowLeft className="size-4" aria-hidden="true" /> Medi-Cal
          </Link>
          <h1 className="font-display text-5xl sm:text-6xl text-white font-medium leading-[1.05] tracking-tight">Covered California</h1>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="section-wrapper max-w-3xl">
          <div className="bg-navy-800 rounded-2xl p-10 text-center">
            <h2 className="font-display text-3xl text-white font-medium mb-2">Call our Community Health Worker line.</h2>
            <p className="text-white/60 font-body text-sm italic mb-6">Llame a nuestra línea de promotores de salud.</p>
            <a href="tel:8332491563" className="btn-primary">CHW Line: 833-249-1563</a>
          </div>
        </div>
      </section>
    </>
  )
}
