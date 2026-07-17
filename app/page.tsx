import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Welcome to America Services | DOJ-Recognized Immigration & Community Health',
  description:
    'Free and low-cost immigration legal services, community health workers, and Medi-Cal enrollment. DOJ Recognized Nonprofit serving Southern California.',
}

/* ── All nine services from the client's list — numbered, pairteam-style ── */
const services = [
  {
    title: 'Immigration legal advice',
    description:
      'Sit down with a DOJ Accredited Representative for honest, affordable legal advice about your immigration options — citizenship, green cards, fee waivers, and more.',
    href: '/immigration',
  },
  {
    title: 'Immigration case support',
    description:
      'From preparing forms to gathering evidence and tracking deadlines, we support your case at every step and represent you before the Department of Homeland Security.',
    href: '/immigration',
  },
  {
    title: 'Immigrant accompaniment',
    description:
      'You never have to face an appointment alone. We accompany community members to immigration appointments, hearings, and interviews.',
    href: '/immigration',
  },
  {
    title: 'Immigration fraud victim support',
    description:
      'If a notario or consultant took advantage of you, we help you understand your rights, report the fraud, and get your case back on track.',
    href: '/immigration',
  },
  {
    title: 'Community health workers',
    description:
      'Free with Medi-Cal: a trusted health worker who connects you to care, translates for providers, and walks with you through the healthcare system.',
    href: '/community-health',
  },
  {
    title: 'Healthcare advocacy',
    description:
      'We help you understand your healthcare rights and connect you to housing, food, and social service resources in your community.',
    href: '/community-health',
  },
  {
    title: 'Medi-Cal & Medicare enrollment',
    description:
      'Enrollment help for Medi-Cal, Medicare, IEHP, Molina, and Covered California — in English, Spanish, and Arabic, at no cost to you.',
    href: '/medi-cal',
  },
  {
    title: 'Emergency room & hospital assistance',
    description:
      'When a health emergency and an immigration concern collide, we help you navigate both — at the ER, in the hospital, and after discharge.',
    href: '/community-health',
  },
  {
    title: 'Citizenship classes',
    description:
      'Free citizenship classes in English and Spanish (Clases de Ciudadanía) to prepare you for your naturalization interview and civics test.',
    href: '/immigration',
  },
]

const pillars = [
  {
    title: 'Recognized by the Department of Justice',
    body: 'We are a DOJ Recognized Organization with Accredited Representatives — authorized to give legal advice, prepare immigration forms, and represent you before DHS. Real accountability, not a notario.',
  },
  {
    title: 'From the community, for the community',
    body: 'As a 501(c)(3) community-based organization, we serve in English, Español, and العربية. Our community health workers and representatives live where you live.',
  },
  {
    title: 'Free and low-cost, always',
    body: 'Community health worker services are free with Medi-Cal. Immigration services are offered at nonprofit rates, with fee waivers when you qualify. Care first, cost second.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero — full-bleed statement ─────────────────────────────────── */}
      <HeroSection
        badge="DOJ Recognized Organization · Nonprofit 501(c)(3) · Community Based"
        headline="Help for your whole journey."
        subheadline="Immigration legal services, community health workers, and healthcare enrollment for Southern California — from a nonprofit your community already trusts. Free or low cost, in English, Español, and العربية."
        primaryCta={{ label: 'Get Immigration Help', href: '/immigration' }}
        secondaryCta={{ label: 'Find a Health Worker', href: '/community-health' }}
        showPhone
        imageUrl="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Diverse community members together"
      />

      {/* ── Statement intro — centered manifesto beat between the
             left-aligned hero and the services grid ────────────────────── */}
      <section className="py-20 sm:py-28" aria-labelledby="intro-heading">
        <div className="section-wrapper">
          {/* Block centered on the page; text stays left-aligned inside */}
          <div className="max-w-2xl mx-auto">
            <h2 id="intro-heading" className="section-title mb-6">
              Addressing what matters most, first.
            </h2>
            <p className="section-subtitle mb-8">
              Immigration paperwork and healthcare shouldn&apos;t be a maze you walk
              alone. Welcome to America connects your legal case, your health
              coverage, and your everyday needs through one dedicated team of DOJ
              Accredited Representatives and community health workers — recognized
              by the Department of Justice, rooted in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-x-8 gap-y-3">
              <Link href="/immigration" className="link-arrow">
                Do I qualify for immigration help? <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/medi-cal" className="link-arrow">
                Can I get free health coverage? <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbered services list ──────────────────────────────────────── */}
      <section className="pb-20 sm:pb-28" aria-labelledby="services-heading">
        <div className="section-wrapper">
          <div className="max-w-3xl mb-14">
            <span className="eyebrow">What we do</span>
            <h2 id="services-heading" className="section-title">
              Real help, for real life.
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 list-none">
            {services.map((svc, i) => (
              <li key={svc.title} className="border-t border-ink/15 pt-6">
                <p className="font-display text-terracotta-700 text-lg mb-3" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-2xl text-navy font-medium mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-ink/70 leading-relaxed mb-4">{svc.description}</p>
                <Link href={svc.href} className="link-arrow text-sm">
                  Learn more <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Why Welcome to America — photo + pillars ────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" aria-labelledby="why-heading">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden lg:sticky lg:top-28">
              <Image
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80"
                alt="Hands joined together in support"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <div>
              <h2 id="why-heading" className="section-title mb-12">
                Why Welcome to America?
              </h2>
              <div className="space-y-10">
                {pillars.map((p) => (
                  <div key={p.title} className="border-t border-ink/15 pt-6">
                    <h3 className="font-display text-2xl text-navy font-medium mb-3">
                      {p.title}
                    </h3>
                    <p className="text-ink/70 leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Twin program cards with checkmarks ──────────────────────────── */}
      <section className="py-20 sm:py-28" aria-labelledby="programs-heading">
        <div className="section-wrapper">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 id="programs-heading" className="section-title mb-4">
              Two ways we can help, one place to start.
            </h2>
            <p className="section-subtitle">
              Whether you need legal help or healthcare support, there&apos;s a
              program built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                tag: 'Immigration',
                title: 'Immigration Legal Services',
                cta: { label: 'Start Your Case', href: '/immigration' },
                rows: [
                  ['Who it’s for', 'Anyone navigating citizenship, green cards, fee waivers, or an immigration case — including victims of immigration fraud'],
                  ['What you get', 'Legal advice, form preparation, DHS representation, accompaniment, and citizenship classes from DOJ Accredited Representatives'],
                  ['Cost', 'Nonprofit low-cost rates, with fee waivers when you qualify'],
                ],
              },
              {
                tag: 'Community Health',
                title: 'Health & Enrollment Support',
                cta: { label: 'Find Support', href: '/community-health' },
                rows: [
                  ['Who it’s for', 'Anyone who needs help getting or using health coverage — Medi-Cal, Medicare, IEHP, Molina, or Covered California'],
                  ['What you get', 'A dedicated community health worker, enrollment help, healthcare advocacy, translation, and ER/hospital assistance'],
                  ['Cost', 'Free with Medi-Cal — no cost to you'],
                ],
              },
            ].map((program) => (
              <div key={program.title} className="card flex flex-col">
                <span className="eyebrow">{program.tag}</span>
                <h3 className="font-display text-3xl text-navy font-medium leading-tight mb-8">
                  {program.title}
                </h3>
                <dl className="space-y-6 mb-10 flex-1">
                  {program.rows.map(([label, value]) => (
                    <div key={label} className="flex gap-3">
                      <svg
                        className="w-5 h-5 text-sage shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <dt className="font-body font-bold text-ink">{label}</dt>
                        <dd className="text-ink/70 leading-relaxed">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <Link href={program.cta.href} className="btn-secondary w-full">
                  {program.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing statement CTA ───────────────────────────────────────── */}
      <CTABanner
        heading="Here to support you."
        subtext="Call or text us today — or book an appointment by phone, Zoom, or in person."
      />
    </>
  )
}
