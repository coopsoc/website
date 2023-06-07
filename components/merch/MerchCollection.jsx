import React, { useState, useEffect } from "react";
import MerchCard from "./MerchCard";

const MerchCollection = ({ addToCart }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if (data.length === 0) {
      fetch("https://api.coopsoc.com.au/products", {
        cache: "force-cache"
      }).then((value) => { 
        value.json().then((_data) => {
          let d = []
          while (_data.length) {
            d.push(_data.splice(0, 3 > _data.length ? _data.length : 3));
          }

          setData(d);
        });
      })
    }
  })

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