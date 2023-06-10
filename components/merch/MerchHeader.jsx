import React from "react";

import CartSymbol from "./CartSymbol";

const MerchHeader = ({ click, cart }) => {
  return (
    <>
      <div className="py-3 text-right">
        <CartSymbol click={click} cart={cart}/>
      </div>
    </>
  )
}

export default MerchHeader;