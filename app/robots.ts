import type { MetadataRoute } from 'next'

// Crawlers: everything but the admin. The sitemap is submitted to Search Console (tools/ga/sc-onboard.py).
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/', disallow: ['/admin'] }, sitemap: 'https://www.welcometoamericaservices.com/sitemap.xml' }
}
