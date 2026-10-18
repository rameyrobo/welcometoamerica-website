import WelcomePlayer from '@/components/WelcomePlayer'

/**
 * Inez's two-minute welcome on /community-health. She asked for it near the top of the page on
 * 09-15: "I need my face to be on there... if they don't see it's me they're calling my ex."
 * The player itself (sources, captions, focus ring, preload) lives in WelcomePlayer, shared with
 * the home hero's Watch dialog.
 */
export default function IntroVideo() {
  return (
    <section className="py-16 sm:py-20 bg-white" aria-labelledby="intro-video-heading">
      <div className="section-wrapper max-w-4xl">
        <span className="eyebrow">A message from our co-founder</span>
        <h2 id="intro-video-heading" className="section-title mb-8">
          Meet Inez Gutierrez.
        </h2>
        <WelcomePlayer describedBy="intro-video-note" />
        <p id="intro-video-note" className="mt-4 font-body text-sm text-ink/70">
          2 minutes · English, with captions ·{' '}
          <span lang="es">Video en inglés con subtítulos</span>
        </p>
      </div>
    </section>
  )
}
