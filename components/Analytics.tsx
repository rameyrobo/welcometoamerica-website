'use client'

/**
 * Google Analytics 4 for a Next.js App Router site.
 * - Runs only on a listed host, so previews and the *.vercel.app alias send nothing.
 * - Sends the path only, never the query string: page_location is origin + pathname.
 * - One page_view per route, including client-side navigations.
 * - Google signals and ad personalization off.
 * The ID and hosts come from lib/analytics.ts.
 *
 * ⚠️ This site serves Medi-Cal members. Google's terms forbid sending health or identifying data, and the realistic
 * leak is a query string (e.g. ?plan=molina&member=12345): that is why only origin + path is ever sent. The GA4
 * property's Enhanced Measurement has form interactions and site search OFF (set by tools/ga/create-properties.py,
 * 2026-09-27); keep them off, they capture what people type no matter what this file does.
 */
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

declare global {
  interface Window { dataLayer?: unknown[]; __gaConfigured?: string }
}

// gtag.js reads Arguments objects off the dataLayer queue, so this must push `arguments`, not an array.
function gtag(..._args: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  ;(window.dataLayer = window.dataLayer || []).push(arguments)
}

export default function Analytics({ id, hosts }: { id?: string; hosts: string[] }) {
  const pathname = usePathname()
  const [on, setOn] = useState(false)
  const hostKey = hosts.join(',')

  useEffect(() => {
    if (!id || !/^G-[A-Z0-9]{6,14}$/.test(id) || !hostKey.split(',').includes(window.location.hostname)) return
    if (window.__gaConfigured !== id) {
      gtag('js', new Date())
      gtag('config', id, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false })
      window.__gaConfigured = id
    }
    setOn(true)
    gtag('event', 'page_view', { page_location: window.location.origin + pathname, page_path: pathname })
  }, [id, hostKey, pathname])

  return on && id ? <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" /> : null
}
