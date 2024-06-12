import React, { useState, useEffect } from "react";
import Head from "next/head";

import ClothingItem from "components/checkout/clothingItem";

// yess let's get those animations
import "animate.css";
import styles from "styles/modules/checkout.module.scss";

// reactstrap components
import { Col, Row, Button } from "reactstrap";
import { useRouter } from "next/router";
import { InferGetServerSidePropsType } from "next";
import {
  Price,
  Product,
  Variant,
  getAllPrices,
  getAllProductsAndVariants,
} from "api/merch";

const ITEMS = new Map<string, number>();

type Repo = {
  products: Product[];
  variants: Variant[];
};

export const getServerSideProps = async () => {
  // Ideally should be moved out to not initialise on every render
  const stripe = require("stripe")(process.env["STRIPE_TEST_KEY"]);

  const { products, variants } = await getAllProductsAndVariants(stripe);
  const prices = await getAllPrices(stripe);

  products.forEach((product: Product) => {
    product.price =
      prices.find((price: Price) => price.id === product.price.id) ??
      product.price;
  });

  const repo: Repo = { products, variants };
  return { props: { repo } };
};

const Checkout = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  console.log(router.query);

  const [props, setProps] = useState<
    { product: any; price: any; amount: number }[]
  >([]);

  const handleAddToCart = (item: any) => {
    const newArr = [...props];
    for (let element = 0; element < newArr.length; element++) {
      if (newArr[element].product.id === item.product.id) {
        newArr[element].amount++;
      }
    }
    setProps(newArr);
  };

  const handleRemoveFromCart = (item: any) => {
    const newArr = [...props];
    for (let element = 0; element < newArr.length; element++) {
      if (newArr[element].product.id === item.product.id) {
        if (newArr[element].amount === 1) {
          newArr.splice(element, 1);
        } else {
          newArr[element].amount--;
        }
      }
    }
    setProps(newArr);
  };

  const calculateTotal = () => {
    let total = 0;
    for (let item = 0; item < props.length; item++) {
      total += props[item].amount * props[item].price;
    }
    return total / 100;
  };

  const handlePay = () => {
    console.log("Buy Now");
  };

  return (
    <>
      <Head>
        <title>CART | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">
              CART
            </h1>
          </Col>
        </Row>
        <div>
          <Row className={styles["cartHeader"]}>
            <Col className={styles["cartHeaderCol"]}>
              <h4>Item</h4>
            </Col>
            <Col className={styles["cartHeaderCol"]}>
              <h4>Price</h4>
            </Col>
            <Col className={styles["cartHeaderCol"]}>
              <h4>Quantity</h4>
            </Col>
            <Col className={styles["cartHeaderCol"]}>
              <h4>Total</h4>
            </Col>
          </Row>
          <Row>
            {props.map((prop, index) => (
              <ClothingItem
                key={index}
                item={prop}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
              />
            ))}
          </Row>
          <Row
            style={{
              marginLeft: 40,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>TOTAL ${calculateTotal()}</h3>
            <Button
              className="mt-4"
              color="primary"
              target="_blank"
              onClick={() => handlePay()}
              style={{ width: 200 }}
            >
              Buy Now
            </Button>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Checkout;
