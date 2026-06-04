import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Welcome to America Services | DOJ-Recognized Immigration & Community Health',
  description:
    'Free and low-cost immigration legal services, community health workers, and Medi-Cal enrollment. DOJ Recognized Nonprofit serving Southern California.',
}

const services = [
  {
    icon: '⚖️',
    title: 'Immigration Legal Services',
    description:
      'DOJ-accredited representatives provide legal advice, help with immigration forms, and represent you at the Department of Homeland Security (DHS).',
    href: '/immigration',
    accent: 'navy' as const,
  },
  {
    icon: '🏥',
    title: 'Community Health Workers',
    description:
      'Free with Medi-Cal. Our health workers connect you to care, help you enroll in health plans, translate for providers, and support you through every step.',
    href: '/community-health',
    accent: 'sage' as const,
  },
  {
    icon: '📋',
    title: 'Medi-Cal & Medicare Enrollment',
    description:
      'We assist with enrolling in Medi-Cal, Medicare, and Covered California in English, Spanish, and Arabic — at no cost to you.',
    href: '/medi-cal',
    accent: 'terracotta' as const,
  },
  {
    icon: '🤝',
    title: 'Healthcare Advocacy & Navigation',
    description:
      'We help you understand your rights, navigate the healthcare system, and connect to housing, food, and social service resources.',
    href: '/community-health',
    accent: 'sage' as const,
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <HeroSection
        badge="DOJ Recognized Nonprofit · Free & Low-Cost Services"
        headline="Your Community. Your Rights. Your Future."
        subheadline="Welcome to America is a Department of Justice Recognized nonprofit providing immigration legal services, community health workers, and healthcare enrollment — free or low cost."
        primaryCta={{ label: 'Get Immigration Help', href: '/immigration' }}
        secondaryCta={{ label: 'Find a Health Worker', href: '/community-health' }}
        showPhone
        imageUrl="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Diverse community members together"
      />

      {/* ── Trust bar ──────────────────────────────────────────────────────── */}
      <div className="bg-sage">
        <div className="section-wrapper py-3.5">
          <ul
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
            aria-label="Trust indicators"
          >
            {[
              '✓ DOJ Recognized',
              '✓ Nonprofit 501(c)3',
              '✓ English / Español / العربية',
              '✓ Free & Low-Cost',
            ].map((badge) => (
              <li key={badge} className="text-white font-body font-semibold text-sm">
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Services grid ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="services-heading">
        <div className="section-wrapper">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="section-title mb-4">
              How We Can Help You
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Free and low-cost services for immigrants, families, and communities
              across Southern California.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About teaser ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-navy/5" aria-labelledby="about-teaser-heading">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-terracotta font-body font-semibold text-sm uppercase tracking-wide mb-3">
                Who We Are
              </span>
              <h2 id="about-teaser-heading" className="section-title mb-6">
                A Nonprofit You Can Trust
              </h2>
              <p className="text-ink/75 leading-relaxed mb-4">
                Welcome to America is a Nonprofit Organization Recognized by the
                Department of Justice, authorized to provide legal advice,
                assistance with immigration forms, and legal representation at
                the Department of Homeland Security (DHS).
              </p>
              <p className="text-ink/75 leading-relaxed mb-6">
                We also provide assistance with Medicare, Medi-Cal, and Covered
                California plans. Bank-grade security protects your personal
                data. We pride ourselves on privacy, customer service, and
                affordability.
              </p>
              <Link href="/about" className="btn-primary">
                Learn About Our Organization
              </Link>
            </div>

            {/* Highlight stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: 'DOJ', label: 'Recognized by the Dept. of Justice', border: 'border-navy' },
                { stat: '501(c)3', label: 'Certified Nonprofit Organization', border: 'border-sage' },
                { stat: '3', label: 'Languages: English, Español, العربية', border: 'border-terracotta' },
                { stat: 'Free', label: 'Community Health Workers with Medi-Cal', border: 'border-sage' },
              ].map((item) => (
                <div key={item.label} className={`bg-white rounded-xl p-6 border-l-4 ${item.border} shadow-sm`}>
                  <p className="font-display text-3xl font-bold text-navy mb-1">{item.stat}</p>
                  <p className="text-sm text-ink/70 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ──────────────────────────────────────────────────── */}
      <CTABanner
        heading="Ready to Get Started?"
        subtext="Call or text us today. Services available in English, Spanish, and Arabic."
        variant="terracotta"
      />
    </>
  )
}
