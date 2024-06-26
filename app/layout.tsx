"use client"
import './globals.css'
import { Suspense } from 'react'
import { Navbar, Footer, LoadingScreen } from '../components/components'
import SupabaseProvider from './supabase-provider';
import { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { useRouter } from "next/router";
import * as fbq from "@/lib/fpixel";
import { useEffect } from 'react';

export default function RootLayout({
  children
}: PropsWithChildren) {

  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <html lang='en'>
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

        {/* Global Site Code Pixel - Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', ${fbq.FB_PIXEL_ID});
            `,
          }}
        />
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
