import React from "react";

import { useRouter } from 'next/router';

import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
  const router = useRouter();
  const stripePromise = loadStripe("pk_live_51N7xWEKWz42bhxUE0OeOgsSQoeFdMRPXvxelNmH2U9TkHjsCC1wLE1O6nYvArlihn7regSqjiHVTk89atbSNL2hc00c4XYqVw3");

  const options = {
    clientSecret: `{{${router.query.slug}}}`
  }

  return (
    <Elements stripePromise={stripePromise} options={options}>
      <form>
        <PaymentElement/>
        <button>Submit</button>
      </form>
    </Elements> 
  )
}

export default Payment;