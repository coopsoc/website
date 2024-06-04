import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Card, Col, Container, Row } from "reactstrap";
import "animate.css";

type Product = {
  id: string;
  name: string;
  imageURL: string;
};

const MerchCard = () => {
  return (
    <Card color="warning">
      <Image
        src="https://picsum.photos/300/200"
        width={500}
        height={500}
        alt="merch1"
      />
      <p>Hello</p>
    </Card>
  );
};

const Merch = () => {
  return (
    <>
      <Head>
        <title>Merch | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center ">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">
              MERCH
            </h1>
          </Col>
        </Row>

        <Container>
          <Row xs="100%">
            <Col xs="5">
              <MerchCard />
            </Col>
            <Col xs="5">
              <MerchCard />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Merch;
