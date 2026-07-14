import type { Metadata } from 'next'
import { Fraunces, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Display font — warm editorial serif in the pairteam mold
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-playfair', // keep the CSS var name so nothing else changes
  display: 'swap',
  weight: ['400', '500', '600'],
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
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
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

        <Footer />
      </body>
    </html>
  )
}
