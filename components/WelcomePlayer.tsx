import { MEDIA_BASE } from '@/lib/media'

/**
 * The <video> element for Inez's two-minute welcome (Mario's cut, delivered 2026-10-13), shared by
 * the section on /community-health (IntroVideo) and the dialog behind the home hero's "Watch"
 * button (WelcomeVideoDialog).
 *
 * The video and poster are in R2. The captions file is in /public on purpose: a <track> from
 * another origin only loads with CORS headers AND crossOrigin on the <video>, and if either is
 * ever missing the whole video fails to load, not just the captions. Same-origin captions have
 * no such failure mode, and a correction to them is a readable text diff.
 *
 * The ring uses :focus, not :focus-visible. Tabbing into a <video> puts focus on the
 * browser's own play button inside the player, so :focus-visible never matches the <video>
 * itself and keyboard users would get no ring around it (preflight caught this 2026-10-13).
 *
 * preload="none" so nobody downloads 40 MB just by opening the page. The 720p file is offered
 * first to small screens; a browser that ignores `media` on <source> also gets the 720p.
 */
export default function WelcomePlayer({ describedBy }: { describedBy?: string }) {
  const base = `${MEDIA_BASE}/video/inez-welcome`
  return (
    <video
      controls
      preload="none"
      playsInline
      poster={`${base}-poster.jpg`}
      width={1920}
      height={1080}
      className="w-full h-auto aspect-video rounded-2xl bg-navy-900 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-terracotta"
      aria-label="Welcome video from Inez Gutierrez, co-founder of Welcome to America"
      aria-describedby={describedBy}
    >
      <source src={`${base}-720.mp4`} type="video/mp4" media="(max-width: 767px)" />
      <source src={`${base}-1080.mp4`} type="video/mp4" />
      <track kind="captions" src="/captions/inez-welcome.en.vtt" srcLang="en" label="English" />
      <p>
        Your browser can&apos;t play this video.{' '}
        <a href={`${base}-720.mp4`}>Download it here</a>.
      </p>
    </video>
  )
}
