import React, { useState, useEffect } from "react";

function handleSave (key, value) {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    let string = JSON.stringify(value);
    sessionStorage.setItem(key, string);
  }
}

const CheckoutForm = ({ cart, updateCart }) => {

  const removeFromCart = (e) => {
    let _cart = JSON.parse(JSON.stringify(cart));
    let index = e.target.parentElement.getAttribute('data-value');
    _cart.splice(index, 1);
    handleSave("cart", _cart);
    updateCart(_cart);
  }

  const createPaymentIntent = async () => {
    const { CLIENT_SECRET } = await fetch("https://api.coopsoc.com.au/payment");

    
  }

  return (
    <div className="row">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">{cart.length}</span>
        </h4>
        <ul className="list-group mb-3"> 
          {cart.map((product, index) => {
            const {name, price} = product;
            return (
              <li key={index} className="list-group-item d-flex justify-content-between lh-sm" data-value={index}>
                <div>
                  <h6 className="my-0">{name}</h6>
                </div>
                <span className="text-muted">{price}</span>
                <span className="text-muted" onClick={removeFromCart}>&#x2715;</span>
              </li>
            );
          })} 
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${cart.reduce((partialSum, product) => partialSum + Number(product.price.substring(1)), 0).toFixed(2)}</strong>
          </li>
        </ul>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div> 

            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
          </div> 

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" onClick={() => createPaymentIntent()}>Continue to checkout</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;