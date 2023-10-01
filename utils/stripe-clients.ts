import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_LIVE_KEY ??
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_TEST_KEY ??
        ''
    );
  }

  return stripePromise;
};