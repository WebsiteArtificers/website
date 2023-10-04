'use client';

import Button from '@/components/ui/Button';
import { Database } from '@/types_db';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-clients';
import { Session, User } from '@supabase/supabase-js';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './getPricing.css';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  session: Session | null;
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

type BillingInterval = 'lifetime' | 'year' | 'month' | null;

export default function GetPricing({
  session,
  user,
  products,
  subscription
}: Props) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (subscription) {
      return router.push('/account');
    }
    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  if (!products.length)
    return (
      <section className="getPricing__section">
        <div className="getPricing__container">
          <div className="getPricing__subcontainer"></div>
          <p className="getPricing__paragraph">
            No subscription pricing plans found. Create them in your{' '}
            <a
              className="getPricing__link"
              href="https://dashboard.stripe.com/products"
              rel="noopener noreferrer"
              target="_blank"
            >
              Stripe Dashboard
            </a>
            .
          </p>
        </div>
      </section>
    );

  if (products.length === 1)
    return (
      <section className="getPricing__section">
        <div className="getPricing__container">
          <div className="getPricing__subcontainer">
            <h1 className="getPricing__header">
              Pricing Plans
            </h1>
            <p className="getPricing__paragraph">
              tailored plans. <span className="getPricing__paragraph--span">built for you.</span>
            </p>
            <div className="getPricing__name--container">
              <div className="getPricing__name--subcontainer">
                <div className="getPricing__name">
                  {products[0].name}
                </div>
              </div>
            </div>
            <div className="getPricing__pricing--container">
              {products[0].prices?.map((price) => {
                const priceString =
                  price.unit_amount &&
                  new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: price.currency!,
                    minimumFractionDigits: 0
                  }).format(price.unit_amount / 100);

                return (
                  <div
                    key={price.interval}
                    className="getPricing__pricing--subcontainer"
                  >
                    <div className="getPricing__pricing--wrapper">
                      <p className='getPricing__pricing--lettering'>
                        <span className="getPricing__pricing--priceString">
                          {priceString}
                        </span>
                        <span className="getPricing__pricing--priceInterval">
                          /{price.interval}
                        </span>
                      </p>
                      <p className="getPricing__pricing--priceDescription">{price.description}</p>
                      <Button
                        variant="slim"
                        type="button"
                        disabled={false}
                        loading={priceIdLoading === price.id}
                        onClick={() => handleCheckout(price)}
                        className="getPricing__pricing--button"
                      >
                        {products[0].name ===
                        subscription?.prices?.products?.name
                          ? 'Manage'
                          : 'Subscribe'}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section className="getPricing__section">
      <div className="getPricing__container">
        <div className="getPricing__subcontainer">
          <h1 className="getPricing__header">
            Pricing Plans
          </h1>
          <p className="getPricing__paragraph">
              tailored plans. <span className="getPricing__paragraph--span">built for you.</span>
          </p>
          <div className="getPricing__mainPricing--container">
            {intervals.includes('month') && (
              <button
                onClick={() => setBillingInterval('month')}
                type="button"
                className={`${
                  billingInterval === 'month'
                    ? 'button__billingInterval--active'
                    : 'button__billingInterval--inactive'
                } button__billingInterval`}
              >
                Monthly Billing
              </button>
            )}
            {intervals.includes('year') && (
              <button
                onClick={() => setBillingInterval('year')}
                type="button"
                className={`${
                  billingInterval === 'year'
                    ? 'button__billingInterval--active'
                    : 'button__billingInterval--inactive'
                } button__billingInterval`}
              >
                Yearly Billing
              </button>
            )}
            {intervals.includes(null) && (
              <button
                onClick={() => setBillingInterval(null)}
                type="button"
                className={`${
                  billingInterval === null
                    ? 'button__billingInterval--active'
                    : 'button__billingInterval--inactive'
                } button__billingInterval`}
              >
                Custom Billing
              </button>
            )}
          </div>
        </div>
        <div className="getPricing__product">
          {products.map((product) => {
            const price = product?.prices?.find(
              (price) => price.interval === billingInterval
            );
            if (!price) return null;
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: price.currency!,
              minimumFractionDigits: 0
            }).format((price?.unit_amount || 0) / 100);
            return (
              <div
                key={product.id}
                className={cn(
                  'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900',
                  {
                    'border border-pink-500': subscription
                      ? product.name === subscription?.prices?.products?.name
                      : product.name === 'Freelancer'
                  }
                )}
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-zinc-300">{product.description}</p>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      {priceString}
                    </span>
                    {billingInterval != null && (
                      <span className="text-base font-medium text-zinc-100">
                      /{billingInterval}
                      </span>
                    )}
                  </p>
                  <Button
                    variant="slim"
                    type="button"
                    disabled={!session}
                    loading={priceIdLoading === price.id}
                    onClick={() => handleCheckout(price)}
                    className="getPricing__subscription--button button__primary"
                  >
                    {!billingInterval ? 'Schedule a Call' : subscription ? 'Manage' : 'Subscribe'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}