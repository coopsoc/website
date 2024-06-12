// Modified from:
//    https://docs.stripe.com/checkout/embedded/quickstart?client=next#initialize-checkout

// For TypeScript support, see:
// - https://github.com/stripe/stripe-js
// - https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe

import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "NO_KEY_FOUND",
);

export default function App() {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/api/checkout_sessions", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  // TODO - fix CSP and uncomment: https://stripe.com/docs/security/guide#content-security-policy
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
