'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

/**
 * Silent b-roll loop behind a hero (Ramey 2026-10-18: "add mario's video to the header", muted loop
 * plus a play button for the full video). 15.8 s cut from Mario's welcome video: family walking,
 * group at a table, homework, a walk in the park, a community circle. No talking head, no
 * on-screen text, no audio track. Files are in R2 (wta-hc-media, video/inez-hero-loop-*).
 *
 * Decorative, so the <video> is hidden from assistive tech; the hero's text carries the meaning.
 * It never autoplays from the markup: JS starts it only when the visitor has not asked for
 * reduced motion and is not on Save-Data, so those visitors see the still poster and nothing
 * moves. Anything that moves for more than 5 s needs a way to stop it (WCAG 2.2.2), hence the
 * pause button, and a manual pause sticks. It also pauses while scrolled out of view.
 */
export default function HeroVideoBackground({
  src720,
  src1080,
  poster,
}: {
  src720: string
  src1080: string
  poster: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    if (reduce || saveData) return
    setCanPlay(true)
    const start = () => { if (!userPaused.current) v.play().catch(() => {}) }
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : v.pause()), { threshold: 0.1 })
    io.observe(v)
    return () => io.disconnect()
  }, [])

  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) { userPaused.current = false; v.play().catch(() => {}) }
    else { userPaused.current = true; v.pause() }
  }

  return (
    <>
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-hidden="true"
        tabIndex={-1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={src720} type="video/mp4" media="(max-width: 767px)" />
        <source src={src1080} type="video/mp4" />
      </video>
      {canPlay && (
        <button
          type="button"
          onClick={toggle}
          className="absolute bottom-4 right-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-navy-900/60 text-white hover:bg-navy-900/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={playing ? 'Pause background video' : 'Play background video'}
        >
          {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
        </button>
      )}
    </>
  )
}
