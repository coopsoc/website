import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// Effects
import Typewriter from 'typewriter-effect';

// Import Swiper styles
import "swiper/css/bundle";
// core version + navigation, pagination modules:
import SwiperCore, { Navigation as SNavigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([SNavigation, Pagination]);

// core components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import styles from "../styles/scss/index.module.scss";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.mainRef = React.createRef();
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.mainRef.current.scrollTop = 0;
  }

  render() {
    return (
      <>
        <Navigation />
        <main ref={this.mainRef}>

          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-custom shape-primary">
                <span className="floating" />
                <span className="floating" />
                <span className="floating" />
                <span className="floating" />
                <span className="floating" />
                <span className="floating" />
                <span className="floating" />
              </div>

              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <br></br>
                  <Row>
                    <Col lg="8" className={styles.typewriter}>
                      <Typewriter
                        options={{
                          loop: false,
                        }}
                        onInit={(typewriter) => {
                          typewriter.typeString('UNSW CO-OP SOCIETY')
                            .start();
                        }}
                      />
                      <p className="lead text-white" style={{ fontWeight: 'normal' }}>
                        A society for co-ops, by co-ops.
                      </p>
                    </Col>
                  </Row>
                </div>

              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>

          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-index1 rounded-circle mb-4">
                            <i className="ni ni-calendar-grid-58" />
                          </div>
                          <div className="justify-content-center text-center">
                            <h6 className="text-uppercase">
                              Social Events
                            </h6>
                            <p className="description mt-3">
                              At the core of the society, our aims are to socialise and meet new people. We facilitate this through a wide range of social events,
                              including an annual camp and ball.
                            </p>
                            <br></br>
                          </div>
                          <div className="justify-content-center text-center">
                            <Button
                              className="btn-icon mb-3 mb-sm-0"
                              color="index1"
                              href="/events"
                            >
                              Learn more
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-index2 rounded-circle mb-4">
                            <i className="fa fa-pencil"></i>
                          </div>
                          <div className="justify-content-center text-center">
                            <h6 className="text-uppercase">
                              Publications
                            </h6>
                            <p className="description mt-3">
                              Our goal is to create a platform in which scholars past and present can share their experiences, learn something new, and stay connected.

                            </p>
                            <br></br>
                          </div>
                          <div className="justify-content-center text-center">
                            <Button
                              className="mt-4"
                              color="index2"
                              href="/publications"
                            >
                              Learn more
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-index3 rounded-circle mb-4">
                            <i className="fa fa-heart" />
                          </div>
                          <div className="justify-content-center text-center ">
                            <h6 className="text-uppercase">
                              Charity Events
                            </h6>
                            <p className="description mt-3">
                              The charity portfolio is an integral way for Co-op scholars to give back to the community through events
                              that raise awareness for a diverse range of charities and social issues.
                            </p>
                            <br></br>
                          </div>
                          <div className="justify-content-center text-center ">
                            <Button
                              className="btn-icon mb-3 mb-sm-0"
                              color="index3"
                              href="/charity"
                            >
                              Learn more
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </main>
        <Footer />
      </>
    );
  }
}

export default Index;
