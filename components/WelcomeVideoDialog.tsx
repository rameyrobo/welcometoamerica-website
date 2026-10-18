'use client'

import { useRef, type ReactNode } from 'react'
import { Play, X } from 'lucide-react'

/**
 * The hero's "Watch" button: opens Inez's full welcome (with sound and captions) in a native
 * <dialog>. showModal() gives focus trapping, Escape to close and an inert page behind it for
 * free. The player is passed in as children (WelcomePlayer, a server component), starts when the
 * dialog opens (the click is the user gesture that allows sound), and pauses when it closes.
 */
export default function WelcomeVideoDialog({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const video = () => dialog.current?.querySelector('video') ?? null

  const open = () => {
    dialog.current?.showModal()
    video()?.play().catch(() => {})
  }
  const close = () => dialog.current?.close()

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group inline-flex items-center gap-3 text-left font-body text-white"
      >
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/60 transition-colors group-hover:bg-white/25">
          <Play className="size-5 translate-x-px fill-current" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-semibold">Watch a welcome from Inez</span>
          <span className="block text-sm text-white/75">
            2 minutes, with captions · <span lang="es">Video en inglés con subtítulos</span>
          </span>
        </span>
      </button>

      <dialog
        ref={dialog}
        onClose={() => video()?.pause()}
        onClick={(e) => { if (e.target === dialog.current) close() }}
        aria-labelledby="welcome-dialog-heading"
        className="w-[calc(100%-2rem)] max-w-5xl rounded-2xl bg-navy-900 p-4 text-white backdrop:bg-navy-900/85 sm:p-6"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 id="welcome-dialog-heading" className="font-display text-xl sm:text-2xl">
            A welcome from Inez Gutierrez
          </h2>
          <button
            type="button"
            onClick={close}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Close video"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        {children}
      </dialog>
    </>
  )
}
