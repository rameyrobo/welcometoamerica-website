interface CTABannerProps {
  heading: string
  subtext?: string
  /** Primary phone number CTA */
  phone?: string
  /** Text/SMS number CTA */
  textNumber?: string
  /** Kept for compatibility — the banner now always renders deep navy. */
  variant?: 'navy' | 'terracotta' | 'sage'
}

/**
 * Statement CTA (pairteam's "Here to support you." pattern):
 * one deep-navy closing section per page with a huge serif headline
 * and every action in one place — call, text, book, pay.
 * This replaces the old stacked CTABanner + PageCTAButtons duo.
 */
export default function CTABanner({
  heading,
  subtext,
  phone = '8449826374',
  textNumber = '5624725246',
}: CTABannerProps) {
  const formatPhone = (raw: string) =>
    raw.length === 10 ? `${raw.slice(0, 3)}-${raw.slice(3, 6)}-${raw.slice(6)}` : raw

  return (
    <section className="bg-navy-800 py-20 sm:py-28" aria-labelledby="cta-heading">
      <div className="section-wrapper text-center">
        <h2
          id="cta-heading"
          className="font-display text-5xl sm:text-6xl lg:text-7xl text-white font-medium leading-[1.05] tracking-tight mb-5"
        >
          {heading}
        </h2>

        {subtext && (
          <p className="text-white/75 font-body text-lg mb-10 max-w-xl mx-auto">
            {subtext}
          </p>
        )}

        {/* Primary actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a href={`tel:${phone}`} className="btn-primary min-w-[220px]">
            Call {formatPhone(phone)}
          </a>
          <a href={`sms:${textNumber}`} className="btn-outline-white min-w-[220px]">
            Text {formatPhone(textNumber)}
          </a>
        </div>

        {/* Secondary actions — appointments and payments */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3">
          <a
            href="https://calendly.com/welcometoamericacalendar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white transition-all"
          >
            Book an appointment — phone, Zoom, or in person →
          </a>
          <a
            href="https://secure.lawpay.com/pages/welcometoamericaservice/operating"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white transition-all"
          >
            Make a payment →
          </a>
        </div>

        <p className="mt-10 text-white/50 text-sm font-body">
          Available in English, Español, and العربية
        </p>
      </div>
    </section>
  )
}
