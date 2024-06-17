import React from "react";
import Image from "next/image";

import styles from "styles/modules/Cart.module.scss";

import { Row, Col, Button } from "reactstrap";
import { CartItemWithDetail } from "api/merch";

interface ClothingItemProps {
  item: CartItemWithDetail;
  addToCart: (item: CartItemWithDetail) => void;
  removeFromCart: (item: CartItemWithDetail) => void;
}

const ClothingItem = ({
  item,
  addToCart,
  removeFromCart,
}: ClothingItemProps) => {
  item.product.images[0] = item.product.images[0].replace(
    "https%3A//www.coopsoc.com.au",
    "",
  );
  return (
    <Row className={"mb-5 " + styles["clothingItem"]}>
      <Col className="d-flex text-center justify-content-center align-items-center">
        <Image
          src={item.product.images[0]}
          width={180}
          height={180}
          alt="Picture of the clothing item"
          unoptimized
        />
        <h4 style={{ marginTop: "10px", marginLeft: "10px" }}>
          {item.product.name}
        </h4>
      </Col>
      <Col className={styles["clothingRow"]}>
        <h4>${(item.price.cents ?? 0) / 100}</h4>
      </Col>
      <Col className={styles["clothingRow"]}>
        <div className="d-flex justify-content-evenly w-100">
          <Button
            color="primary"
            target="_blank"
            onClick={() => removeFromCart(item)}
          >
            -
          </Button>
          <h4>{item.qty}</h4>
          <Button
            color="primary"
            target="_blank"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </Col>
      <Col className={styles["clothingRow"]}>
        <h4>${((item.price.cents ?? 0) / 100) * item.qty}</h4>
      </Col>
    </Row>
  );
};

export default ClothingItem;
