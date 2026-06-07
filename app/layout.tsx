import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akram Ssengooba — Software Developer (Uganda)',
  description:
    "Akram Ssengooba is a software developer based in Uganda. He builds all kinds of software, is reputable, and open to opportunities.",
  generator: 'v0.app',
  keywords: [
    'Akram Ssengooba',
    'Software Developer',
    'Full Stack Developer',
    'Uganda',
    'React',
    'Next.js',
    'Web Developer',
  ],
  authors: [{ name: 'Akram Ssengooba' }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: 'Akram Ssengooba — Software Developer',
    description:
      'Akram Ssengooba is a software developer based in Uganda who builds robust, user-focused software and is open to new opportunities.',
    type: 'website',
    images: ['/images/portrait.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akram Ssengooba — Software Developer',
    description:
      'Software developer based in Uganda. Builds all kinds of software, reputable and open to opportunities.',
    images: ['/images/portrait.jpeg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-96x96.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Akram Ssengooba',
    jobTitle: 'Software Developer',
    description:
      'Akram Ssengooba is a software developer based in Uganda. He builds all kinds of software, is reputable, and open to opportunities.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UG',
    },
    sameAs: [],
  }

  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="font-sans antialiased bg-background min-h-screen overflow-hidden">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
