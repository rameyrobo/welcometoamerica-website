import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Welcome to America is a Department of Justice Recognized Nonprofit providing immigration legal services and healthcare enrollment across Southern California.',
}

const credentials = [
  'Department of Justice Recognized Organization',
  'Nonprofit 501(c)(3) Organization (#5698276)',
  'Community Based Organization',
  'DOJ Accredited Legal Representatives',
  'NPI# 1477392561',
]

const servicesProvided = [
  'Immigration Legal Advice',
  'Immigrant Accompaniment',
  'Immigration Case Support Services',
  'Immigration Fraud Victim Support',
  'Department of Justice Accredited Representatives',
  'Community Health Workers',
  'Healthcare Advocacy',
  'Medi-Cal and Medicare Enrollments',
  'Emergency Room & Hospital Healthcare and Immigration Assistance',
  'Covered California Enrollment',
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        badge="DOJ Recognized Organization · Est. Southern California"
        headline="Community. Trust. Advocacy."
        subheadline="A nonprofit recognized by the U.S. Department of Justice, serving immigrants and families across Southern California."
        showPhone={false}
        imageUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1800&q=75"
        imageAlt="Volunteers joining hands together in community"
      />

      {/* ── Who we are — bilingual, side by side ──────────────────────────── */}
      <section className="py-20 sm:py-28" aria-labelledby="who-heading">
        <div className="section-wrapper max-w-5xl">
          <span className="eyebrow">Who we are · Quiénes somos</span>
          <h2 id="who-heading" className="section-title mb-14">
            A nonprofit your community already trusts.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-10">
            {/* English */}
            <div className="space-y-4 font-body text-ink/80 leading-relaxed">
              <p>
                Welcome to America is a Nonprofit Organization that is Recognized by the
                Department of Justice. We are authorized by the DOJ to provide legal advice
                and assistance with immigration forms as well as legal representation at
                the Department of Homeland Security (DHS).
              </p>
              <p>
                We also provide assistance with Medicare, Medi-Cal, and Covered California
                insurance plans and services. It is our goal to offer the very best
                services — priding ourselves on customer service, efficient practices, and
                affordability.
              </p>
              <p>
                Bank-grade encryption, secure and distributed infrastructure, and
                continuous backups ensure your data is secure. We pride ourselves on
                privacy.
              </p>
              <p>
                Thank you for choosing Welcome to America and for allowing us to help you
                with your immigration and healthcare needs.
              </p>
            </div>

            {/* Spanish */}
            <div lang="es" className="space-y-4 font-body text-ink/70 leading-relaxed border-l-2 border-terracotta/40 pl-8">
              <p>
                Welcome to America es una organización sin fines de lucro reconocida por
                el Departamento de Justicia. Estamos autorizados por el Departamento de
                Justicia para brindar asesoría legal y asistencia con los formularios de
                inmigración, así como representación legal en el Departamento de Seguridad
                Nacional (DHS).
              </p>
              <p>
                Nuestros servicios también incluyen planes y servicios de seguro de
                Medi-Cal, Medicare y Covered California. Nuestro objetivo es ofrecer los
                mejores servicios — enorgulleciéndonos de nuestro servicio al cliente,
                prácticas eficientes y asequibilidad.
              </p>
              <p>
                El cifrado de nivel bancario, la infraestructura segura y distribuida y
                las copias de seguridad continuas garantizan la seguridad de sus datos.
                Nos enorgullecemos de la privacidad.
              </p>
              <p>
                Gracias por elegir Welcome to America y por permitirnos ayudarlo con sus
                necesidades de inmigración y atención médica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials — bordered editorial list ─────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" aria-labelledby="credentials-heading">
        <div className="section-wrapper max-w-4xl">
          <span className="eyebrow">Our credentials</span>
          <h2 id="credentials-heading" className="section-title mb-12">
            Recognized, accredited, accountable.
          </h2>
          <ol className="list-none">
            {credentials.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-6 border-t border-ink/15 py-5 last:border-b"
              >
                <span className="font-display text-terracotta-700 text-lg w-8 shrink-0" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-2xl text-navy font-medium">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Services overview ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28" aria-labelledby="services-heading">
        <div className="section-wrapper max-w-4xl">
          <span className="eyebrow">What we provide</span>
          <h2 id="services-heading" className="section-title mb-12">
            Every service, under one roof.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {servicesProvided.map((service) => (
              <div key={service} className="flex items-start gap-3 border-t border-ink/15 py-4">
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
                <span className="font-body text-ink/80">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Here to support you."
        subtext="Call or text us today — or book an appointment by phone, Zoom, or in person."
      />
    </>
  )
}
