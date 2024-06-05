// From https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe
// Singleton pattern to avoid reinstating Stripe on every render

// TODO use TS version below
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;

// import { Stripe, loadStripe } from '@stripe/stripe-js';

// let stripePromise: Promise<Stripe | null>;
// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
//   }
//   return stripePromise;
// };

// export default getStripe;
