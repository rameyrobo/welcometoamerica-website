import type { Metadata } from 'next'
import Image from 'next/image'
import PageCTAButtons from '@/components/PageCTAButtons'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Welcome to America is a Department of Justice Recognized Nonprofit providing immigration legal services and healthcare enrollment across Southern California.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy py-14">
        <div className="section-wrapper">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-body px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            🏛️ DOJ Recognized Organization
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold">About Us</h1>
          <p className="text-white/70 font-body mt-3 text-lg max-w-xl">
            Community. Trust. Advocacy.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1800&q=75"
          alt="U.S. courthouse and American flag"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-end section-wrapper pb-6">
          <p className="text-white/70 font-body text-sm italic">
            Authorized by the U.S. Department of Justice · Est. Southern California
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 bg-cream">
        <div className="section-wrapper max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* English */}
            <div>
              <h2 className="font-display text-2xl text-navy font-bold mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 font-body text-base text-ink/80 leading-relaxed">
                <p>
                  Welcome to America is a Nonprofit Organization that is Recognized by the Department 
                  of Justice. We are authorized by the DOJ to provide legal advice and assistance with 
                  Immigration forms as well as Legal Representation at the Department of Homeland 
                  Security (DHS).
                </p>
                <p>
                  Welcome to America also provides assistance with Medicare, Medi-Cal, and Covered 
                  California insurance plans and services. It is our goal to offer the very best 
                  services where we can pride ourselves on our customer service, efficient practices, 
                  and affordability.
                </p>
                <p>
                  Bank-grade encryption, secure and distributed infrastructure and continuous backups 
                  ensure your data is secure. We pride ourselves on privacy.
                </p>
                <p>
                  Thank you for choosing Welcome to America and for allowing us to help you with 
                  your Immigration and/or Healthcare needs.
                </p>
              </div>

              {/* Key credentials */}
              <div className="mt-8 space-y-3">
                {[
                  'Department of Justice Recognized Organization',
                  'Nonprofit 501c3 Organization (#5698276)',
                  'Community Based Organization',
                  'DOJ Accredited Legal Representatives',
                  'NPI# 1477392561',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-sage font-bold mt-0.5">✓</span>
                    <span className="font-body text-sm text-ink/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spanish */}
            <div className="bg-navy/5 border border-navy/10 rounded-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-terracotta text-white text-xs font-body font-bold px-3 py-1 rounded-full">
                  En Español
                </span>
              </div>

              <h2 className="font-display text-2xl text-navy font-bold mb-6">
                Quiénes Somos
              </h2>

              <div className="space-y-4 font-body text-base text-ink/80 leading-relaxed italic">
                <p>
                  Welcome to America es una organización sin fines de lucro reconocida por el 
                  Departamento de Justicia. Welcome to America está autorizada por el Departamento 
                  de Justicia para brindar asesoría legal y asistencia con los formularios de 
                  inmigración, así como representación legal en el Departamento de Seguridad 
                  Nacional (DHS).
                </p>
                <p>
                  Nuestros servicios también incluye planes y servicios de seguro de Medi-Cal, 
                  Medicare y Covered California. Nuestro objetivo es ofrecer los mejores servicios 
                  donde podamos enorgullecernos de nuestro servicio al cliente, prácticas eficientes 
                  y asequibilidad.
                </p>
                <p>
                  El cifrado de nivel bancario, la infraestructura segura y distribuida y las copias 
                  de seguridad continuas garantizan la seguridad de sus datos. Nos enorgullecemos 
                  de la privacidad.
                </p>
                <p>
                  Gracias por elegir Welcome to America y por permitirnos ayudarlo con sus 
                  necesidades de inmigración y/o atención médica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 bg-white">
        <div className="section-wrapper max-w-4xl">
          <h2 className="section-title mb-8 text-center">Services We Provide</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
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
            ].map((service) => (
              <div key={service} className="flex items-start gap-3 p-4 bg-cream rounded-lg border border-navy/10">
                <span className="text-terracotta font-bold text-lg mt-0.5">→</span>
                <span className="font-body text-sm text-ink/80 font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTAButtons />
    </>
  )
}
