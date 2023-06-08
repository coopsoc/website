import React, { useState, useEffect } from "react";

import { useRouter } from 'next/router';

import { Elements, CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_live_51N7xWEKWz42bhxUE0OeOgsSQoeFdMRPXvxelNmH2U9TkHjsCC1wLE1O6nYvArlihn7regSqjiHVTk89atbSNL2hc00c4XYqVw3");

const PaymentEl = ({ clientSecret, router }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handler = (e) => {
    e.preventDefault();
    stripe.confirmCardPayment(clientSecret, {
      payment_method: {card: elements.getElement(PaymentElement)}
    }).then((result) => {
      if (result.err) {
        console.log("Unsuccessful...");  
      } else {
        router.push('/merch')
      }
    })
  }

  return (
    <div className="container">
      <div className="w-50 mx-auto p-4">
          <form onSubmit={handler}>
            <PaymentElement className="py-3"/>
            <button className='btn btn-primary'>Submit</button>
          </form>
      </div>
    </div>
  );
}

const Payment = () => {
  const router = useRouter();

  if (router.isReady) { 
    const options = {
      clientSecret: `${router.query.slug}`
    }

    return (
      <Elements stripe={stripePromise} options={options}>
        <PaymentEl clientSecret={options.clientSecret} router={router}/>
      </Elements>
    );
  }
}

export default Payment;