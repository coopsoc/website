import React, { useState, useEffect } from "react";

import { NextRouter, useRouter } from "next/router";

import {
  Elements,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51N7xWEKWz42bhxUE0OeOgsSQoeFdMRPXvxelNmH2U9TkHjsCC1wLE1O6nYvArlihn7regSqjiHVTk89atbSNL2hc00c4XYqVw3",
);

interface PaymentElProps {
  clientSecret: string;
  router: NextRouter;
}

const PaymentEl = ({ clientSecret, router }: PaymentElProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const handler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error: submitError } = await elements.submit();
    if (submitError) {
      return;
    }

    stripe
      .confirmPayment({
        elements: elements,
        clientSecret: clientSecret,
        redirect: "if_required",
      })
      .then((result) => {
        if (result.error) {
          router.push("/checkout/unsuccesful");
        } else {
          router.push("/merch");
        }
      });
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto p-4">
        <form onSubmit={handler}>
          <PaymentElement className="py-3" />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

const Payment = () => {
  const router = useRouter();

  if (router.isReady) {
    const options = {
      clientSecret: `${router.query.slug}`,
    };

    return (
      <Elements stripe={stripePromise} options={options}>
        <PaymentEl clientSecret={options.clientSecret} router={router} />
      </Elements>
    );
  }
};

export default Payment;
