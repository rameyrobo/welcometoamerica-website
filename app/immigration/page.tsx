import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Immigration Legal Services',
  description:
    'DOJ-authorized immigration legal services including citizenship applications, green card assistance, fee waivers, and representation at DHS. Free and low-cost.',
}

const eligibilityRequirements = [
  'Be at least 18 years old when submitting the application',
  'Be a lawful permanent resident for at least 5 years (or 3 years if married to a U.S. Citizen)',
  'Have continuous residence in the U.S. for at least 5 years before filing',
  'Have been physically present in the U.S. for at least 30 months out of the 5 years before filing',
  'Have lived at least 3 months in a state or USCIS district having jurisdiction over your place of residence',
  'Be a person of good moral character for at least 5 years before filing',
  'Be able to read, write, and speak basic English (exemptions available)',
  'Have knowledge of U.S. history and government (civics)',
  'Be prepared to take the Oath of Allegiance to the United States',
]

const reasonsForCitizenship = [
  'Vote in federal, state, and local elections',
  'Serve on a jury',
  'Travel with a U.S. passport',
  'Bring family members to the United States',
  'Obtain citizenship for children born abroad under age 18',
  'Apply for federal government jobs',
  'Become an elected official',
  'Keep your residency permanently — never risk deportation',
  'Become eligible for federal grants and scholarships',
  'Obtain government benefits available only to citizens',
]

const citizenRights = [
  'Freedom of expression',
  'Freedom of worship',
  'Right to a fair trial by jury',
  'Right to vote in elections',
  'Right to apply for federal employment',
  'Right to run for elected office',
  'Freedom to pursue life, liberty, and happiness',
]

const citizenResponsibilities = [
  'Support and defend the Constitution',
  'Stay informed on issues affecting your community',
  'Participate in the democratic process',
  'Respect and obey all federal, state, and local laws',
  'Respect the rights, beliefs, and opinions of others',
  'Participate in your local community',
  'Pay income and other taxes honestly',
  'Serve on a jury when summoned',
  'Defend the country if needed',
]

export default function ImmigrationPage() {
  return (
    <>
      <HeroSection
        badge="DOJ Authorized · Immigration Legal Services"
        headline="Legal help you can trust, for a journey that matters."
        subheadline="Welcome to America is authorized by the Department of Justice to provide legal advice, assistance with immigration forms, and legal representation at the Department of Homeland Security (DHS)."
        primaryCta={{ label: 'Call 844-982-6374', href: 'tel:8449826374' }}
        secondaryCta={{ label: 'Text 562-472-5246', href: 'sms:5624725246' }}
        showPhone={false}
      />

      {/* ── Sub-service links ──────────────────────────────────────────────── */}
      <nav
        className="bg-white border-b border-navy/10 sticky top-[calc(var(--navbar-h,112px))] z-30"
        aria-label="Immigration sub-pages"
      >
        <div className="section-wrapper py-3 flex flex-wrap gap-2">
          {[
            { href: '/immigration', label: 'Overview' },
            { href: '/immigration/green-card', label: 'Green Card' },
            { href: '/immigration/fee-waiver', label: 'Fee Waiver' },
            { href: '/immigration/citizenship-classes', label: 'Citizenship Classes' },
            { href: '/immigration/clases-de-ciudadania', label: 'Clases de Ciudadanía' },
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

      {/* ── U.S. Citizenship eligibility ───────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="citizenship-heading">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow">Naturalization</span>
            <h2 id="citizenship-heading" className="section-title mb-4">
              Who can apply for U.S. citizenship?
            </h2>
            <p className="text-ink/70 leading-relaxed mb-8">
              To apply for U.S. citizenship through naturalization, you generally must meet the
              following requirements. Our DOJ-authorized representatives can review your specific
              situation and guide you through the process.
            </p>

            <ul className="space-y-3">
              {eligibilityRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-7 h-7 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-ink/80 leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Reasons for citizenship ────────────────────────────────────────── */}
      <section className="py-16 bg-navy/5" aria-labelledby="reasons-heading">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 id="reasons-heading" className="section-title mb-4">
              Why citizenship is worth it.
            </h2>
            <p className="text-ink/70 leading-relaxed mb-8">
              Citizenship provides lasting security and opens doors that permanent residency alone
              cannot. Here are some of the most important reasons to apply:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasonsForCitizenship.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-navy/10"
                >
                  <Check className="size-5 text-sage shrink-0" strokeWidth={3} aria-hidden="true" />
                  <span className="text-ink/80 text-sm leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Naturalization interview & test ──────────────────────────────── */}
      <section className="py-16" aria-labelledby="interview-heading">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 id="interview-heading" className="section-title mb-6">
              The interview and test, explained.
            </h2>
            <div className="space-y-5 text-ink/75 leading-relaxed">
              <p>
                As part of the naturalization process, USCIS will schedule you for a
                naturalization interview. During this interview, a USCIS officer will
                review your application and supporting documents.
              </p>
              <p>
                You will be tested on your ability to read, write, and speak basic English.
                You will also take a civics test covering U.S. history and government.
                The civics test consists of up to 10 questions from a list of 100 possible
                questions; you must answer at least 6 correctly to pass.
              </p>
              <p>
                Our team can help you prepare for the civics test and English language
                requirement through our{' '}
                <Link href="/immigration/citizenship-classes" className="text-terracotta font-semibold hover:underline">
                  Citizenship Classes
                </Link>{' '}
                (also available{' '}
                <Link href="/immigration/clases-de-ciudadania" className="text-terracotta font-semibold hover:underline">
                  en Español
                </Link>
                ).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rights and responsibilities ────────────────────────────────────── */}
      <section className="py-16 bg-navy/5" aria-labelledby="rights-heading">
        <div className="section-wrapper">
          <div className="max-w-4xl mx-auto">
            <h2 id="rights-heading" className="section-title text-center mb-10">
              What citizenship gives you — and asks of you.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rights */}
              <div className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm">
                <h3 className="font-display text-2xl font-medium text-navy mb-5 pb-4 border-b border-ink/10">
                  Your rights
                </h3>
                <ul className="space-y-3">
                  {citizenRights.map((right, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                      <Check className="size-4 text-sage shrink-0 mt-0.5" strokeWidth={3} aria-hidden="true" />
                      {right}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm">
                <h3 className="font-display text-2xl font-medium text-navy mb-5 pb-4 border-b border-ink/10">
                  Your responsibilities
                </h3>
                <ul className="space-y-3">
                  {citizenResponsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                      <span className="text-terracotta shrink-0 mt-0.5" aria-hidden="true">◆</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready when you are."
        subtext="Call or text us today. Our DOJ-authorized representatives will guide you through every step of the process."
      />
    </>
  )
}
