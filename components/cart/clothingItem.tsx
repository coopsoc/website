import React from "react";
import Image from "next/image";

import styles from "styles/modules/Cart.module.scss";

import { Row, Col, Button } from "reactstrap";
import { CartItemWithDetail } from "data/types";

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
    <Row
      className={
        "mb-5 px-sm-5 ps-md-2 ps-lg-5 py-4 py-sm-1 " + styles["clothingItem"]
      }
    >
      <Col
        className="pt-2 pb-sm-3 pb-lg-2 d-flex flex-column flex-lg-row text-center justify-content-start align-items-center"
        sm="6"
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
      <Col
        className={"d-none d-md-block text-center " + styles["clothingRow"]}
        sm="1"
      >
        <p className="m-0 fs-5 fw-bold">${(item.price.cents ?? 0) / 100}</p>
      </Col>
      <Col className={styles["clothingRow"]} sm="4">
        <div className={styles["quantityButtons"]}>
          <Button
            color="primary"
            target="_blank"
            onClick={() => removeFromCart(item)}
          >
            -
          </Button>
          <p className="m-0 my-3 mx-lg-3 fw-bold fs-5 text-center">
            {item.qty}
          </p>
          <Button
            color="primary"
            target="_blank"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </Col>
      <Col sm="1">
        <p className="m-0 fw-bold fs-5 text-center">
          <span className="d-sm-none">Total: </span>$
          {((item.price.cents ?? 0) / 100) * item.qty}
        </p>
      </Col>
    </Row>
  );
};

export default ClothingItem;
