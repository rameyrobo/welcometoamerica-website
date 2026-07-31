'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * GA4 for a site that serves Medi-Cal members.
 *
 * ⚠️ READ THIS BEFORE CHANGING ANYTHING HERE.
 *
 * Google's terms prohibit sending health or personally-identifying data to
 * Analytics, and our visitors are Medi-Cal members with Molina, IEHP or LA
 * Care. The realistic leak is not a deliberate one — it is a query string.
 * A URL like `/apply?plan=molina&member=12345` would be sent verbatim as
 * `page_location` by a default GA install, and now their plan and member ID
 * live in Google's logs forever.
 *
 * So this component deliberately does the following:
 *
 *   1. NEVER sends the query string. We read `usePathname()` only — not
 *      `useSearchParams()` — so the search params are not merely stripped,
 *      they are never in scope. (Bonus: it also sidesteps the Suspense
 *      boundary that `useSearchParams` forces in the App Router.)
 *   2. `send_page_view: false`, and we fire page_view manually on route
 *      change. GA4's automatic pageview reads `window.location.href`, query
 *      string included, which is exactly what we are avoiding.
 *   3. Google Signals and ad personalization OFF. A health nonprofit should
 *      not be feeding an advertising graph, and leaving these on would put
 *      this site's audience into remarketing pools.
 *
 * ⚠️ Code is only half of it. Enhanced Measurement is configured in the GA UI,
 * NOT here, and its "Form interactions" and "Site search" options will happily
 * capture form fields and query params no matter what this file says. Both must
 * be turned OFF in Admin → Data Streams → Enhanced Measurement.
 *
 * No NEXT_PUBLIC_GA_ID set (local dev, previews, or before the property
 * exists) means this renders nothing at all — no script, no requests.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    dataLayer: unknown[][]
  }
}

function gtag(...args: unknown[]) {
  // dataLayer is a queue: pushing before gtag.js finishes loading is safe and
  // is why the initial page_view is never lost to a race with the <Script>.
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_ID) return
    gtag('event', 'page_view', {
      page_path: pathname,
      // Rebuilt from origin + pathname on purpose. Never window.location.href.
      page_location: window.location.origin + pathname,
      page_title: document.title,
    })
  }, [pathname])

  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            send_page_view: false,
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  )
}
