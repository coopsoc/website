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
  item.product.images[0] = item.product.images[0]
    .replace("https%3A//www.coopsoc.com.au", "")
    .replace(".png", ".jpg");
  return (
    <Row className={"mb-5 px-5 px-lg-0 " + styles["clothingItem"]}>
      <Col
        className="pt-2 pb-3 pb-lg-2 d-flex flex-column flex-lg-row text-center justify-content-center align-items-center"
        xs="3"
        md="5"
      >
        <Image
          src={item.product.images[0]}
          width={150}
          height={150}
          alt="Picture of the clothing item"
          unoptimized
        />
        <p className="fs-5 fw-bold m-0 ms-lg-4 text-center">
          {item.product.name}
        </p>
      </Col>
      <Col className={"d-none d-md-block " + styles["clothingRow"]}>
        <p className="m-0 fs-5 fw-bold text-center">
          ${(item.price.cents ?? 0) / 100}
        </p>
      </Col>
      <Col className={styles["clothingRow"]}>
        <div
          className={
            "w-100 d-flex flex-column align-items-between justify-content-center " +
            "flex-lg-row justify-content-lg-between align-items-lg-center"
          }
        >
          <Button
            color="primary"
            target="_blank"
            onClick={() => removeFromCart(item)}
            className="text-white py-2 px-3 mx-5 mb-3 m-lg-0 text-center"
          >
            -
          </Button>
          <p className="m-0 mx-lg-4 fw-bold fs-5 text-center">{item.qty}</p>
          <Button
            color="primary"
            target="_blank"
            onClick={() => addToCart(item)}
            className="text-white py-2 px-3 mx-5 mt-3 m-lg-0 text-center"
          >
            +
          </Button>
        </div>
      </Col>
      <Col className={styles["clothingRow"]}>
        <p className="m-0 fw-bold fs-5">
          ${((item.price.cents ?? 0) / 100) * item.qty}
        </p>
      </Col>
    </Row>
  );
};

export default ClothingItem;
