interface CTABannerProps {
  heading: string
  subtext?: string
  /** Primary phone number CTA */
  phone?: string
  /** Text/SMS number CTA */
  textNumber?: string
  /** Color scheme: 'navy' (default) | 'terracotta' | 'sage' */
  variant?: 'navy' | 'terracotta' | 'sage'
}

/**
 * Full-width call-to-action banner with phone + text CTAs.
 * Used at the bottom of service pages to drive conversions.
 */
export default function CTABanner({
  heading,
  subtext,
  phone = '8449826374',
  textNumber = '5624725246',
  variant = 'terracotta',
}: CTABannerProps) {
  const variants = {
    navy: 'bg-navy',
    terracotta: 'bg-terracotta',
    sage: 'bg-sage',
  }

  // Format phone for display
  const formatPhone = (raw: string) => {
    if (raw.length === 10) {
      return `${raw.slice(0, 3)}-${raw.slice(3, 6)}-${raw.slice(6)}`
    }
    return raw
  }

  return (
    <section
      className={`${variants[variant]} py-14 sm:py-18`}
      aria-labelledby="cta-heading"
    >
      <div className="section-wrapper text-center">
        {/* Heading */}
        <h2
          id="cta-heading"
          className="font-display text-3xl sm:text-4xl text-white font-bold mb-3"
        >
          {heading}
        </h2>

        {/* Subtext */}
        {subtext && (
          <p className="text-white/85 font-body text-lg mb-8 max-w-xl mx-auto">
            {subtext}
          </p>
        )}

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-3 bg-white text-navy font-body font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors text-lg min-w-[220px] justify-center"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call {formatPhone(phone)}
          </a>

          <span className="text-white/50 font-body hidden sm:block">or</span>

          <a
            href={`sms:${textNumber}`}
            className="inline-flex items-center gap-3 border-2 border-white text-white font-body font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg min-w-[220px] justify-center"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
            Text {formatPhone(textNumber)}
          </a>
        </div>

        {/* Language note */}
        <p className="mt-6 text-white/60 text-sm font-body">
          Available in English, Español, and العربية
        </p>
      </div>
    </section>
  )
}
