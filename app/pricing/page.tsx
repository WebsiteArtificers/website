import { GetPricing } from '@/components/components';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';

export default async function Page() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <GetPricing
      session={session}
      user={session?.user}
      products={products}
      subscription={subscription}
    />
  );
}