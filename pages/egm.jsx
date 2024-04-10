import React from "react";
import Head from "next/head";
import Image from "next/image";

// yess let's get those animations
import "animate.css";

// Reactstrap components
import { Container, Row, Col } from "reactstrap";

const Egm = () => {
  return (
    <>
      <Head>
        <title>EGM | UNSW Co-op Society</title>
        <meta name="robots" content="noindex"></meta>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center ">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">
              COMING SOON
            </h1>
          </Col>
        </Row>

        <Container className="py-lg-md d-flex">
          <Row className="justify-content-center text-center">
            <Col lg="10">
              <p className="lead text-muted">
                Coop-soc will be holding an Extraordinary General Meeting (EGM)
                on Friday 12th April, 2024. The meeting will go from 6:00pm to
                approximately 6:45pm, and be held online. <br /> At this meeting
                we will be updating our Club&apos;s constitution and hold
                elections to replace Executives who are departing the team for
                the remainder of the year. <br /> Check back soon for
                information about nominees!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Egm;
