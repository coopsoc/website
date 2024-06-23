import React, { useState, useEffect } from "react";
import Head from "next/head";

import ClothingItem from "components/cart/clothingItem";

// yess let's get those animations
import "animate.css";

// reactstrap components
import { Col, Row, Button, Container } from "reactstrap";
import { CartItemWithDetail } from "scripts/merch";
import router from "next/router";

const Cart = () => {
  const [props, setProps] = useState<CartItemWithDetail[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    let items: CartItemWithDetail[] = [];
    if (cart !== null) {
      items = JSON.parse(cart);
    } else {
      items = [];
    }
    setProps(items);
  }, []);

  const handleAddToCart = (item: CartItemWithDetail) => {
    const newArr = [...props];
    for (let element = 0; element < newArr.length; element++) {
      if (newArr[element].product.id === item.product.id) {
        newArr[element].qty++;
      }
    }
    localStorage.setItem("cart", JSON.stringify(newArr));
    setProps(newArr);
  };

  const handleRemoveFromCart = (item: CartItemWithDetail) => {
    const newArr = [...props];
    for (let element = 0; element < newArr.length; element++) {
      if (newArr[element].product.id === item.product.id) {
        if (newArr[element].qty === 1) {
          newArr.splice(element, 1);
        } else {
          newArr[element].qty--;
        }
      }
    }
    localStorage.setItem("cart", JSON.stringify(newArr));
    setProps(newArr);
  };

  const calculateTotal = () => {
    let total = 0;
    for (let item = 0; item < props.length; item++) {
      total += props[item].qty * (props[item].price.cents ?? 0);
    }
    return total / 100;
  };

  const handlePay = () => {
    router.push({ pathname: "/checkout" });
  };

  return (
    <>
      <Head>
        <title>Cart | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-around text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast pb-4">
              CART
            </h1>
          </Col>
        </Row>
        <Container
          // className="d-flex flex-column align-items-between"
          style={{ width: "75%" }}
          fluid
        >
          {/* TODO: align header row with ClothingItem at smaller display widths - bootstrap columns? */}
          {/* <Row className={styles["cartHeader"]}> */}
          <Row className="mt-sm-3 mb-4 d-none d-sm-flex">
            {/* <Col className={styles["cartHeaderCol"]}> */}
            <Col className="text-center" xs="4">
              <h4>Item</h4>
            </Col>
            <Col className="text-center">
              <h4>Price</h4>
            </Col>
            <Col className="text-center" xs="4">
              <h4>Quantity</h4>
            </Col>
            <Col className="text-center">
              <h4>Total</h4>
            </Col>
          </Row>
          {/* <Row style={{ margin: "auto -200px" }}> */}
          {/* <Row class="flex-column justify-content-center align-items-center"> */}
          {props.map((prop, index) => (
            <ClothingItem
              key={index}
              item={prop}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
            />
          ))}
          {/* </Row> */}
          <Row>
            <Col className="d-flex flex-column align-items-end me-1">
              <h4> Total: ${calculateTotal()}</h4>
              <Button
                className="mt-3"
                color="primary"
                target="_blank"
                onClick={() => handlePay()}
                style={{ width: 200, color: "white" }}
              >
                <h5 style={{ color: "white", margin: "0" }}>Check Out</h5>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cart;
