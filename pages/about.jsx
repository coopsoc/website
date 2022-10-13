import React from "react";
import Head from "next/head";
import Image from "next/image";

// yess let's get those animations
import "animate.css";

// Reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";


const About = () => {
  return (
    <>
      <Head>
        <title>About Us | UNSW Co-op Society</title>
      </Head>

    {/* Section 1 */}
      <section className="section section-lg">
        <Row className="justify-content-center text-center ">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">Who We Are</h1>
          </Col>
        </Row>

        <Container className="py-lg-md d-flex">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <p className="lead text-muted">
                We are a Co-ops from a variety of years and streams, dedicated to creating a warm and welcoming community.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

    {/* Section 2 */}
      <section className="section section-lg">
        <Row className="justify-content-center text-center ">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">What We Do</h1>
          </Col>
        </Row>

        <Container className="py-lg-md d-flex">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <p className="lead text-muted">
              At Co-op Soc, our top aims are to socialise and meet new people. We facilitate this through a wide range of social events, including our highly anticipated annual camp and ball.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
