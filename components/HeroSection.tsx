import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  headline: string
  subheadline: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  showPhone?: boolean
  badge?: string
  /**
   * Optional Unsplash (or any) image URL to use as a background.
   * Overlaid with a dark gradient for legibility.
   */
  imageUrl?: string
  imageAlt?: string
}

export default function HeroSection({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  showPhone = true,
  badge,
  imageUrl,
  imageAlt = 'Community',
}: HeroSectionProps) {
  return (
    <section className="bg-navy relative overflow-hidden" aria-labelledby="hero-headline">
      {/* Background image with overlay */}
      {imageUrl && (
        <>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-center opacity-30"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay for readability */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60"
            aria-hidden="true"
          />
        </>
      )}

      {/* Decorative circles (shown when no image) */}
      {!imageUrl && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-terracotta/10" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-sage/10" />
        </div>
      )}

      <div className="section-wrapper relative py-20 sm:py-28">
        <div className="max-w-2xl">
          {badge && (
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-terracotta/20 border border-terracotta/40 text-terracotta-200 text-sm font-body font-semibold px-4 py-1.5 rounded-full">
                {badge}
              </span>
            </div>
          )}

          <h1
            id="hero-headline"
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6"
          >
            {headline}
          </h1>

          <p className="font-body text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
            {subheadline}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary text-base px-8 py-4">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-outline-white text-base px-8 py-4">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {showPhone && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-white/70">
              <a
                href="tel:8449826374"
                className="flex items-center gap-2 text-white font-semibold hover:text-terracotta-200 transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                844-WTAMERICA (844-982-6374)
              </a>
              <span className="text-white/40 hidden sm:block">|</span>
              <a href="sms:5624725246" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
                Text: 562-472-5246
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
