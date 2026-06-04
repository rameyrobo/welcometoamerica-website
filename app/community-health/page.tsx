import type { Metadata } from 'next'
import Image from 'next/image'
import PageCTAButtons from '@/components/PageCTAButtons'

export const metadata: Metadata = {
  title: 'Community Health Worker',
  description:
    'Free Community Health Worker services with Medi-Cal. We help with Medi-Cal enrollment, healthcare navigation, immigration assistance, and more. English, Spanish, and Arabic speakers available.',
}

const chwServices = [
  'We have a trusted relationship with the people we serve.',
  'We can help you transfer your Medi-Cal / Medicaid to your new County of Residence.',
  'We can help you enroll into Medi-Cal, IEHP, Molina, LA Care, Scan, Anthem, United Healthcare, Alignment, Aetna, and more!',
  'We help complete applications for health plans, social security, insurance, health services, immigration forms and more!',
  'We can interpret and translate between health care service providers and patients as well as USCIS and applicants. (English / Arabic / Spanish speakers available)',
  'We provide services over the phone, in-person, and virtually. We will even come see you at the hospital!',
  'We can help you learn how to find and access resources such as quality care, health information, health insurance, life insurance, Citizenship, immigration, housing, food, and more!',
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
      {/* Page header with background image */}
      <section className="bg-sage relative overflow-hidden py-14">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=75"
          alt="Healthcare worker with patient"
          fill
          className="object-cover object-center opacity-20"
          priority
          sizes="100vw"
        />
        <div className="section-wrapper relative">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-body px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            🏥 Free with Medi-Cal
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold">
            Community Health Workers
          </h1>
          <p className="text-white/80 font-body mt-3 text-lg max-w-xl">
            Healthy Connections — we're here for you every step of the way.
          </p>
        </div>
      </section>

      {/* What CHWs do */}
      <section className="py-16 bg-cream">
        <div className="section-wrapper max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Services list */}
            <div>
              <h2 className="section-title mb-8">As Community Health Workers, We:</h2>
              <ul className="space-y-4">
                {chwServices.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-sage text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <span className="font-body text-sm text-ink/80 leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cost info + Staff spotlight */}
            <div className="space-y-6">
              {/* Cost callout */}
              <div className="bg-sage text-white rounded-xl p-8 text-center">
                <p className="font-display text-5xl font-bold mb-2">FREE</p>
                <p className="font-body text-white/90 text-lg font-semibold mb-4">If you have Medi-Cal, you qualify!</p>
                <div className="bg-white/20 rounded-lg p-4 text-left space-y-2">
                  <p className="font-body text-sm text-white/90">
                    <strong className="text-white">What do you need?</strong><br />
                    Your Medi-Cal card. Yes, that's it.
                  </p>
                  <p className="font-body text-sm text-white/80">
                    Misplaced your card? No problem — we can help you replace it too!
                  </p>
                </div>
                <a
                  href="tel:8332491563"
                  className="btn-outline-white mt-6 w-full justify-center"
                >
                  📞 CHW Support: 833-249-1563
                </a>
              </div>

              {/* Service methods */}
              <div className="card">
                <h3 className="font-body font-semibold text-navy text-sm mb-4">How We Serve You</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: '📞', label: 'By Phone' },
                    { icon: '🏥', label: 'In-Person' },
                    { icon: '💻', label: 'Virtually' },
                    { icon: '🏨', label: 'At the Hospital' },
                  ].map((method) => (
                    <div key={method.label} className="flex items-center gap-2 bg-cream rounded-lg p-3">
                      <span className="text-xl">{method.icon}</span>
                      <span className="font-body text-sm font-semibold text-navy">{method.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff spotlight — Crystal */}
      <section className="py-16 bg-white">
        <div className="section-wrapper max-w-4xl">
          <h2 className="section-title mb-8 text-center">Meet Our Team</h2>
          <div className="bg-navy/5 border border-navy/10 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0 w-24 h-24 bg-sage/20 rounded-full flex items-center justify-center text-4xl mx-auto md:mx-0">
                👩‍⚕️
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display text-2xl text-navy font-bold">Crystal</h3>
                  <span className="bg-sage text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
                    Community Health Worker
                  </span>
                </div>
                <p className="font-body text-xs text-terracotta font-semibold uppercase tracking-wider mb-4">
                  Immigration Case & Fraud Victim Support Specialist
                </p>

                {/* English bio */}
                <p className="font-body text-sm text-ink/75 leading-relaxed mb-6">
                  "I'm here to guide you every step of the way — helping you connect to much needed 
                  resources, helping you with Medi-Cal and Medicare, helping you navigate your 
                  immigration journey with confidence, avoid scams and fraud, translate, and protect 
                  you. I'm committed to providing trusted, compassionate, and results-driven service 
                  to help you move forward with peace of mind."
                </p>

                {/* Spanish bio */}
                <div className="border-t border-navy/10 pt-4">
                  <span className="bg-terracotta text-white text-xs font-body font-bold px-2 py-0.5 rounded mb-3 inline-block">
                    En Español
                  </span>
                  <p className="font-body text-sm text-ink/65 leading-relaxed italic">
                    "Estoy aquí para guiarte en cada paso del camino — ayudándote a conectarte con 
                    recursos muy necesarios, asistirte con Medi-Cal y Medicare, ayudándote a navegar 
                    tu proceso de inmigración con confianza, evitar errores costosos y protegerte del 
                    fraude. Estoy comprometida a brindarte un servicio confiable, compasivo y orientado 
                    a resultados para ayudarte a avanzar con tranquilidad."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner health plans */}
      <section className="py-16 bg-cream">
        <div className="section-wrapper max-w-4xl">
          <h2 className="section-title mb-4 text-center">Health Plan Partners</h2>
          <p className="section-subtitle text-center mb-8">
            We help you enroll in any of these plans and more.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {partners.map((partner) => (
              <span
                key={partner}
                className="px-5 py-2.5 bg-white border border-navy/15 text-navy font-body font-semibold text-sm rounded-full shadow-sm hover:bg-navy hover:text-white transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-terracotta">
        <div className="section-wrapper text-center">
          <h2 className="font-display text-3xl text-white font-bold mb-3">
            Request a Community Health Worker
          </h2>
          <p className="text-white/80 font-body text-lg mb-2">
            Free for Medi-Cal members. Click below or call us.
          </p>
          <p className="text-white/60 font-body mb-8">
            Gratis para miembros de Medi-Cal. Llámenos o haga clic abajo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8332491563" className="btn-outline-white px-8 py-4">
              📞 CHW Line: 833-249-1563
            </a>
            <a href="tel:8449826374" className="btn-outline-white px-8 py-4">
              📞 Main: 844-982-6374
            </a>
          </div>
        </div>
      </section>

      <PageCTAButtons />
    </>
  )
}
