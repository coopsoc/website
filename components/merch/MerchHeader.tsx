import React from "react";

import CartSymbol from "./CartSymbol";
import { Product } from "data/types";

interface MerchHeaderProps {
  click: () => void;
  cart: Product[];
}

const MerchHeader = ({ click, cart }: MerchHeaderProps) => {
  return (
    <>
      <div className="py-3 text-right">
        <CartSymbol click={click} cart={cart} />
      </div>
    </>
  );
};

export default MerchHeader;
