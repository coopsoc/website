import React, { useState, useEffect } from "react";

function handleSave (key, value) {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    let string = JSON.stringify(value);
    sessionStorage.setItem(key, string);
  }
}

function handleGet (key) {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    return JSON.parse(sessionStorage.getItem(key));
  }
}

const MerchCard = ({productData}) => {
  const {name, id, images, price} = productData;
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = (e) => {
    let cart = handleGet("cart") ?? [];
    cart.push({ id: id, name: name, price: price });
    handleSave("cart", cart);
    setAddedToCart(true);
  }

  const removeAddedToCart = (e) => {
    setAddedToCart(false);
  }

  return (
    <>
      <div className="card text-center p-2 border-0 merch-card" key={id}>
        <img className="card-img-top" src={images[0]} alt={name}/>
        <div className="card-body pt-3"> 
          <h5 className="card-title mb-3">{name}</h5>
          <h5 className="card-subtitle text-muted">{price}</h5>
        </div> 
        <div className="overlay mx-auto" onClick={addToCart} onMouseOut={removeAddedToCart}>
          {addedToCart ?
          <button className="btn btn-outline-white align-middle" onClick={addToCart}>Added To Cart</button> :
          <button className="btn btn-outline-white align-middle" onClick={addToCart}>Add To Cart</button>
          }
        </div>
      </div>
    </>
  );
};

export default MerchCard;