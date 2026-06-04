import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Medicare Enrollment',
  description:
    'Get help enrolling in Medicare, the federal health insurance program for people 65 and older and those with certain disabilities. Free enrollment assistance.',
}

const medicareParts = [
  {
    part: 'Part A',
    name: 'Hospital Insurance',
    color: 'border-navy',
    icon: '🏥',
    description:
      'Covers inpatient hospital stays, skilled nursing facility care, hospice care, and some home health services. Most people do not pay a premium for Part A.',
  },
  {
    part: 'Part B',
    name: 'Medical Insurance',
    color: 'border-terracotta',
    icon: '🩺',
    description:
      'Covers certain doctors\' services, outpatient care, medical supplies, and preventive services. Part B has a monthly premium.',
  },
  {
    part: 'Part C',
    name: 'Medicare Advantage',
    color: 'border-sage',
    icon: '⭐',
    description:
      'An alternative to Original Medicare offered by private insurance companies approved by Medicare. Often includes prescription drug coverage and extra benefits like dental and vision.',
  },
  {
    part: 'Part D',
    name: 'Prescription Drug Coverage',
    color: 'border-terracotta',
    icon: '💊',
    description:
      'Adds prescription drug coverage to Original Medicare. Offered by private insurers approved by Medicare. Premiums vary by plan.',
  },
]

const enrollmentPeriods = [
  {
    title: 'Initial Enrollment Period',
    description:
      'A 7-month window around your 65th birthday — 3 months before, the month of, and 3 months after you turn 65.',
  },
  {
    title: 'General Enrollment Period',
    description:
      'January 1 – March 31 each year, if you missed your Initial Enrollment Period. Coverage begins July 1.',
  },
  {
    title: 'Special Enrollment Period',
    description:
      'If you or your spouse are still working and covered by employer health insurance, you may qualify for a Special Enrollment Period.',
  },
]

export default function MedicarePage() {
  return (
    <>
      <HeroSection
        badge="Healthcare Enrollment"
        headline="Medicare Enrollment"
        subheadline="Medicare is the federal health insurance program for people 65 and older, and for people under 65 with certain disabilities. Welcome to America helps you understand your options and enroll — at no charge."
        primaryCta={{ label: 'Call 844-982-6374', href: 'tel:8449826374' }}
        secondaryCta={{ label: 'Text 562-472-5246', href: 'sms:5624725246' }}
        showPhone={false}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-navy/10">
        <div className="section-wrapper py-3 flex items-center gap-2 text-sm text-ink/60">
          <Link href="/medi-cal" className="hover:text-navy transition-colors">
            Medi-Cal
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-navy font-semibold">Medicare</span>
        </div>
      </div>

      {/* ── What is Medicare ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="mc-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 id="mc-heading" className="section-title mb-6">
            What is Medicare?
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            <p>
              Medicare is the federal health insurance program primarily for people 65 years
              old or older. People under 65 with certain disabilities, permanent kidney
              failure (End-Stage Renal Disease), or ALS (Lou Gehrig&apos;s Disease) may also
              qualify.
            </p>
            <p>
              Medicare is managed by the Centers for Medicare &amp; Medicaid Services (CMS).
              It is divided into different &quot;parts&quot; that cover different types of healthcare
              services. Understanding these parts is key to choosing the right coverage.
            </p>
            <p>
              Welcome to America can help you understand your options, compare plans in your
              area, and complete your enrollment — in English, Spanish, or Arabic.
            </p>
          </div>
        </div>
      </section>

      {/* ── Medicare Parts ────────────────────────────────────────────────── */}
      <section className="py-16 bg-navy/5" aria-labelledby="parts-heading">
        <div className="section-wrapper">
          <h2 id="parts-heading" className="section-title text-center mb-10">
            Understanding Medicare Parts A, B, C &amp; D
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {medicareParts.map((part) => (
              <div key={part.part} className={`card border-l-4 ${part.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{part.icon}</span>
                  <div>
                    <span className="font-body font-bold text-navy text-sm">
                      Medicare {part.part}
                    </span>
                    <h3 className="font-display text-lg text-navy font-semibold">
                      {part.name}
                    </h3>
                  </div>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">{part.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enrollment Periods ────────────────────────────────────────────── */}
      <section className="py-16" aria-labelledby="enrollment-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 id="enrollment-heading" className="section-title mb-8">
            When to Enroll
          </h2>
          <p className="text-ink/70 leading-relaxed mb-8">
            Timing matters with Medicare. Missing your enrollment window can result in
            late penalties and gaps in coverage. Our team can help you enroll on time.
          </p>
          <div className="space-y-4">
            {enrollmentPeriods.map((period, i) => (
              <div key={i} className="card flex gap-4 items-start">
                <span
                  className="shrink-0 w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-body font-semibold text-navy mb-1">{period.title}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{period.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual Eligibility callout ─────────────────────────────────────── */}
      <section className="py-10" aria-label="Dual eligibility">
        <div className="section-wrapper max-w-3xl mx-auto">
          <div className="bg-sage/10 border border-sage/25 rounded-xl p-6">
            <h3 className="font-display text-xl text-navy font-semibold mb-3">
              Have Both Medi-Cal and Medicare?
            </h3>
            <p className="text-ink/75 text-sm leading-relaxed">
              If you qualify for both Medi-Cal and Medicare, you are &quot;dual eligible.&quot; This
              can significantly reduce your out-of-pocket costs — Medi-Cal may help pay for
              your Medicare premiums, deductibles, and co-pays. Call us to learn more.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Enroll in Medicare?"
        subtext="Call or text us today. Our team will help you choose the right plan and enroll on time — in English, Spanish, or Arabic."
        variant="navy"
      />
    </>
  )
}
