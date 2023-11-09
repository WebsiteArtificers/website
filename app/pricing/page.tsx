import { GetPricing } from '@/components/components';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import { Suspense } from 'react';
import { LoadingScreen } from '@/components/components';

const meta = {
  title: 'The Website Artificers: Value-Driven Pricing',
  description: "Explore transparent pricing for Website Artificers' web development services. Find tailored packages to suit your business needs and budget. Get value-driven solutions for your online presence today.",
  cardImage: '/images/website-artificer-logo.ico',
  robots: 'follow, index',
  favicon: '/images/website-artificer-logo.ico',
  url: process.env.NEXT_PUBLIC_SITE_URL + '/pricing',
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

export default async function Page() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
      <Suspense fallback={<LoadingScreen />}>
          <GetPricing
            session={session}
            user={session?.user}
            products={products}
            subscription={subscription}
          />
      </Suspense>
  );
}