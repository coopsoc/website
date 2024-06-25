import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";

// yess let's get those animations
import "animate.css";

// Reactstrap components
import { Container, Row, Col } from "reactstrap";

// Images
import Ball from "public/img/events/ball2.jpg";
import Camp from "public/img/events/camp.jpg";
import CampWhole from "public/img/events/campWhole.jpg";
import FunRun from "public/img/events/funRun.jpg";
import FunRun2 from "public/img/events/funRun2.jpg";
import Gals from "public/img/events/gals.jpg";
import Gals2 from "public/img/events/gals2.jpg";
import GalsBall from "public/img/events/galsBall.jpg";
import YTB from "public/img/events/ytb.jpg";

const Events = () => {
  return (
    <>
      <Head>
        <title>Events | UNSW Co-op Society</title>
      </Head>

      <section className="section section-sm">
        <Row className="justify-content-around text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast pb-4 mt-3 mt-sm-5">
              EVENTS
            </h1>
          </Col>
        </Row>

        <Container className="py-lg-md d-flex">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <p className="lead text-muted">
                At Co-op Soc, our top aims are to socialise and meet new people.
                We facilitate this through a wide range of social events,
                including our highly anticipated annual camp and ball.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-lg pt-lg-0">
        <Container>
          <Row>
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <Image
                src={Camp}
                className="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <Image
                src={Gals}
                className="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <Image
                src={FunRun}
                className="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <Image
                src={GalsBall}
                className="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <Image
                src={CampWhole}
                className="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <Image
                src={Ball}
                className="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <Image
                src={Gals2}
                className="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <Image
                src={FunRun2}
                className="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <Image
                src={YTB}
                className="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
