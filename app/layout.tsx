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
    <>
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
        <Script>
        {`
            !function(f,b,e,v,n,t,s)
            {
                if(f.fbq) return;

                n=f.fbq=function() {
                    n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)
                };
            
                if(!f._fbq) f._fbq=n;

                n.push=n;n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
            }

                (window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '{198998089938990}');
                fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
            <img height="1" width="1" style="display:none" 
            src="https://www.facebook.com/tr?id={198998089938990}&ev=PageView&noscript=1"/>
        </noscript>
        <Script async src="https://tag.clearbitscripts.com/v1/pk_3ac8e757d785ce4a8c4e9e6c7b8b1516/tags.js" referrerPolicy="strict-origin-when-cross-origin"></Script>
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
    </>
  )
}
