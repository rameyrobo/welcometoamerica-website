/**
 * Public base URL for Welcome to America's media in Cloudflare R2.
 *
 * Bucket: wta-hc-media (shared by Welcome to America and Healthy Connections, kept apart from
 * every other client so her files can be handed over or removed on their own).
 *
 * Served for now by the wta-hc-content instance's /media route (byte ranges included, so video
 * plays on iOS), because welcometoamericaservices.com is not a Cloudflare zone yet. When the DNS
 * move happens, attach media.welcometoamericaservices.com to the bucket and change this one line.
 *
 * ⛔ Client media never goes in this repo, and never through an r2.dev URL. If a file needs to
 *    be on the site, it goes in the bucket and is referenced from here.
 */
// NEXT_PUBLIC_MEDIA_BASE exists only to point a local build at a local copy for testing.
export const MEDIA_BASE =
  process.env.NEXT_PUBLIC_MEDIA_BASE ?? 'https://wta-hc-content.paper-brain.opalstacked.com/media'
