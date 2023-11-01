import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Suspense } from 'react'
import 
        { 
          Hero, Definition, Overview,
          Offering, OfferingDescription, Welcome,
          Supercharge, Pricing, Community, Magic, LoadingScreen
        }
from '../components/components'

export const dynamic = 'force-dynamic'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Hero />
      <Definition />
      <Overview />
      <Offering />
      <OfferingDescription />
      <Welcome />
      <Supercharge />
      <Pricing />
      <Community />
      <Magic />
    </Suspense>
  )
}
