import type { Metadata } from 'next'
import Link from 'next/link'
import PageCTAButtons from '@/components/PageCTAButtons'

export const metadata: Metadata = {
  title: 'Covered California — Brand-Name Health Insurance',
  description:
    'Covered California is a free service that connects Californians with brand-name health insurance. Welcome to America helps you find the right plan and enroll.',
}

export default function CoveredCAPage() {
  return (
    <>
      <section className="bg-navy py-14">
        <div className="section-wrapper">
          <Link href="/medi-cal" className="text-white/50 text-sm font-body hover:text-white/80 transition-colors mb-4 inline-flex items-center gap-1">
            ← Medi-Cal
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold">Covered California</h1>
          <p className="text-white/70 font-body mt-3 text-lg max-w-xl">
            Brand-name health insurance plans through California's official marketplace.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="section-wrapper max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="section-title mb-6">What is Covered California?</h2>
              <div className="space-y-4 font-body text-base text-ink/80 leading-relaxed">
                <p>
                  Covered California is a free service that connects Californians with 
                  brand-name health insurance under the Patient Protection and Affordable Care Act.
                </p>
                <p>
                  All plans include preventive care, doctor visits, emergency care and more. 
                  Depending on your income, you may qualify for financial assistance to help 
                  cover your monthly premium.
                </p>
                <p>
                  Welcome to America's Community Health Workers help you compare plans, 
                  check if you qualify for subsidies, and complete your enrollment — 
                  all at no cost to you.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="font-body font-bold text-navy text-sm mb-2">All Plans Include</h3>
                <ul className="space-y-1.5">
                  {['Preventive care', 'Doctor visits', 'Emergency care', 'Prescription drugs', 'Mental health services', 'Pediatric care'].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-body text-xs text-ink/70">
                      <span className="text-sage">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card bg-sage/10 border-sage/20">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-body font-bold text-navy text-sm mb-2">Financial Assistance Available</h3>
                <p className="font-body text-xs text-ink/70 leading-relaxed">
                  Many Californians qualify for subsidies that significantly reduce their monthly 
                  premium. Our staff can check your eligibility instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-terracotta rounded-xl p-8 text-center">
            <h3 className="font-display text-2xl text-white font-bold mb-3">
              Find your Covered California plan
            </h3>
            <p className="text-white/80 font-body mb-6">
              We compare plans for you and walk you through enrollment — for free. 
              <span className="block text-white/60 text-sm mt-1 italic">Le ayudamos a comparar planes y completar su inscripción — gratis.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8332491563" className="btn-outline-white">🏥 CHW Line: 833-249-1563</a>
              <a href="tel:8449826374" className="btn-outline-white">📞 Main: 844-982-6374</a>
            </div>
          </div>
        </div>
      </section>

      <PageCTAButtons />
    </>
  )
}
