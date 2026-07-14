import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Immigration Fee Waiver (Form I-912)',
  description:
    'Learn about fee waivers for USCIS immigration applications. We can help you determine eligibility and prepare your fee waiver request at no cost.',
}

const qualifyingConditions = [
  {
    title: 'Means-Tested Benefits',
    description:
      'You currently receive a means-tested benefit such as Medi-Cal/Medicaid, Supplemental Security Income (SSI), SNAP (food stamps), TANF, or other federal or state benefit programs based on income.',
  },
  {
    title: 'Household Income at or Below 150% of the Federal Poverty Guidelines',
    description:
      'Your household income is at or below 150% of the federal poverty guidelines for your household size. We can help you calculate this and gather the necessary documentation.',
  },
  {
    title: 'Financial Hardship',
    description:
      'You are experiencing a financial hardship that prevents you from paying the filing fee. You will need to explain the hardship and provide supporting documentation.',
  },
]

const commonForms = [
  { form: 'N-400', description: 'Application for Naturalization (Citizenship)' },
  { form: 'I-90', description: 'Application to Replace Permanent Resident Card' },
  { form: 'I-485', description: 'Application to Register Permanent Residence' },
  { form: 'I-765', description: 'Application for Employment Authorization' },
  { form: 'I-131', description: 'Application for Travel Document' },
  { form: 'N-600', description: 'Application for Certificate of Citizenship' },
]

export default function FeeWaiverPage() {
  return (
    <>
      <HeroSection
        badge="Immigration Legal Services"
        headline="Cost shouldn't decide your future."
        subheadline="USCIS filing fees can be a barrier. If you qualify, you may be able to have fees waived for many immigration applications. Our team can help you determine eligibility and prepare your request."
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
          <span className="text-navy font-semibold">Fee Waiver</span>
        </div>
      </div>

      {/* ── What is a fee waiver ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="fw-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 id="fw-heading" className="section-title mb-6">
            What is a fee waiver?
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            <p>
              A fee waiver (USCIS Form I-912) is a request to have the filing fee for a USCIS
              application reduced or eliminated. USCIS charges fees for most immigration
              applications — fees that can sometimes reach hundreds of dollars.
            </p>
            <p>
              If you qualify for a fee waiver, you can submit your application without paying
              the filing fee. This makes the immigration process more accessible for low-income
              individuals and families.
            </p>
            <p>
              Welcome to America can help you determine if you qualify, complete Form I-912,
              and gather the documentation needed to support your request.
            </p>
          </div>

          {/* Highlight box */}
          <div className="mt-8 bg-sage/10 border-l-4 border-sage rounded-r-xl p-5">
            <p className="font-body font-semibold text-sage text-sm uppercase tracking-wide mb-2">
              Important
            </p>
            <p className="text-ink/75 text-sm leading-relaxed">
              Not all USCIS forms are fee waiver eligible. Some forms, such as immigrant visa
              petitions, are not eligible. Call us and we will review your specific situation
              and let you know if a fee waiver is possible.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who qualifies ────────────────────────────────────────────────── */}
      <section className="py-16 bg-navy/5" aria-labelledby="qualify-heading">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 id="qualify-heading" className="section-title mb-8">
              Three ways to qualify.
            </h2>
            <div className="space-y-5">
              {qualifyingConditions.map((cond, i) => (
                <div key={i} className="card flex gap-4 items-start">
                  <span
                    className="shrink-0 w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-body font-semibold text-navy mb-1">{cond.title}</h3>
                    <p className="text-ink/70 text-sm leading-relaxed">{cond.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Forms eligible ────────────────────────────────────────────────── */}
      <section className="py-16" aria-labelledby="forms-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 id="forms-heading" className="section-title mb-6">
            Forms that may have fees waived.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {commonForms.map((item) => (
              <div
                key={item.form}
                className="flex items-center gap-3 bg-white border border-navy/10 rounded-lg px-4 py-3"
              >
                <span className="font-body font-bold text-terracotta text-sm shrink-0 w-14">
                  {item.form}
                </span>
                <span className="text-ink/75 text-sm">{item.description}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink/55 mt-4">
            * Eligibility depends on USCIS policy and your individual circumstances. Our team
            will confirm eligibility for your specific application.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Find out if you qualify."
        subtext="Call or text us today. Our team will walk you through the fee waiver process at no cost."
      />
    </>
  )
}
