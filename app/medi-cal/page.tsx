import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Medi-Cal Enrollment',
  description:
    'Get help enrolling in Medi-Cal, California\'s Medicaid health care program. Free enrollment assistance — we help determine your eligibility and complete your application.',
}

const eligibleGroups = [
  { icon: '👨‍👩‍👧', label: 'Families with children' },
  { icon: '👴', label: 'Seniors (65+)' },
  { icon: '♿', label: 'Persons with disabilities' },
  { icon: '👶', label: 'Children ages 0–18 (regardless of immigration status)' },
  { icon: '🤰', label: 'Pregnant women' },
  { icon: '🏥', label: 'People with tuberculosis, breast cancer, or HIV/AIDS' },
  { icon: '👨‍👩‍👦', label: 'Foster care youth' },
  { icon: '💰', label: 'Low-income adults' },
]

const immigrantCategories = [
  'Lawful permanent residents (green card holders)',
  'Lawful temporary residents',
  'Refugees and asylees',
  'Other humanitarian immigrants, including those with Temporary Protected Status (TPS)',
  'Non-immigrant status holders (worker visas, student visas, and others)',
]

const healthPlans = [
  'LA Care', 'Molina Healthcare', 'IEHP (Inland Empire Health Plan)',
  'Anthem Blue Cross', 'United Healthcare', 'Scan Health Plan',
  'Aetna', 'Alignment Health',
]

export default function MediCalPage() {
  return (
    <>
      <HeroSection
        badge="Healthcare Enrollment"
        headline="Medi-Cal Enrollment"
        subheadline="Medi-Cal is California's free or low-cost public health insurance for qualifying individuals and families. Welcome to America helps you find out if you qualify and enroll — at no charge."
        primaryCta={{ label: 'Call to Find Out If You Qualify', href: 'tel:8449826374' }}
        secondaryCta={{ label: 'Text 562-472-5246', href: 'sms:5624725246' }}
        showPhone={false}
      />

      {/* Sub-page nav */}
      <nav className="bg-white border-b border-navy/10" aria-label="Medi-Cal sub-pages">
        <div className="section-wrapper py-3 flex flex-wrap gap-2">
          {[
            { href: '/medi-cal', label: 'Medi-Cal Overview' },
            { href: '/medi-cal/medicare', label: 'Medicare' },
            { href: '/medi-cal/covered-ca', label: 'Covered California' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-body font-semibold px-4 py-1.5 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── What is Medi-Cal ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="mc-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 id="mc-heading" className="section-title mb-6">
            What is Medi-Cal?
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            <p>
              Medi-Cal is California&apos;s Medicaid health care program. It provides public health
              insurance coverage for low-income individuals and families — helping Californians
              access doctor visits, hospital care, emergency services, prescriptions, mental
              health services, and preventive care.
            </p>
            <p>
              Medi-Cal is financed equally by the state of California and the federal
              government. For most enrollees, there is little to no cost — no monthly
              premiums, no deductibles, and little or no co-pays.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who qualifies ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-navy/5" aria-labelledby="qualify-heading">
        <div className="section-wrapper">
          <div className="max-w-4xl mx-auto">
            <h2 id="qualify-heading" className="section-title text-center mb-10">
              Who Qualifies for Medi-Cal?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {eligibleGroups.map((group) => (
                <div
                  key={group.label}
                  className="bg-white rounded-xl p-4 border border-navy/10 text-center shadow-sm"
                >
                  <div className="text-3xl mb-2" aria-hidden="true">{group.icon}</div>
                  <p className="text-ink/75 text-sm leading-snug">{group.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Immigrants & Medi-Cal ─────────────────────────────────────────── */}
      <section className="py-16" aria-labelledby="immigrants-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 id="immigrants-heading" className="section-title mb-6">
            Immigrants and Medi-Cal
          </h2>
          <p className="text-ink/75 leading-relaxed mb-6">
            Many immigrants qualify for Medi-Cal. California has expanded eligibility to
            include most immigrant categories. The following groups are generally eligible:
          </p>
          <ul className="space-y-3">
            {immigrantCategories.map((cat, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage shrink-0 mt-1" aria-hidden="true">✓</span>
                <span className="text-ink/80 leading-relaxed">{cat}</span>
              </li>
            ))}
          </ul>

          {/* Children callout */}
          <div className="mt-8 bg-terracotta/10 border-l-4 border-terracotta rounded-r-xl p-5">
            <p className="font-body font-semibold text-terracotta mb-1">
              All children qualify
            </p>
            <p className="text-ink/75 text-sm leading-relaxed">
              All children ages 0–18 qualify for Medi-Cal regardless of immigration status.
              If your child does not have health coverage, call us today.
            </p>
          </div>
        </div>
      </section>

      {/* ── Health plans we enroll ──────────────────────────────────────── */}
      <section className="py-16 bg-navy/5" aria-labelledby="plans-heading">
        <div className="section-wrapper max-w-4xl mx-auto">
          <h2 id="plans-heading" className="section-title text-center mb-4">
            Health Plans We Enroll
          </h2>
          <p className="text-center text-ink/60 mb-8">
            We help enroll you into the right managed care plan for your county.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {healthPlans.map((plan) => (
              <span
                key={plan}
                className="bg-white border border-navy/15 text-navy font-body font-semibold text-sm px-4 py-2 rounded-full shadow-sm"
              >
                {plan}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related programs ─────────────────────────────────────────────── */}
      <section className="py-14" aria-labelledby="related-heading">
        <div className="section-wrapper">
          <h2 id="related-heading" className="section-title text-center mb-8">
            Related Healthcare Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link
              href="/medi-cal/medicare"
              className="card hover:border-navy/30 group flex items-start gap-4"
            >
              <span className="text-3xl" aria-hidden="true">🏥</span>
              <div>
                <h3 className="font-display text-xl text-navy font-semibold mb-1 group-hover:text-terracotta transition-colors">
                  Medicare
                </h3>
                <p className="text-ink/65 text-sm leading-relaxed">
                  Federal health insurance for people 65+ and those with certain disabilities.
                </p>
              </div>
            </Link>
            <Link
              href="/medi-cal/covered-ca"
              className="card hover:border-navy/30 group flex items-start gap-4"
            >
              <span className="text-3xl" aria-hidden="true">📋</span>
              <div>
                <h3 className="font-display text-xl text-navy font-semibold mb-1 group-hover:text-terracotta transition-colors">
                  Covered California
                </h3>
                <p className="text-ink/65 text-sm leading-relaxed">
                  Brand-name health insurance through California&apos;s ACA marketplace, with
                  financial assistance available.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Find Out If You Qualify for Medi-Cal"
        subtext="Call or text us today. Our team will review your situation and help you enroll — at no cost to you."
        variant="sage"
      />
    </>
  )
}
