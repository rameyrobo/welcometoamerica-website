import Link from 'next/link'

const footerLinks = {
  services: [
    { href: '/immigration', label: 'Immigration Legal Services' },
    { href: '/immigration/green-card', label: 'Green Card' },
    { href: '/immigration/citizenship-classes', label: 'Citizenship Classes' },
    { href: '/community-health', label: 'Community Health Workers' },
    { href: '/medi-cal', label: 'Medi-Cal & Medicare' },
    { href: '/medi-cal/covered-ca', label: 'Covered California' },
  ],
  organization: [
    { href: '/about', label: 'About Us' },
    { href: '/locations', label: 'Locations' },
    { href: '/quick-links', label: 'Quick Links' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      {/* ── Main content ── */}
      <div className="section-wrapper py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand + mission */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <span className="font-display text-white text-2xl font-bold block">
                Welcome to America
              </span>
              <span className="text-terracotta-200 text-sm font-body">Services</span>
            </Link>

            <p className="text-white/75 text-sm leading-relaxed mb-4 max-w-sm">
              A Department of Justice Recognized nonprofit providing free and
              low-cost immigration legal services, community health workers, and
              healthcare enrollment across Southern California.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-white/10 text-white/90 px-3 py-1 rounded-full border border-white/20">
                ✓ DOJ Recognized
              </span>
              <span className="text-xs bg-white/10 text-white/90 px-3 py-1 rounded-full border border-white/20">
                ✓ Nonprofit 501(c)3
              </span>
              <span className="text-xs bg-white/10 text-white/90 px-3 py-1 rounded-full border border-white/20">
                ✓ English / Español / العربية
              </span>
            </div>

            {/* Legal IDs */}
            <div className="space-y-1">
              <p className="text-white/50 text-xs">
                Nonprofit Organization 501(c)3 #5698276
              </p>
              <p className="text-white/50 text-xs">
                NPI# 1477392561
              </p>
            </div>
          </div>

          {/* Services nav */}
          <div>
            <h3 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + org links */}
          <div>
            <h3 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <a
                  href="tel:8449826374"
                  className="flex items-start gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <span className="mt-0.5 shrink-0">📞</span>
                  <div>
                    <span className="block font-semibold text-white text-xs uppercase tracking-wide">
                      Main Line
                    </span>
                    844-982-6374
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:8332491563"
                  className="flex items-start gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <span className="mt-0.5 shrink-0">🏥</span>
                  <div>
                    <span className="block font-semibold text-white text-xs uppercase tracking-wide">
                      CHW Support Line
                    </span>
                    833-249-1563
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="sms:5624725246"
                  className="flex items-start gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <span className="mt-0.5 shrink-0">💬</span>
                  <div>
                    <span className="block font-semibold text-white text-xs uppercase tracking-wide">
                      Text Us
                    </span>
                    562-472-5246
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@welcometoamericaservices.com"
                  className="flex items-start gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <span className="mt-0.5 shrink-0">✉️</span>
                  <div>
                    <span className="block font-semibold text-white text-xs uppercase tracking-wide">
                      Email
                    </span>
                    info@welcometoamericaservices.com
                  </div>
                </a>
              </li>
            </ul>

            <h3 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-3">
              Organization
            </h3>
            <ul className="space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="section-wrapper py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/45 text-xs">
          <p>
            &copy; {currentYear} Welcome to America Services. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            DOJ Recognized Nonprofit &mdash; Authorized Immigration Legal Services
          </p>
        </div>
      </div>
    </footer>
  )
}
