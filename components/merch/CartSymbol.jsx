import React from "react";

const CartSymbol = ({ click }) => {
  return (
    <>
      <i className="fa badge fa-lg" onClick={click}>&#xf07a;</i>
    </>
  );
};

export default CartSymbol;