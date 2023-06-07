import React from "react";
import MerchCard from "./MerchCard";

const MerchCollection = ({ _data, addToCart }) => {
  const data = []

  while (_data?.length) {
    data.push(_data.splice(0, 3 > _data.length ? _data.length : 3));
  }

  return (
    <>
      {data.map((row, rowIndex) => {
          return (
            <div className="row py-3" key={rowIndex}>
              {row.map((productData, index) => {
                return (
                  <MerchCard productData={productData} addToCart={addToCart} key={index}/>
                )
              })}
            </div>
          )
      })}
    </>
  );
};

export default MerchCollection;