import React from "react";

import CartSymbol from "./CartSymbol";

const MerchHeader = ({ click }) => {
  return (
    <>
      <div className="py-3 text-right">
        <CartSymbol click={click}/>
      </div>
    </>
  )
}

export default MerchHeader;