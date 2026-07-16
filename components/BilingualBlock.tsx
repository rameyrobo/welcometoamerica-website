import { Languages } from 'lucide-react'

interface BilingualBlockProps {
  englishContent: React.ReactNode
  spanishContent: React.ReactNode
  /** Optional section label shown above the Spanish block */
  spanishLabel?: string
}

/**
 * Displays content in both English and Spanish.
 * English first (primary), Spanish below with a subtle divider.
 * Used on About and other pages with bilingual requirements.
 */
export default function BilingualBlock({
  englishContent,
  spanishContent,
  spanishLabel = 'En Español',
}: BilingualBlockProps) {
  return (
    <div>
      {/* English block */}
      <div lang="en">{englishContent}</div>

      {/* Spanish divider + block */}
      <div className="bilingual-divider" lang="es">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sage font-body font-semibold text-sm uppercase tracking-wide">
            {spanishLabel}
          </span>
          <div className="flex-1 h-px bg-sage/20" aria-hidden="true" />
          <Languages className="size-4 text-sage/60" aria-hidden="true" />
        </div>
        {spanishContent}
      </div>
    </div>
  )
}
