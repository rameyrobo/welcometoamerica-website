import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import {
  BookOpen, ExternalLink, Flag, Landmark, MessageCircle, Phone, Stethoscope,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quick Links — Immigration & Healthcare Resources',
  description:
    'Helpful links for immigration, citizenship, Medi-Cal, healthcare, and government benefits. Official resources from USCIS, DOJ, and California agencies.',
}

const resourceCategories = [
  {
    title: 'Immigration Resources',
    icon: Landmark,
    links: [
      {
        name: 'USCIS — U.S. Citizenship and Immigration Services',
        desc: 'Official immigration forms, case status, and information from the federal government.',
        href: 'https://www.uscis.gov',
        label: 'uscis.gov',
      },
      {
        name: 'DOJ EOIR — Executive Office for Immigration Review',
        desc: 'Department of Justice immigration court information and accredited representative search.',
        href: 'https://www.justice.gov/eoir',
        label: 'justice.gov/eoir',
      },
      {
        name: 'USCIS Citizenship Study Materials',
        desc: 'Free study materials for the naturalization civics test including flashcards and practice tests.',
        href: 'https://www.uscis.gov/citizenship/find-study-materials-and-resources',
        label: 'uscis.gov/citizenship',
      },
      {
        name: 'USCIS Exceptions & Accommodations',
        desc: 'Information about English language test exemptions and accommodations.',
        href: 'https://www.uscis.gov/citizenship/exceptions-and-accommodations',
        label: 'uscis.gov',
      },
    ],
  },
  {
    title: 'Healthcare Resources',
    icon: Stethoscope,
    links: [
      {
        name: 'Medi-Cal — DHCS California',
        desc: 'California Department of Health Care Services — official Medi-Cal program information and enrollment.',
        href: 'https://www.dhcs.ca.gov',
        label: 'dhcs.ca.gov',
      },
      {
        name: 'Covered California',
        desc: 'California\'s official health insurance marketplace — compare plans and check for financial assistance.',
        href: 'https://www.coveredca.gov',
        label: 'coveredca.gov',
      },
      {
        name: 'Medicare — Official U.S. Government Site',
        desc: 'Federal Medicare program information, enrollment, and plan comparisons.',
        href: 'https://www.medicare.gov',
        label: 'medicare.gov',
      },
    ],
  },
  {
    title: 'Government Benefits',
    icon: Flag,
    links: [
      {
        name: 'USA.gov — Benefits',
        desc: 'Government benefits for food, housing, healthcare, and financial assistance.',
        href: 'https://www.usa.gov/benefits',
        label: 'usa.gov/benefits',
      },
      {
        name: 'Federal Student Aid (FAFSA)',
        desc: 'Apply for federal financial aid for college including grants and scholarships.',
        href: 'https://studentaid.gov/h/apply-for-aid/fafsa',
        label: 'studentaid.gov',
      },
      {
        name: 'Voter Registration — USA.gov',
        desc: 'How to register to vote in federal elections once you become a U.S. citizen.',
        href: 'https://www.usa.gov/voter-registration',
        label: 'usa.gov',
      },
      {
        name: 'USA Jobs — Federal Employment',
        desc: 'Browse and apply for federal government jobs requiring U.S. citizenship.',
        href: 'https://www.usajobs.gov',
        label: 'usajobs.gov',
      },
    ],
  },
  {
    title: 'Education & Literacy',
    icon: BookOpen,
    links: [
      {
        name: 'National Literacy Directory',
        desc: 'Find free English literacy classes and resources near you.',
        href: 'https://www.nld.org',
        label: 'nld.org',
      },
      {
        name: 'Naturalization Oath of Allegiance',
        desc: 'Learn the Oath of Allegiance required for U.S. citizenship.',
        href: 'https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test/naturalization-oath-of-allegiance-to-the-united-states-of-america',
        label: 'uscis.gov',
      },
    ],
  },
]

export default function QuickLinksPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy py-14">
        <div className="section-wrapper">
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold">Quick Links</h1>
          <p className="text-white/70 font-body mt-3 text-lg max-w-xl">
            Official government and community resources for immigration, healthcare, and benefits.
          </p>
        </div>
      </section>

      {/* Resource links */}
      <section className="py-16 bg-cream">
        <div className="section-wrapper max-w-4xl">
          <div className="space-y-12">
            {resourceCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="size-6 text-terracotta" aria-hidden="true" />
                  <h2 className="font-display text-2xl text-navy font-bold">{category.title}</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card group hover:border-terracotta/30 flex flex-col gap-2 no-underline"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-body font-bold text-navy text-sm group-hover:text-terracotta transition-colors leading-tight">
                          {link.name}
                        </p>
                        <ExternalLink className="size-4 text-ink/30 flex-shrink-0 mt-0.5 group-hover:text-terracotta transition-colors" aria-hidden="true" />
                      </div>
                      <p className="font-body text-xs text-ink/60 leading-relaxed flex-1">{link.desc}</p>
                      <span className="font-body text-xs text-terracotta font-semibold mt-1">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Help note */}
          <div className="mt-12 bg-navy rounded-xl p-8 text-center">
            <p className="font-display text-xl text-white font-bold mb-3">
              Need help navigating these resources?
            </p>
            <p className="text-white/70 font-body text-sm mb-6">
              Our team is here to help you — we'll walk you through any of these sites and processes step by step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8449826374" className="btn-outline-white inline-flex items-center justify-center gap-2">
                <Phone className="size-4" aria-hidden="true" /> 844-982-6374
              </a>
              <a href="sms:5624725246" className="btn-outline-white inline-flex items-center justify-center gap-2">
                <MessageCircle className="size-4" aria-hidden="true" /> Text 562-472-5246
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Here to support you." subtext="Call or text us today — or book an appointment by phone, Zoom, or in person." />
    </>
  )
}
