// Modified from:
//    https://docs.stripe.com/checkout/embedded/quickstart?client=next#initialize-checkout

// For TypeScript support, see:
// - https://github.com/stripe/stripe-js
// - https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "NO_KEY_FOUND",
);

// TODO: Do not display the checkout unless client secret is fetched, and cart is not empty
export default function App() {
  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
    });
    const data = await res.json();
    return data.clientSecret;
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
