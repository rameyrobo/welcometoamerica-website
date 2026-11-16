import type { Metadata } from 'next'

const SITE_NAME = 'Welcome to America Services'

/**
 * Adds the page's own canonical and Open Graph block to its existing title and description.
 * A page-level openGraph replaces the layout's whole object, and with it the inherited generated
 * card image (app/opengraph-image.tsx), so the pieces are restated here.
 * `path` is relative; metadataBase in the layout makes it absolute.
 */
export function withSeo(path: string, meta: { title: string; description: string }): Metadata {
  const ogTitle = path === '/' ? meta.title : `${meta.title} | ${SITE_NAME}`
  return {
    ...meta,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      url: path,
      title: ogTitle,
      description: meta.description,
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
  }
}
