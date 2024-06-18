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
import { CartItemWithDetail } from "api/merch";
import { useCallback, useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "NO_KEY_FOUND",
);

// TODO: Do not display the checkout unless client secret is fetched, and cart is not empty
const Checkout = () => {
  const [props, setProps] = useState<CartItemWithDetail[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    let items: CartItemWithDetail[] = [];
    if (cart !== null) {
      items = JSON.parse(cart);
    } else {
      items = [];
    }
    setProps(items);
  }, []);

  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      body: JSON.stringify({
        items: props.map((item) => ({
          price: item.price.id,
          quantity: item.qty,
        })),
      }),
    });
    const data = await res.json();
    return data.clientSecret;
  }, [props]);

  if (props.length) {
    const options = { fetchClientSecret };

    return (
      <div id="checkout" className="mb-4 mb-xl-5">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    );
  }

  // TODO: Improve this case
  return <div>Cart is empty</div>;
};

export default Checkout;
