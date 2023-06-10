import React from "react";

import styles from "styles/modules/Merch.module.scss";

const CartSymbol = ({ click }) => {
  return (
    <>
      <i className="fa badge fa-2x" onClick={click} >&#xf07a;</i>
      <span className={styles[`badge`]}> 5 </span>
    </>
  );
};

export default CartSymbol;