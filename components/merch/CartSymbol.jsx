import React from "react";

import styles from "styles/modules/Merch.module.scss";

const CartSymbol = ({ click, cart }) => {
  return (
    <>
      <i className="fa badge fa-2x" onClick={click} >&#xf07a;</i>
      <span className={styles[`badge`]}> {cart.length} </span>
    </>
  );
};

export default CartSymbol;