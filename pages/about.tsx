import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";

// yess let's get those animations
import "animate.css";

// Reactstrap components
import { Container, Row, Col } from "reactstrap";

import CampWhole from "public/img/events/campWhole.jpg";
import Ball from "public/img/events/ball2.jpg";

// Body
const About = () => {
  return (
    <>
      <Head>
        <title>About Us | UNSW Co-op Society</title>
      </Head>

      <section className="section section-sm">
        <Row className="justify-content-around text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast pb-4 mt-3 mt-sm-5">
              ABOUT US
            </h1>
          </Col>
        </Row>
      </section>

      <Container>
        <section>
          {/*Section 1 Heading*/}
          <Row className="justify-content-left text-center">
            <Col lg="3">
              <h1 className="animate__animated animate__zoomIn animate__fast">
                Who We Are
              </h1>
            </Col>
          </Row>

          {/*Section 1 Body*/}
          <Row lg="15">
            <Col lg="6">
              <div>
                <p className="lead text-muted">
                  The UNSW Co-op Society is a club facilitated by and for
                  students studying under the UNSW Co-op Scholarship Program. We
                  aim to create a sense of community amongst the inspiring group
                  of young scholars that partake in this program, further
                  enriching the university experience of all Co-ops! We strongly
                  encourage all Co-op scholars to join and get involved!
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <Image
                  width="1500"
                  height="1000"
                  src={CampWhole}
                  className="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </section>

        <section className="section section-lg">
          {/*Section 2 Heading*/}
          <Row
            className="justify-content-centre text-center"
            style={{ justifyContent: "flex-end", marginRight: "260px" }}
          >
            <Col lg="3.9">
              <h1 className="animate__animated animate__zoomIn animate__fast">
                What We Do
              </h1>
            </Col>
          </Row>

          {/*Section 2 Body*/}
          <Row lg="15">
            <Col lg="6" style={{ marginTop: "50px" }}>
              <p>
                <br></br>
              </p>
              <div>
                <Image
                  style={{ paddingRight: "15px" }}
                  width="1400"
                  height="1000"
                  src={Ball}
                  className="w-100 shadow-1-strong rounded mb-5 card-lift--hover"
                  alt=""
                />
              </div>
            </Col>
            <Col lg="6">
              <div>
                <p className="lead text-muted">
                  We host a wide range of events throughout the year coordinated
                  by our Social and Charity portfolios, including a peer
                  mentoring program and camp to transition first-year students
                  into university, an annual ball, and numerous charity events
                  such as City2Surf and The World’s Greatest Shave since our
                  merger with the Co-op Soc Charitable Society (CSCS) in 2018.
                  <br></br>
                  <br></br>
                  Our publications of ongoing projects and works conducted by
                  Co-op scholars and alumni facilitate the opportunity for
                  students to interact with sponsors and industry leaders. The
                  highlight publication is our very own podcast; The Chicken
                  Coop!
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default About;
