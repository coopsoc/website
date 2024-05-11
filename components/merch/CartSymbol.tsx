import { Product } from "data/types";
import React from "react";

import styles from "styles/modules/Merch.module.scss";

interface CartSymbolProps {
  click: () => void;
  cart: Product[];
}

const CartSymbol = ({ click, cart }: CartSymbolProps) => {
  return (
    <>
      <i className="fa badge fa-2x" onClick={click}>
        &#xf07a;
      </i>
      <span
        className={
          "badge bg-primary rounded-pill " +
          [styles[`cart-items-badge`], styles[`header-cart-badge`]].join(" ")
        }
      >
        {" "}
        {cart ? cart.length : 0}{" "}
      </span>
    </>
  );
};

export default CartSymbol;
