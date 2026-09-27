import type { MetadataRoute } from 'next'

// Every public page. The base matches metadataBase in app/layout.tsx (www).
const BASE = 'https://www.welcometoamericaservices.com'
const PAGES = [
  '', '/about', '/community-health', '/locations', '/quick-links',
  '/immigration', '/immigration/citizenship-classes', '/immigration/clases-de-ciudadania',
  '/immigration/fee-waiver', '/immigration/green-card',
  '/medi-cal', '/medi-cal/covered-ca', '/medi-cal/medicare',
  '/privacy-policy', '/disclaimer',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({ url: `${BASE}${p || '/'}` }))
}
