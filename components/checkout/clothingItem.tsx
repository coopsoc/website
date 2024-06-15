import React from "react";
import Image from "next/image";

import styles from "styles/modules/checkout.module.scss";

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
    <Row className={styles["clothingItem"]}>
      <Col
        style={{ display: "flex", flexDirection: "row", textAlign: "center" }}
      >
        <Image
          src={item.product.images[0]}
          width={200}
          height={200}
          alt="Picture of the clothing item"
          unoptimized
        />
        <h3 style={{ marginTop: "10px", marginLeft: "10px" }}>
          {item.product.name}
        </h3>
      </Col>
      <Col className={styles["clothingRow"]}>
        <h3>${(item.price.cents ?? 0) / 100}</h3>
      </Col>
      <Col className={styles["clothingRow"]}>
        <div className={styles["quantityButtons"]}>
          <Button
            className="mt-4"
            color="primary"
            target="_blank"
            onClick={() => removeFromCart(item)}
          >
            -
          </Button>
          <h3>{item.qty}</h3>
          <Button
            className="mt-4"
            color="primary"
            target="_blank"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </Col>
      <Col className={styles["clothingRow"]}>
        <h3>${((item.price.cents ?? 0) / 100) * item.qty}</h3>
      </Col>
    </Row>
  );
};

export default ClothingItem;
