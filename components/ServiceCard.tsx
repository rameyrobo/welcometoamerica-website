import Link from 'next/link'

interface ServiceCardProps {
  /** Icon — a single emoji or SVG string */
  icon: string
  title: string
  description: string
  href: string
  /** Optional accent color variant: 'navy' | 'terracotta' | 'sage' */
  accent?: 'navy' | 'terracotta' | 'sage'
}

/**
 * Service card for the homepage services grid.
 * Clean, warm, approachable — links to the relevant service page.
 */
export default function ServiceCard({
  icon,
  title,
  description,
  href,
  accent = 'navy',
}: ServiceCardProps) {
  const accentStyles = {
    navy: {
      iconBg: 'bg-navy/10',
      iconText: 'text-navy',
      linkText: 'text-navy hover:text-navy-600',
      border: 'hover:border-navy/30',
    },
    terracotta: {
      iconBg: 'bg-terracotta/10',
      iconText: 'text-terracotta',
      linkText: 'text-terracotta hover:text-terracotta-600',
      border: 'hover:border-terracotta/30',
    },
    sage: {
      iconBg: 'bg-sage/10',
      iconText: 'text-sage',
      linkText: 'text-sage hover:text-sage-600',
      border: 'hover:border-sage/30',
    },
  }

  const styles = accentStyles[accent]

  return (
    <div className={`card ${styles.border} flex flex-col h-full`}>
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl ${styles.iconBg} flex items-center justify-center mb-4 text-2xl`}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className={`font-display text-xl font-semibold text-navy mb-2`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-ink/75 text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>

      {/* Link */}
      <Link
        href={href}
        className={`font-body font-semibold text-sm ${styles.linkText} flex items-center gap-1 mt-auto transition-colors`}
      >
        Learn more
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
