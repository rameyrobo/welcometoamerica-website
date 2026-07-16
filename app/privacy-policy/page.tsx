import type { Metadata } from 'next'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Welcome to America Services privacy policy regarding the collection and use of personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-navy py-14">
        <div className="section-wrapper">
          <h1 className="font-display text-4xl text-white font-bold">Privacy Policy</h1>
          <p className="text-white/60 font-body mt-2 text-sm">Last updated: 2024</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="section-wrapper max-w-3xl">
          <div className="space-y-8 font-body text-ink/80">

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">Introduction</h2>
              <p className="text-sm leading-relaxed">
                Welcome to America Services Inc. ("Welcome to America," "we," "us," or "our") 
                is committed to protecting your privacy. This Privacy Policy describes how we 
                collect, use, and safeguard your personal information when you visit our website 
                or use our services.
              </p>
            </div>

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">Information We Collect</h2>
              <p className="text-sm leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="space-y-2.5">
                {[
                  { title: 'Contact Information', desc: 'Name, phone number, email address, and mailing address when you contact us or request services.' },
                  { title: 'Immigration Information', desc: 'Immigration status and case-related information necessary to provide immigration legal services — shared only with your consent and as required to provide services.' },
                  { title: 'Healthcare Information', desc: 'Health coverage status and related information to assist with Medi-Cal, Medicare, and Covered California enrollment.' },
                  { title: 'Website Usage Data', desc: 'Anonymous data about how visitors use our website, used only to improve the site experience.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="text-sage font-bold mt-0.5">•</span>
                    <div>
                      <span className="font-semibold text-navy">{item.title}:</span>{' '}
                      <span className="text-ink/70">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">How We Use Your Information</h2>
              <ul className="space-y-2.5">
                {[
                  'To provide immigration legal services and healthcare enrollment assistance',
                  'To communicate with you about your case or enrollment',
                  'To comply with legal obligations',
                  'To improve our services and website',
                  'To send appointment reminders and service updates (with your consent)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/75 leading-relaxed">
                    <Check className="size-4 text-sage shrink-0 mt-0.5" strokeWidth={3} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">Data Security</h2>
              <p className="text-sm leading-relaxed">
                We take the security of your personal information seriously. We use bank-grade 
                encryption, secure and distributed infrastructure, and continuous backups to 
                protect your data. We do not sell, trade, or share your personal information 
                with third parties without your explicit consent, except as required by law.
              </p>
            </div>

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">SMS / Text Message Policy</h2>
              <p className="text-sm leading-relaxed mb-3">
                By texting Welcome to America Services at 562-472-5246, you consent to receive 
                SMS messages from us regarding your case, appointments, and services. Message and 
                data rates may apply.
              </p>
              <ul className="space-y-1.5">
                {[
                  'You can opt-out at any time by replying STOP',
                  'For help, reply HELP or call 844-982-6374',
                  'We do not share your phone number with third parties for marketing purposes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                    <span className="text-sage">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">Your Rights</h2>
              <p className="text-sm leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="space-y-2">
                {[
                  'Access the personal information we hold about you',
                  'Request correction of inaccurate information',
                  'Request deletion of your personal information (subject to legal obligations)',
                  'Withdraw consent for us to contact you',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                    <Check className="size-4 text-sage shrink-0 mt-0.5" strokeWidth={3} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">Contact Us</h2>
              <p className="text-sm leading-relaxed">
                For privacy-related questions or requests, contact us:
              </p>
              <div className="mt-3 space-y-1.5 text-sm">
                <p><span className="font-semibold text-navy">Phone:</span>{' '}
                  <a href="tel:8449826374" className="text-terracotta hover:underline">844-982-6374</a>
                </p>
                <p><span className="font-semibold text-navy">Email:</span>{' '}
                  <a href="mailto:info@welcometoamericaservices.com" className="text-terracotta hover:underline">
                    info@welcometoamericaservices.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
