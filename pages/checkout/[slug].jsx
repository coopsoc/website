import React, { useState, useEffect } from "react";

import { useRouter } from 'next/router';

import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_live_51N7xWEKWz42bhxUE0OeOgsSQoeFdMRPXvxelNmH2U9TkHjsCC1wLE1O6nYvArlihn7regSqjiHVTk89atbSNL2hc00c4XYqVw3");

const Payment = () => {
  const router = useRouter();
  if (router.isReady) { 
    const options = {
      clientSecret: `${router.query.slug}`
    }

    return (
      <div className="container">
        <div className="w-50 mx-auto p-4">
          <Elements stripe={stripePromise} options={options}>
            <form>
              <PaymentElement className="py-3"/>
              <button className='btn btn-primary'>Submit</button>
            </form>
          </Elements>
        </div>
      </div>
    );
  }
}

export default Payment;