import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import {
  ArrowRight, Building2, CalendarDays, HeartPulse, Hospital,
  Mail, MapPin, MessageCircle, Phone, Video, Waves,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Locations',
  description:
    'Welcome to America Services locations in Hesperia and Long Beach, CA. By appointment only. Services also available by phone, Zoom, and virtually.',
}

const locations = [
  {
    city: 'Hesperia',
    address: '17130 Sequoia St.',
    suite: 'Suite #104 & #106',
    cityStateZip: 'Hesperia, CA 92345',
    mapsHref: 'https://maps.google.com/?q=17130+Sequoia+St+Hesperia+CA+92345',
    icon: Building2,
  },
  {
    city: 'Long Beach',
    address: '111 W. Ocean Blvd',
    suite: 'Suite #400',
    cityStateZip: 'Long Beach, CA 90802',
    mapsHref: 'https://maps.google.com/?q=111+W+Ocean+Blvd+Long+Beach+CA+90802',
    icon: Waves,
  },
]

const contactMethods = [
  {
    icon: Phone,
    title: 'Main Line',
    value: '844-WTAMERICA',
    sub: '844-982-6374',
    href: 'tel:8449826374',
    cta: 'Call Now',
  },
  {
    icon: HeartPulse,
    title: 'CHW Support Line',
    value: '833-249-1563',
    sub: 'Community Health Workers',
    href: 'tel:8332491563',
    cta: 'Call Now',
  },
  {
    icon: MessageCircle,
    title: 'Text Us',
    value: '562-472-5246',
    sub: 'Text anytime',
    href: 'sms:5624725246',
    cta: 'Text Now',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@welcometoamericaservices.com',
    sub: 'We respond promptly',
    href: 'mailto:info@welcometoamericaservices.com',
    cta: 'Email Us',
  },
]

const serviceMethods = [
  { icon: Building2, label: 'In-Person', desc: 'Visit one of our two Southern California offices. By appointment only.' },
  { icon: Phone, label: 'By Phone', desc: 'Call or text — we handle everything over the phone.' },
  { icon: Video, label: 'Via Zoom', desc: 'Virtual appointments available.' },
  { icon: Hospital, label: 'Hospital Visits', desc: 'We come to you when you need us most.' },
]

export default function LocationsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy py-14">
        <div className="section-wrapper">
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold">Locations</h1>
          <p className="text-white/70 font-body mt-3 text-lg">
            Two offices in Southern California — plus phone, virtual, and hospital services.
          </p>
        </div>
      </section>

      {/* By-appointment notice */}
      <div className="bg-terracotta">
        <div className="section-wrapper py-3 text-center">
          <p className="text-white font-body font-semibold text-sm tracking-wide">
            <CalendarDays className="inline size-4 -mt-0.5 mr-1" aria-hidden="true" />
            By Appointment Only · <span className="italic opacity-90">Por Cita Solamente</span>
          </p>
        </div>
      </div>

      {/* Office locations */}
      <section className="py-16 bg-cream">
        <div className="section-wrapper max-w-4xl">
          <h2 className="section-title mb-8 text-center">Our Offices</h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {locations.map((loc) => (
              <div key={loc.city} className="card hover:border-navy/30 transition-colors">
                <div className="flex items-start gap-4">
                  <loc.icon className="size-8 text-navy shrink-0 mt-1" aria-hidden="true" />
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-navy font-bold mb-3">{loc.city}</h3>
                    <address className="not-italic font-body text-base text-ink/80 leading-relaxed mb-4">
                      {loc.address}<br />
                      {loc.suite}<br />
                      <strong>{loc.cityStateZip}</strong>
                    </address>
                    <div className="space-y-2">
                      <a
                        href={loc.mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-terracotta font-body font-semibold text-sm hover:underline"
                      >
                        <MapPin className="size-4" aria-hidden="true" /> Get Directions <ArrowRight className="size-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How we serve you */}
          <h2 className="section-title mb-6 text-center">How We Serve You</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {serviceMethods.map((method) => (
              <div key={method.label} className="card text-center">
                <method.icon className="size-7 mx-auto mb-3 text-navy" aria-hidden="true" />
                <p className="font-body font-bold text-navy text-sm mb-2">{method.label}</p>
                <p className="font-body text-xs text-ink/60 leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact methods */}
          <h2 className="section-title mb-6 text-center">Get in Touch</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="card group hover:border-terracotta/30 flex items-start gap-5 no-underline"
              >
                <method.icon className="size-8 flex-shrink-0 text-terracotta" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <p className="font-body text-xs text-ink/50 uppercase tracking-wider mb-1">{method.title}</p>
                  <p className="font-body font-bold text-navy text-base truncate group-hover:text-terracotta transition-colors">
                    {method.value}
                  </p>
                  <p className="font-body text-xs text-ink/55 mt-0.5">{method.sub}</p>
                  <span className="inline-block mt-3 text-terracotta font-body font-semibold text-sm group-hover:underline">
                    {method.cta} <ArrowRight className="inline size-3.5 -mt-0.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Here to support you." subtext="Call or text us today — or book an appointment by phone, Zoom, or in person." />
    </>
  )
}
