import React from "react";

import { Col, Container, Row } from "reactstrap";

import PodcastList from "components/podcast/PodcastList";

const Podcast = () => {
  return (
    <>
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
