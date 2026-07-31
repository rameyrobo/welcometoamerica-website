'use client'

import { usePathname } from 'next/navigation'

/**
 * Softens route changes — the house ~180ms cross-fade.
 *
 * HOW IT WORKS: keying the wrapper on the pathname forces React to throw away
 * the old subtree and mount a fresh one, which restarts the CSS animation. No
 * library, no dependency, and it cannot break navigation — if the CSS never
 * loads you just get an instant page, which is what we have today anyway.
 *
 * WHY NOT THE VIEW TRANSITIONS API: it gives a true cross-fade (old page fades
 * OUT while the new one fades IN) rather than the fade-IN this does. But Next's
 * `experimental.viewTransition` flag landed in 15.2 and both these sites are on
 * 14.2.3, so wiring it up means intercepting every <Link> click by hand. Not
 * worth the risk on a live client site for the last 20% of the effect. Revisit
 * when we upgrade to 15.
 *
 * ACCESSIBILITY: prefers-reduced-motion is honoured in globals.css. These are
 * healthcare and immigration sites with a lot of older visitors, and motion
 * sensitivity is real — the reduced-motion rule is not optional here.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  )
}
