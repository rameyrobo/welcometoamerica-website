import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Community Health Worker',
  description:
    'Free Community Health Worker services with Medi-Cal. We help with Medi-Cal enrollment, healthcare navigation, immigration assistance, and more. English, Spanish, and Arabic speakers available.',
}

const chwServices = [
  {
    title: 'A trusted relationship',
    body: 'We build lasting, trusted relationships with the people we serve — you work with a person, not a phone tree.',
  },
  {
    title: 'Medi-Cal transfers & enrollment',
    body: 'We help you transfer Medi-Cal / Medicaid to your new county, and enroll in Medi-Cal, IEHP, Molina, LA Care, Scan, Anthem, United Healthcare, Alignment, Aetna, and more.',
  },
  {
    title: 'Applications, handled together',
    body: 'Health plans, social security, insurance, health services, immigration forms — we complete the paperwork with you.',
  },
  {
    title: 'Interpretation & translation',
    body: 'We interpret between healthcare providers and patients, and between USCIS and applicants — English, Arabic, and Spanish speakers available.',
  },
  {
    title: 'Wherever you are',
    body: 'By phone, in person, virtually — and if you are in the hospital, we will come to you.',
  },
  {
    title: 'Connected to resources',
    body: 'Quality care, health information, health and life insurance, citizenship and immigration help, housing, food, and more.',
  },
]

const partners = [
  'LA Care',
  'Molina Healthcare',
  'IEHP — Inland Empire Health Plan',
  'Anthem',
  'United Healthcare',
  'Scan',
  'Aetna',
  'Alignment',
]

export default function CommunityHealthPage() {
  return (
    <>
      <HeroSection
        badge="Free with Medi-Cal · Community Health Workers"
        headline="A health worker in your corner, at no cost."
        subheadline="Healthy connections — a dedicated community health worker who helps you enroll, navigate, translate, and get care, every step of the way."
        primaryCta={{ label: 'Call CHW Support: 833-249-1563', href: 'tel:8332491563' }}
        secondaryCta={{ label: 'Main Line: 844-982-6374', href: 'tel:8449826374' }}
        showPhone={false}
        imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=75"
        imageAlt="Healthcare worker with patient"
      />

      {/* ── What CHWs do — editorial list ─────────────────────────────────── */}
      <section className="py-20 sm:py-28" aria-labelledby="chw-heading">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-3">
              <span className="eyebrow">What we do</span>
              <h2 id="chw-heading" className="section-title mb-12">
                As community health workers, we walk with you.
              </h2>
              <div className="space-y-8">
                {chwServices.map((svc) => (
                  <div key={svc.title} className="border-t border-ink/15 pt-5">
                    <h3 className="font-display text-2xl text-navy font-medium mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-ink/70 leading-relaxed">{svc.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost callout — sticky sidebar */}
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <div className="bg-navy-800 text-white rounded-2xl p-10 text-center">
                <p className="font-display text-6xl font-medium mb-3">Free</p>
                <p className="font-body text-white/90 text-lg mb-6">
                  If you have Medi-Cal, you qualify.
                </p>
                <div className="bg-white/10 rounded-xl p-5 text-left space-y-2 mb-8">
                  <p className="font-body text-sm text-white/90">
                    <strong className="text-white">What do you need?</strong>
                    <br />
                    Your Medi-Cal card. Yes, that&apos;s it.
                  </p>
                  <p className="font-body text-sm text-white/70">
                    Misplaced your card? No problem — we can help you replace it too.
                  </p>
                </div>
                <a href="tel:8332491563" className="btn-primary w-full">
                  CHW Support: 833-249-1563
                </a>
                <p className="mt-5 text-white/60 text-sm font-body">
                  By phone · In person · Virtually · At the hospital
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Staff spotlight — Crystal ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" aria-labelledby="team-heading">
        <div className="section-wrapper max-w-4xl">
          <span className="eyebrow">Meet our team</span>
          <h2 id="team-heading" className="section-title mb-12">
            Real people, on your side.
          </h2>

          <div className="border-t border-ink/15 pt-8">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
              <h3 className="font-display text-3xl text-navy font-medium">Crystal</h3>
              <span className="font-body font-semibold text-xs uppercase tracking-[0.18em] text-terracotta">
                Community Health Worker · Immigration Case &amp; Fraud Victim Support
              </span>
            </div>

            <blockquote className="font-body text-lg text-ink/75 leading-relaxed mb-8 max-w-3xl">
              &ldquo;I&apos;m here to guide you every step of the way — helping you connect to
              much-needed resources, helping you with Medi-Cal and Medicare, helping you
              navigate your immigration journey with confidence, avoid scams and fraud,
              translate, and protect you. I&apos;m committed to providing trusted,
              compassionate, and results-driven service to help you move forward with
              peace of mind.&rdquo;
            </blockquote>

            <blockquote lang="es" className="font-body text-ink/60 leading-relaxed italic max-w-3xl border-l-2 border-terracotta/40 pl-5">
              &ldquo;Estoy aquí para guiarte en cada paso del camino — ayudándote a
              conectarte con recursos muy necesarios, asistirte con Medi-Cal y Medicare,
              ayudándote a navegar tu proceso de inmigración con confianza, evitar errores
              costosos y protegerte del fraude. Estoy comprometida a brindarte un servicio
              confiable, compasivo y orientado a resultados para ayudarte a avanzar con
              tranquilidad.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Health plan partners — numbered list (pairteam pattern) ───────── */}
      <section className="py-20 sm:py-28" aria-labelledby="partners-heading">
        <div className="section-wrapper max-w-4xl">
          <span className="eyebrow">Health plan partners</span>
          <h2 id="partners-heading" className="section-title mb-12">
            We help you enroll in any of these plans, and more.
          </h2>
          <ol className="list-none">
            {partners.map((partner, i) => (
              <li
                key={partner}
                className="flex items-baseline gap-6 border-t border-ink/15 py-5 last:border-b"
              >
                <span className="font-display text-terracotta-700 text-lg w-8 shrink-0" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-2xl text-navy font-medium">{partner}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────────────────── */}
      <CTABanner
        heading="Request a health worker."
        subtext="Free for Medi-Cal members · Gratis para miembros de Medi-Cal. CHW line: 833-249-1563."
        phone="8332491563"
      />
    </>
  )
}
