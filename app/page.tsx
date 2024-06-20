import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Suspense } from 'react'
import 
        { 
          Hero, Definition, Overview,
          Offering, OfferingDescription, Welcome, Pricing, Community, Magic, LoadingScreen, GetPricing, PricingFAQ, ToPricingComparison
        }
from '../components/components'

export const dynamic = 'force-dynamic'

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

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Hero />
      <GetPricing
        session={session}
        user={session?.user}
        products={products}
        subscription={subscription}
      />
      <ToPricingComparison />
      <Definition />
      <Overview />
      <Offering />
      <OfferingDescription />
      <Welcome />
      <PricingFAQ />
      <Pricing />
      <Community />
      <Magic />
    </Suspense>
  )
}
