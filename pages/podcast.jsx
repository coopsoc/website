import React from "react";
import Head from "next/head";

import { Col, Container, Row } from "reactstrap";

import PodcastList from "components/podcast/PodcastList";

const Podcast = () => {
  return (
    <>
      <Head>
        <title>Podcast | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__fadeInDown animate__fast">PODCAST</h1>
          </Col>
        </Row>
      </section>

      <section className="section section-lg">
        <Container>
          <PodcastList />
        </Container>
      </section>
    </>
  );
};

export default Podcast;
