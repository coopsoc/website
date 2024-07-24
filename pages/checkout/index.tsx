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
import MerchClosed from "components/merch_2024/MerchClosed";
import { CartItemWithDetail } from "data/types";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { isMerchActive } from "scripts/merch";

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

  const options = { fetchClientSecret };

  return (
    <>
      <Head>
        <title>Checkout | UNSW Co-op Society</title>
        <meta name="robots" content="noindex"></meta>
      </Head>

      <section className="section section-sm">
        {props.length && isMerchActive() ? (
          <div id="checkout" className="mb-2 mb-sm-4 mb-xl-5">
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
        ) : (
          <>
            <Row className="justify-content-around text-center">
              <Col lg="8">
                <h1 className="animate__animated animate__zoomIn animate__fast pb-4 mt-3 mt-sm-5">
                  CHECKOUT
                </h1>
              </Col>
            </Row>

            {isMerchActive() ? (
              <Container className="py-lg-md d-flex justify-content-center">
                <p className="lead text-muted text-center">
                  Cart is empty, <Link href="/merch">add some items</Link>{" "}
                  first!
                </p>
              </Container>
            ) : (
              <MerchClosed />
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Checkout;
