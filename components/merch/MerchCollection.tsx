import React, { useState, useEffect } from "react";
import MerchCard from "./MerchCard";
import Loader from "components/Loader";

import Image from "next/image";
import { Product } from "data/types";

interface MerchCollectionProps {
  addToCart: (value: Product) => void;
}

const MerchCollection = ({ addToCart }: MerchCollectionProps) => {
  const [data, setData] = useState<Product[][]>([]);

  useEffect(() => {
    if (data.length === 0) {
      fetch("https://api.coopsoc.com.au/products", {
        cache: "no-cache",
      }).then((value) => {
        value.json().then((_data) => {
          let _d: Product[] = _data.sort((a: Product, b: Product) => {
            if (a.name == b.name) return 0;
            return a.name < b.name ? 1 : -1;
          });

          let d: Product[][] = [];
          while (_d.length) {
            d.push(_d.splice(0, 3 > _d.length ? _d.length : 3));
          }

          setData(d);
        });
      });
    }
  });

  return (
    <>
      <div className="mx-auto text-center">
        <Image
          src="img/merch/sizing-chart.jpg"
          alt="Sizing chart"
          width={464}
          height={205}
        />
      </div>
      {data.length == 0 ? (
        <div className="mx-auto w-50 text-center">
          <Loader width={100} height={100} strokeColour="black" />
        </div>
      ) : (
        data.map((row, rowIndex) => {
          return (
            <div className="row py-3" key={rowIndex}>
              {row.map((productData, index) => {
                return (
                  <MerchCard
                    productData={productData}
                    addToCart={addToCart}
                    key={index}
                  />
                );
              })}
            </div>
          );
        })
      )}
    </>
  );
};

export default MerchCollection;
