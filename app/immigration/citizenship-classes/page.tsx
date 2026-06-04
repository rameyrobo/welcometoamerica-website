import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Citizenship Classes',
  description:
    'Free citizenship and civics classes to help you prepare for the U.S. naturalization interview and test. Available in English and Spanish.',
}

const classTopics = [
  {
    icon: '📜',
    title: 'U.S. History',
    description:
      'Learn about key events, founding documents, wars, civil rights movements, and the history that shaped the United States.',
  },
  {
    icon: '🏛️',
    title: 'Civics & Government',
    description:
      'Understand the three branches of government, how laws are made, the Bill of Rights, and how democracy works in the United States.',
  },
  {
    icon: '🗣️',
    title: 'English Language Skills',
    description:
      'Build reading, writing, and speaking skills needed for the USCIS interview, with practice on vocabulary and sentences used during naturalization.',
  },
  {
    icon: '📝',
    title: 'USCIS 100 Questions',
    description:
      'Study all 100 official USCIS civics questions and answers. Practice until you can confidently answer at least 6 of the 10 questions asked during your interview.',
  },
  {
    icon: '🎤',
    title: 'Mock Interviews',
    description:
      'Participate in practice interviews that simulate what you will experience at your actual USCIS naturalization interview — so there are no surprises.',
  },
  {
    icon: '📋',
    title: 'Application Walkthrough',
    description:
      'Get help understanding Form N-400 (Application for Naturalization) and how to answer each question accurately and completely.',
  },
]

export default function CitizenshipClassesPage() {
  return (
    <>
      <HeroSection
        badge="Immigration Services · Education"
        headline="Citizenship Classes"
        subheadline="Preparing for your naturalization interview? Our citizenship classes help you study U.S. history, civics, and English — everything you need to pass your USCIS interview with confidence."
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
          <span className="text-navy font-semibold">Citizenship Classes</span>
        </div>
      </div>

      {/* ── Intro ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="cc-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 id="cc-heading" className="section-title mb-6">
            Prepare to Become a U.S. Citizen
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            <p>
              The naturalization interview can feel daunting, but preparation makes all the
              difference. Welcome to America offers citizenship classes designed to help you
              understand U.S. history, government, and the civics test — so you walk into
              your USCIS interview ready and confident.
            </p>
            <p>
              Classes are available in English. For Spanish-language classes, see our{' '}
              <Link
                href="/immigration/clases-de-ciudadania"
                className="text-terracotta font-semibold hover:underline"
              >
                Clases de Ciudadanía
              </Link>{' '}
              page.
            </p>
          </div>

          {/* Availability callout */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '📞', label: 'By Phone' },
              { icon: '💻', label: 'Online / Zoom' },
              { icon: '🏫', label: 'In-Person' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-navy/5 rounded-xl px-5 py-4 border border-navy/10"
              >
                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                <span className="font-body font-semibold text-navy">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we cover ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-navy/5" aria-labelledby="topics-heading">
        <div className="section-wrapper">
          <h2 id="topics-heading" className="section-title text-center mb-10">
            What Our Classes Cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {classTopics.map((topic) => (
              <div key={topic.title} className="card">
                <div className="text-3xl mb-3" aria-hidden="true">{topic.icon}</div>
                <h3 className="font-display text-lg text-navy font-semibold mb-2">
                  {topic.title}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USCIS resources callout ───────────────────────────────────────── */}
      <section className="py-14" aria-labelledby="resources-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <div className="bg-white border border-navy/15 rounded-xl p-7 shadow-sm">
            <h2 id="resources-heading" className="font-display text-2xl text-navy font-semibold mb-4">
              Official USCIS Study Materials
            </h2>
            <p className="text-ink/70 leading-relaxed mb-5">
              USCIS provides free official study materials for the naturalization test. We
              recommend supplementing our classes with these resources:
            </p>
            <a
              href="https://www.uscis.gov/citizenship/find-study-materials-and-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              USCIS Official Study Materials →
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Sign Up for Citizenship Classes"
        subtext="Call or text us to get started. Classes available by phone, online, and in person."
        variant="navy"
      />
    </>
  )
}
