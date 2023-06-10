import React from "react";

import styles from "styles/modules/Merch.module.scss";

const CartSymbol = ({ click, cart }) => {
  return (
    <>
      <i className="fa badge fa-2x" onClick={click} >&#xf07a;</i>
      <span className={"badge bg-primary rounded-pill " + [styles[`cart-items-badge`], styles[`header-cart-badge`]].join(' ')}> {5} </span>
    </>
  );
};

export default CartSymbol;