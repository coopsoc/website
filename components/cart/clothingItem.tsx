import React from "react";
import Image from "next/image";

import styles from "styles/modules/Cart.module.scss";

import { Row, Col, Button } from "reactstrap";
import { CartItemWithDetail } from "scripts/merch";

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
      <Col
        className="d-flex text-center justify-content-center align-items-center"
        xs="4"
      >
        <Image
          src={item.product.images[0]}
          width={150}
          height={150}
          alt="Picture of the clothing item"
          unoptimized
        />
        <h5 className="m-0 ms-4">{item.product.name}</h5>
      </Col>
      <Col className={styles["clothingRow"]} xs="2">
        <h5 className="m-0">${(item.price.cents ?? 0) / 100}</h5>
      </Col>
      <Col className={styles["clothingRow"]}>
        <div className="d-flex justify-content-evenly align-items-center w-100">
          <Button
            color="primary"
            target="_blank"
            onClick={() => removeFromCart(item)}
            style={{ color: "white" }}
          >
            -
          </Button>
          <h5 className="m-0">{item.qty}</h5>
          <Button
            color="primary"
            target="_blank"
            onClick={() => addToCart(item)}
            style={{ color: "white" }}
          >
            +
          </Button>
        </div>
      </Col>
      <Col className={styles["clothingRow"]}>
        <h5 className="m-0">${((item.price.cents ?? 0) / 100) * item.qty}</h5>
      </Col>
    </Row>
  );
};

export default ClothingItem;
