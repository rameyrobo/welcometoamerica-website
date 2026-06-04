/**
 * PageCTAButtons — persistent CTA strip shown at the bottom of every content page,
 * above the footer. Two action buttons: Appointments and Make a Payment.
 *
 * Usage: <PageCTAButtons /> — no props needed.
 */
export default function PageCTAButtons() {
  return (
    <section
      className="bg-navy/5 border-t-2 border-navy/10 py-10"
      aria-label="Schedule appointment or make a payment"
    >
      <div className="section-wrapper">
        {/* Heading */}
        <p className="text-center font-display text-2xl text-navy font-bold mb-6">
          Ready to Take the Next Step?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-stretch justify-center max-w-2xl mx-auto">

          {/* ── APPOINTMENTS ── */}
          <a
            href="https://calendly.com/welcometoamerica"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-4 flex-1
              bg-terracotta text-white
              px-6 py-5 rounded-xl
              font-body font-semibold
              hover:bg-terracotta-600
              active:scale-[0.98]
              transition-all duration-200
              shadow-md hover:shadow-lg
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta
            "
          >
            <span className="text-3xl shrink-0" aria-hidden="true">📅</span>
            <span>
              <span className="block text-base font-bold tracking-wide uppercase">
                Appointments
              </span>
              <span className="block text-xs text-white/85 mt-0.5 leading-snug">
                Make an appointment with us via<br />
                Phone / Zoom / In-Person
              </span>
              <span className="block text-xs text-white/65 mt-1 leading-snug">
                Haga cita con nosotros por<br />
                Teléfono / Zoom / En Persona
              </span>
            </span>
          </a>

          {/* ── MAKE A PAYMENT ── */}
          <a
            href="https://pay.welcometoamericaservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-4 flex-1
              bg-white border-2 border-sage text-sage
              px-6 py-5 rounded-xl
              font-body font-semibold
              hover:bg-sage hover:text-white hover:border-sage
              active:scale-[0.98]
              transition-all duration-200
              shadow-md hover:shadow-lg
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage
            "
          >
            <span className="text-3xl shrink-0" aria-hidden="true">💳</span>
            <span>
              <span className="block text-base font-bold tracking-wide uppercase">
                Make a Payment
              </span>
              <span className="block text-xs mt-0.5 leading-snug">
                For Immigration Services<br />
                Pay by Card / Bank Account
              </span>
              <span className="block text-xs opacity-70 mt-1 leading-snug">
                Para Servicios de Inmigración<br />
                Tarjeta / Cuenta de Banco
              </span>
            </span>
          </a>

        </div>
      </div>
    </section>
  )
}
