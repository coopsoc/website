import React from "react";
import Image from "next/image";

// yess let's get those animations
import "animate.css";

// Reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// Core components
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// Images
import Ball from "../assets/img/events/ball2.jpg";
import Camp from "../assets/img/events/camp.jpg";
import CampWhole from "../assets/img/events/campWhole.jpg";
import FunRun from "../assets/img/events/funRun.jpg";
import FunRun2 from "../assets/img/events/funRun2.jpg";
import Gals from "../assets/img/events/gals.jpg";
import Gals2 from "../assets/img/events/gals2.jpg";
import GalsBall from "../assets/img/events/galsBall.jpg";
import YTB from "../assets/img/events/ytb.jpg";

const Events = () => {
  return (
    <>
      <Navigation />
      <main>
        <Header />
        <section className="section section-lg">
          <Row className="justify-content-center text-center ">
            <Col lg="8">
              <h1 className="animate__animated animate__zoomIn animate__fast">EVENTS</h1>
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
          <br></br>
        </section>

        <section className="section section-lg pt-lg-0">
          <Container>
            <div className="row">
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
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Events;
