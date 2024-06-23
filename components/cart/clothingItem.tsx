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
    <Row className={"mb-5 px-5 ps-md-2 ps-lg-5 " + styles["clothingItem"]}>
      <Col
        className="pt-2 pb-3 pb-lg-2 d-flex flex-column flex-lg-row text-center justify-content-start align-items-center"
        xs="3"
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
        xs="1"
      >
        <p className="m-0 fs-5 fw-bold">${(item.price.cents ?? 0) / 100}</p>
      </Col>
      <Col className={styles["clothingRow"]} xs="4">
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
      <Col className={styles["clothingRow"]} xs="1">
        <p className="m-0 fw-bold fs-5 text-center">
          ${((item.price.cents ?? 0) / 100) * item.qty}
        </p>
      </Col>
    </Row>
  );
};

export default ClothingItem;
