import React from "react";

import CartSymbol from "./CartSymbol";
import { Product } from "data/types";
import { Clickable } from "components/types";

interface MerchHeaderProps extends Clickable {
  cart: Product[];
}

const MerchHeader = ({ onClick, cart }: MerchHeaderProps) => {
  return (
    <>
      <div className="py-3 text-right">
        <CartSymbol onClick={onClick} cart={cart} />
      </div>
    </>
  );
};

export default MerchHeader;
