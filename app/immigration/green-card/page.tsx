import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Green Card (Lawful Permanent Residence)',
  description:
    'Get help applying for a green card (lawful permanent residence). Our DOJ-authorized representatives assist with family-based, employment-based, and other immigration petitions.',
}

const greenCardCategories = [
  {
    title: 'Family-based green card',
    description:
      'U.S. citizens and lawful permanent residents can petition for certain family members to obtain permanent residence. Immediate relatives of U.S. citizens (spouses, unmarried children under 21, and parents) receive priority.',
  },
  {
    title: 'Employment-based green card',
    description:
      'Individuals with qualifying job offers, extraordinary abilities, advanced degrees, or who are priority workers may be eligible for an employment-based green card through their employer or through self-petition.',
  },
  {
    title: 'Refugee or asylee status',
    description:
      'Refugees and asylees who have been in the U.S. for at least one year may be eligible to adjust their status to lawful permanent residence.',
  },
  {
    title: 'Special immigrant categories',
    description:
      'Certain individuals may qualify under special immigrant categories, including religious workers, certain broadcasters, employees of international organizations, and others.',
  },
]

const generalSteps = [
  'Determine eligibility and correct green card category',
  'A petition is filed (by family member, employer, or yourself)',
  'Wait for visa availability (varies by category and country of birth)',
  'File for adjustment of status (Form I-485) if in the U.S., or apply via consular processing abroad',
  'Attend biometrics appointment',
  'Attend an interview with USCIS (if required)',
  'Receive decision and, if approved, your green card',
]

export default function GreenCardPage() {
  return (
    <>
      <HeroSection
        badge="Immigration Legal Services"
        headline="A permanent home starts with the right help."
        subheadline="A green card gives you the right to live and work permanently in the United States. Our DOJ-authorized representatives can help you understand your options and guide you through the application process."
        primaryCta={{ label: 'Call 844-982-6374', href: 'tel:8449826374' }}
        secondaryCta={{ label: 'Text 562-472-5246', href: 'sms:5624725246' }}
        showPhone={false}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-navy/10">
        <div className="section-wrapper py-3 flex items-center gap-2 text-sm text-ink/60">
          <Link href="/immigration" className="hover:text-navy transition-colors">
            Immigration
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-navy font-semibold">Green Card</span>
        </div>
      </div>

      {/* ── What is a green card ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="gc-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 id="gc-heading" className="section-title mb-6">
            What is a green card?
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            <p>
              A green card (officially called a Permanent Resident Card, Form I-551) gives
              you official immigration status as a lawful permanent resident (LPR) of the
              United States. With a green card, you can live and work permanently anywhere
              in the U.S.
            </p>
            <p>
              As a permanent resident, you are protected by all U.S. laws — federal, state,
              and local. After a qualifying period, most green card holders may apply for
              U.S. citizenship through naturalization.
            </p>
            <p>
              Welcome to America&apos;s DOJ-authorized representatives can evaluate your
              situation, help you determine which category applies to you, and assist with
              preparing and filing your application.
            </p>
          </div>
        </div>
      </section>

      {/* ── Categories ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-navy/5" aria-labelledby="categories-heading">
        <div className="section-wrapper">
          <h2 id="categories-heading" className="section-title mb-12 max-w-4xl mx-auto">
            Four paths to a green card.
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {greenCardCategories.map((cat, i) => (
              <div key={cat.title} className="border-t border-ink/15 pt-5 flex gap-6">
                <span className="font-display text-terracotta-700 text-lg w-8 shrink-0" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-navy font-medium mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── General process steps ────────────────────────────────────────── */}
      <section className="py-16" aria-labelledby="steps-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 id="steps-heading" className="section-title mb-6">
            How the process works.
          </h2>
          <p className="text-ink/70 leading-relaxed mb-8">
            Every green card application is different depending on your category, current
            immigration status, and country of birth. The steps below give a general overview.
            Our team will walk you through the exact process for your situation.
          </p>
          <ol className="space-y-4">
            {generalSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="shrink-0 w-8 h-8 rounded-full bg-terracotta text-ink text-sm font-bold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-ink/80 leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTABanner
        heading="Questions about your application?"
        subtext="Our DOJ-authorized representatives are here to help. Call or text us today — services in English, Spanish, and Arabic."
      />
    </>
  )
}
