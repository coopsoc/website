import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "styles/modules/checkout.module.scss";

import { Row, Col, Card, Button } from "reactstrap";

import { IMAGES } from "data/CheckoutData.js";

const ClothingItem = ({ item, addToCart, removeFromCart }) => {
  console.log(item.product.images[0]);
  return (
    <Row className={styles["clothingItem"]}>
      <Col
        style={{ display: "flex", flexDirection: "row", textAlign: "center" }}
      >
        <Image
          src={IMAGES[item.product.images[0]]}
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
        <h3>${item.price / 100}</h3>
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
          <h3>{item.amount}</h3>
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
        <h3>${(item.price / 100) * item.amount}</h3>
      </Col>
    </Row>
  );
};

export default ClothingItem;
