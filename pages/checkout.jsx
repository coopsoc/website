import React, { useState, useEffect } from "react";
import Head from "next/head";

import ClothingItem from "components/checkout/clothingItem";

// yess let's get those animations
import "animate.css";
import styles from "styles/modules/checkout.module.scss";

// reactstrap components
import { Container, Col, Row, Button } from "reactstrap";

import { ITEMS } from "data/CheckoutData.js";

const Checkout = () => {
  const [props, setProps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = (item) => {
    const newArr = [...props];
    for (let element = 0; element < newArr.length; element++) {
      if (newArr[element].product.id === item.product.id) {
        newArr[element].amount++;
      }
    }
    setProps(newArr);
  };

  const handleRemoveFromCart = (item) => {
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

  useEffect(() => {
    let ids = [];
    const items = ITEMS;
    for (let id of items.keys()) {
      ids.push(id);
    }
    async function getProduct() {
      try {
        const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_KEY);
        let products_list = await stripe.products.list({ ids: ids });
        products_list = products_list.data;
        let price_list = [];
        for (let product = 0; product < products_list.length; product++) {
          price_list.push(
            await stripe.prices.retrieve(
              products_list[product]["default_price"],
            ),
          );
        }
        let props_list = [];
        let prop = null;
        for (let i = 0; i < products_list.length; i++) {
          for (let id of items.keys()) {
            if (id === products_list[i].id) {
              prop = {
                product: products_list[i],
                price: price_list[i].unit_amount,
                amount: items.get(id),
              };
              props_list.push(prop);
            }
          }
        }
        setProps(props_list);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    getProduct();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

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
