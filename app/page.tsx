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
          Offering, OfferingDescription, Welcome,
          Supercharge, Pricing, Community, Magic, LoadingScreen, GetPricing, PricingFAQ, ToPricingComparison
        }
from '../components/components'

export const dynamic = 'force-dynamic'

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
      <Supercharge />
      <Pricing />
      <Community />
      <Magic />
    </Suspense>
  )
}
