import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageCTAButtons from '@/components/PageCTAButtons'

// Display font — dignified, warm headlines
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Body font — highly legible, accessible, humanist
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Welcome to America Services | DOJ-Recognized Immigration & Health',
    template: '%s | Welcome to America Services',
  },
  description:
    'Welcome to America is a Department of Justice Recognized nonprofit providing free and low-cost immigration legal services, community health workers, and Medi-Cal enrollment across Southern California.',
  keywords: [
    'immigration legal services',
    'DOJ recognized',
    'nonprofit immigration',
    'Medi-Cal enrollment',
    'community health worker',
    'Southern California immigration',
    'citizenship application',
    'green card',
    'covered california',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://welcometoamericaservices.com',
    siteName: 'Welcome to America Services',
    title: 'Welcome to America Services | DOJ-Recognized Immigration & Health',
    description:
      'Free and low-cost immigration legal services, community health workers, and Medi-Cal enrollment. DOJ Recognized Nonprofit.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="bg-cream text-ink font-body antialiased">
        {/* Skip to main content — keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:rounded"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Persistent CTAs — shown above footer on every page */}
        <PageCTAButtons />

        <Footer />
      </body>
    </html>
  )
}
