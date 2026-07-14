import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Covered California — Brand-Name Health Insurance',
  description:
    'Covered California is a free service that connects Californians with brand-name health insurance. Welcome to America helps you find the right plan and enroll.',
}

export default function CoveredCAPage() {
  return (
    <>
      <section className="bg-navy-800 py-20 sm:py-24">
        <div className="section-wrapper">
          <Link href="/medi-cal" className="text-white/50 text-sm font-body hover:text-white/80 transition-colors mb-4 inline-flex items-center gap-1">
            ← Medi-Cal
          </Link>
          <h1 className="font-display text-5xl sm:text-6xl text-white font-medium leading-[1.05] tracking-tight">Brand-name coverage, without the maze.</h1>
          <p className="text-white/70 font-body mt-3 text-lg max-w-xl">
            Covered California — brand-name health insurance plans through California's official marketplace.
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
                <h3 className="font-display text-xl text-navy font-medium mb-3">Every plan includes</h3>
                <ul className="space-y-1.5">
                  {['Preventive care', 'Doctor visits', 'Emergency care', 'Prescription drugs', 'Mental health services', 'Pediatric care'].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-body text-xs text-ink/70">
                      <span className="text-sage">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card bg-sage/10 border-sage/20">
                <h3 className="font-display text-xl text-navy font-medium mb-3">Financial assistance available</h3>
                <p className="font-body text-xs text-ink/70 leading-relaxed">
                  Many Californians qualify for subsidies that significantly reduce their monthly 
                  premium. Our staff can check your eligibility instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-navy-800 rounded-2xl p-10 text-center">
            <h3 className="font-display text-3xl text-white font-medium mb-3">
              Find your Covered California plan.
            </h3>
            <p className="text-white/80 font-body mb-6">
              We compare plans for you and walk you through enrollment — for free. 
              <span className="block text-white/60 text-sm mt-1 italic">Le ayudamos a comparar planes y completar su inscripción — gratis.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8332491563" className="btn-primary">CHW Line: 833-249-1563</a>
              <a href="tel:8449826374" className="btn-outline-white">Main: 844-982-6374</a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Here to support you." subtext="Call or text us today — or book an appointment by phone, Zoom, or in person." />
    </>
  )
}
