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
          let _d = _data.sort((a, b) => {
            if (a.name == b.name) return 0; 
            return a.name < b.name ? 1 : -1;
          })

          let d = []
          while (_d.length) {
            d.push(_d.splice(0, 3 > _d.length ? _d.length : 3));
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