import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  headline: string
  subheadline: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  showPhone?: boolean
  badge?: string
  /** Optional image URL used as a full-bleed background with a dark wash. */
  imageUrl?: string
  imageAlt?: string
}

/**
 * Full-bleed editorial hero (pairteam-style): large sentence-case serif
 * statement over warm photography, two pill CTAs, quiet contact row.
 */
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
    <section className="bg-navy-800 relative overflow-hidden" aria-labelledby="hero-headline">
      {imageUrl && (
        <>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Single soft wash, bottom-weighted — lets the photo breathe */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/60 to-navy-900/30"
            aria-hidden="true"
          />
        </>
      )}

      <div className="section-wrapper relative pt-28 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-3xl">
          {badge && (
            <p className="font-body font-semibold text-xs uppercase tracking-[0.18em] text-white/80 mb-6">
              {badge}
            </p>
          )}

          <h1
            id="hero-headline"
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-white font-medium leading-[1.04] tracking-tight mb-6"
          >
            {headline}
          </h1>

          <p className="font-body text-lg sm:text-xl text-white/85 leading-relaxed mb-9 max-w-2xl">
            {subheadline}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-outline-white">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {showPhone && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-white/70">
              <a
                href="tel:8449826374"
                className="flex items-center gap-2 text-white font-semibold hover:text-terracotta-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                844-WTAMERICA (844-982-6374)
              </a>
              <span className="text-white/30 hidden sm:block">·</span>
              <a href="sms:5624725246" className="flex items-center gap-2 hover:text-white transition-colors">
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
