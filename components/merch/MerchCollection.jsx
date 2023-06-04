import React from "react";
import MerchCard from "./MerchCard";

const MerchCollection = () => {
  let TEST_DATA = [
    {
      name: "Co-op Hoodie",
      price: "$15.00",
      images: ["https://tshirtsrus.com.au/wp-content/uploads/Model-TP212H-Hoodie-200x200.jpg"],
      id: "2a351515-3897-4aad-8848-b6d4eedced75"
    },
    {
      name: "Co-op Hoodie",
      price: "$23.45",
      images: ["https://tshirtsrus.com.au/wp-content/uploads/Model-TP212H-Hoodie-200x200.jpg"],
      id: "19ac174a-b365-4441-bd72-c6f3db19bb3b"
    },
    {
      name: "Co-op Hoodie",
      price: "$10.00",
      images: ["https://tshirtsrus.com.au/wp-content/uploads/Model-TP212H-Hoodie-200x200.jpg"],
      id: "19ac174a-b365-4441-bd72-c6f3db19bb3b"
    },
    {
      name: "Co-op Hoodie",
      price: "$10.00",
      images: ["https://tshirtsrus.com.au/wp-content/uploads/Model-TP212H-Hoodie-200x200.jpg"],
      id: "19ac174a-b365-4441-bd72-c6f3db19bb3b"
    },
    {
      name: "Co-op Hoodie",
      price: "$22.22",
      images: ["https://tshirtsrus.com.au/wp-content/uploads/Model-TP212H-Hoodie-200x200.jpg"],
      id: "19ac174a-b365-4441-bd72-c6f3db19bb3b"
    },
    {
      name: "Co-op Hoodie",
      price: "$10.00",
      images: ["https://tshirtsrus.com.au/wp-content/uploads/Model-TP212H-Hoodie-200x200.jpg"],
      id: "19ac174a-b365-4441-bd72-c6f3db19bb3b"
    }
  ];

  const data = []

  while (TEST_DATA.length) {
    data.push(TEST_DATA.splice(0, 3 > TEST_DATA.length ? TEST_DATA.length : 3));
  }

  return (
    <>
      {data.map((row, rowIndex) => {
          return (
            <div className="row py-3" key={rowIndex}>
              {row.map((productData, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <MerchCard productData={productData}/>
                  </div>
                )
              })}
            </div>
          )
      })}
    </>
  );
};

export default MerchCollection;