import './globals.css'
import { Suspense } from 'react'
import { Navbar, Footer, LoadingScreen } from '../components/components'
import SupabaseProvider from './supabase-provider';
import { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const meta = {
  title: 'The Website Artificers: Your Online Solution',
  description: 'Your customizable website solution that supercharges your online presence throughout the internet.',
  cardImage: '/images/website-artificer-logo.ico',
  robots: 'follow, index',
  favicon: '/images/website-artificer-logo.ico',
  url: process.env.NEXT_PUBLIC_SITE_URL,
  type: 'website'
};

export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@websiteartificers',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/website-artificer-logo.ico" />
        <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-BY6RR52CSJ"></Script>
        <Script strategy="afterInteractive">
          {
            `  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-BY6RR52CSJ');`
          }
        </Script>

      </head>
      <body>
        <SupabaseProvider>
          <Suspense fallback={<LoadingScreen />}>
            <main>
              <Navbar />
              {children}
              <Footer />
            </main>
          </Suspense>
        </SupabaseProvider>
        <Analytics />
      </body>
    </html>
  )
}
