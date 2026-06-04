import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimer regarding the services provided by Welcome to America Services.',
}

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-navy py-14">
        <div className="section-wrapper">
          <h1 className="font-display text-4xl text-white font-bold">Disclaimer</h1>
          <p className="text-white/60 font-body mt-2 text-sm">Last updated: 2024</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="section-wrapper max-w-3xl">
          <div className="prose prose-sm max-w-none space-y-8 font-body text-ink/80">

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">Not an Attorney-Client Relationship</h2>
              <p className="text-sm leading-relaxed">
                Welcome to America Services Inc. is a Department of Justice (DOJ) Recognized Organization, 
                authorized to provide certain immigration legal services. The information provided on this 
                website is for general informational purposes only and does not constitute legal advice. 
                Accessing or using this website does not create an attorney-client relationship between 
                you and Welcome to America Services.
              </p>
            </div>

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">DOJ Accreditation</h2>
              <p className="text-sm leading-relaxed">
                Welcome to America Services is a DOJ-recognized organization with accredited 
                representatives authorized to provide immigration legal services. We are not a 
                law firm. Our accredited representatives are authorized to practice immigration 
                law before the Department of Homeland Security (DHS) and the Executive Office 
                for Immigration Review (EOIR), within the scope of their accreditation.
              </p>
            </div>

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">Immigration Fraud Warning</h2>
              <p className="text-sm leading-relaxed">
                Beware of notarios, consultants, and unauthorized individuals who claim to offer 
                immigration legal services. Only attorneys or DOJ-accredited representatives are 
                authorized to provide immigration legal advice. Welcome to America Services is a 
                legitimate DOJ-recognized organization. If you have been the victim of immigration 
                fraud, contact us — we can help.
              </p>
            </div>

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">Information Accuracy</h2>
              <p className="text-sm leading-relaxed">
                While we strive to ensure that information on this website is accurate and current, 
                immigration laws and policies change frequently. The information provided should not 
                be relied upon as legal advice. We strongly encourage you to speak directly with 
                one of our accredited representatives to discuss your specific situation.
              </p>
            </div>

            <div className="card">
              <h2 className="font-display text-xl text-navy font-bold mb-4">Healthcare Information</h2>
              <p className="text-sm leading-relaxed">
                The healthcare and enrollment information provided on this website is for general 
                informational purposes only. Eligibility for Medi-Cal, Medicare, Covered California, 
                and other programs depends on individual circumstances. Welcome to America Services 
                is not responsible for individual enrollment decisions or plan outcomes.
              </p>
            </div>

            <div className="bg-navy/5 rounded-xl p-6">
              <p className="font-body text-sm text-ink/70 leading-relaxed">
                For questions about our services, please{' '}
                <a href="tel:8449826374" className="text-terracotta font-semibold hover:underline">
                  call us at 844-982-6374
                </a>{' '}
                or{' '}
                <Link href="/about" className="text-terracotta font-semibold hover:underline">
                  learn more about our organization
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
