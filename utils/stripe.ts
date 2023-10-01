import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_LIVE_KEY ?? process.env.STRIPE_SECRET_TEST_KEY ?? '',
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2023-08-16',
    // Register this as an official Stripe plugin.
    // https://stripe.com/docs/building-plugins#setappinfo
    appInfo: {
      name: 'Website Artificers Payment Gateway',
      version: '0.1.0'
    }
  }
);