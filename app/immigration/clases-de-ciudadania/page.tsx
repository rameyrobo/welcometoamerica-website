import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Clases de Ciudadanía (Citizenship Classes in Spanish)',
  description:
    'Clases gratuitas de ciudadanía y educación cívica para ayudarle a prepararse para la entrevista de naturalización del USCIS. Disponibles en español.',
}

const temas = [
  {
    title: 'Historia de EE.UU.',
    description:
      'Aprenda sobre los eventos clave, documentos fundacionales, guerras, movimientos de derechos civiles y la historia que formó a los Estados Unidos.',
  },
  {
    title: 'Educación Cívica y Gobierno',
    description:
      'Comprenda las tres ramas del gobierno, cómo se hacen las leyes, la Carta de Derechos y cómo funciona la democracia en los Estados Unidos.',
  },
  {
    title: 'Habilidades en Inglés',
    description:
      'Desarrolle habilidades de lectura, escritura y expresión oral necesarias para la entrevista del USCIS, con práctica del vocabulario usado en la naturalización.',
  },
  {
    title: 'Las 100 Preguntas del USCIS',
    description:
      'Estudie las 100 preguntas y respuestas oficiales de educación cívica del USCIS. Practique hasta poder responder con confianza al menos 6 de las 10 preguntas.',
  },
  {
    title: 'Entrevistas de Práctica',
    description:
      'Participe en entrevistas simuladas que replican la experiencia de la entrevista real de naturalización del USCIS, para que no haya sorpresas.',
  },
  {
    title: 'Revisión del Formulario N-400',
    description:
      'Obtenga ayuda para entender el Formulario N-400 (Solicitud de Naturalización) y cómo responder cada pregunta de manera precisa y completa.',
  },
]

export default function ClasesCiudadaniaPage() {
  return (
    <>
      <HeroSection
        badge="Servicios de Inmigración · Educación"
        headline="Llegue a su entrevista con confianza."
        subheadline="¿Se está preparando para su entrevista de naturalización? Nuestras clases de ciudadanía le ayudan a estudiar la historia de EE.UU., educación cívica e inglés — todo lo que necesita para aprobar su entrevista con confianza."
        primaryCta={{ label: 'Llámenos: 844-982-6374', href: 'tel:8449826374' }}
        secondaryCta={{ label: 'Mensaje: 562-472-5246', href: 'sms:5624725246' }}
        showPhone={false}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-navy/10">
        <div className="section-wrapper py-3 flex items-center gap-2 text-sm text-ink/60">
          <Link href="/immigration" className="hover:text-navy transition-colors">
            Inmigración
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-navy font-semibold">Clases de Ciudadanía</span>
        </div>
      </div>

      {/* ── Intro (Spanish) ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" lang="es" aria-labelledby="clases-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          {/* Language note */}
          <div className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 px-4 py-2 rounded-full mb-6">
            <span aria-hidden="true">🇲🇽</span>
            <span className="text-sage font-body font-semibold text-sm">
              Esta página está disponible en Español
            </span>
          </div>

          <h2 id="clases-heading" className="section-title mb-6">
            Prepárese para convertirse en ciudadano/a de EE.UU.
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            <p>
              La entrevista de naturalización puede parecer intimidante, pero la preparación
              hace toda la diferencia. Welcome to America ofrece clases de ciudadanía
              diseñadas para ayudarle a entender la historia, el gobierno y el examen cívico
              de los EE.UU. — para que entre a su entrevista con el USCIS listo/a y con
              confianza.
            </p>
            <p>
              Nuestras clases están disponibles en <strong>Español</strong>. También ofrecemos{' '}
              <Link
                href="/immigration/citizenship-classes"
                className="text-terracotta font-semibold hover:underline"
              >
                clases en inglés
              </Link>
              .
            </p>
          </div>

          {/* Disponibilidad */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['Por teléfono', 'En línea / Zoom', 'En persona'].map((label) => (
              <div
                key={label}
                className="bg-navy/5 rounded-xl px-5 py-4 border border-navy/10 text-center"
              >
                <span className="font-body font-semibold text-navy">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Temas ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-navy/5" lang="es" aria-labelledby="temas-heading">
        <div className="section-wrapper">
          <h2 id="temas-heading" className="section-title text-center mb-10">
            Lo que cubrimos en nuestras clases.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {temas.map((tema) => (
              <div key={tema.title} className="card">
                <h3 className="font-display text-xl text-navy font-medium mb-2">
                  {tema.title}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed">{tema.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Materiales USCIS ────────────────────────────────────────────────── */}
      <section className="py-14" lang="es" aria-labelledby="materiales-heading">
        <div className="section-wrapper max-w-3xl mx-auto">
          <div className="bg-white border border-navy/15 rounded-xl p-7 shadow-sm">
            <h2 id="materiales-heading" className="font-display text-2xl text-navy font-semibold mb-4">
              Materiales de estudio oficiales del USCIS.
            </h2>
            <p className="text-ink/70 leading-relaxed mb-5">
              El USCIS proporciona materiales de estudio gratuitos para el examen de
              naturalización. Le recomendamos complementar nuestras clases con estos recursos:
            </p>
            <a
              href="https://www.uscis.gov/citizenship/find-study-materials-and-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Materiales Oficiales del USCIS →
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Su clase comienza con una llamada."
        subtext="Llámenos o envíenos un mensaje para comenzar. Clases disponibles por teléfono, en línea y en persona."
      />
    </>
  )
}
