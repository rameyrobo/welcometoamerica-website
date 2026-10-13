/**
 * Public base URL for Welcome to America's media in Cloudflare R2.
 *
 * Bucket: welcometoamerica-media (one bucket per client, so her files can be handed over or
 * removed on their own). Served through the bucket's custom domain on her own zone.
 *
 * ⛔ Client media never goes in this repo, and never through an r2.dev URL. If a file needs to
 *    be on the site, it goes in the bucket and is referenced from here.
 */
// NEXT_PUBLIC_MEDIA_BASE exists only to point a local build at a local copy for testing.
export const MEDIA_BASE =
  process.env.NEXT_PUBLIC_MEDIA_BASE ?? 'https://media.welcometoamericaservices.com'
