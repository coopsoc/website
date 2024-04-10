import React from "react";
import Head from "next/head";

// Reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

// Import Swiper styles
import "swiper/css/bundle";
// Core version + navigation, pagination modules:
import SwiperCore, { Navigation as SNavigation, Pagination } from "swiper/core";

// Configure Swiper to use modules
SwiperCore.use([SNavigation, Pagination]);

// FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faHeart } from "@fortawesome/free-solid-svg-icons";
import { niCalendarGrid } from "components/icon/nucleo";

const Index = () => {
  return (
    <>
      <Head>
        <title>UNSW Co-op Society</title>
      </Head>

      <section className="section my-2 mt-md-4 mb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md="4" className="mb-4 mb-md-0">
              <Card className="card-lift--hover shadow border-0 h-100">
                <CardBody className="py-4 py-md-5 d-flex flex-column">
                  <div className="icon icon-shape icon-shape-style1 rounded-circle mt-2 mt-md-0 mb-3">
                    <FontAwesomeIcon icon={niCalendarGrid} />
                  </div>
                  <div className="justify-content-center text-center mt-2 mt-md-3 mb-md-3">
                    <CardTitle tag="h5" className="text-uppercase">
                      Social Events
                    </CardTitle>
                    <CardText className="mb-4 mx-lg-1">
                      At the core of the society, our aims are to socialise and
                      meet new people. We facilitate this through a wide range
                      of social events, including an annual camp and ball.
                    </CardText>
                  </div>
                  <div className="justify-content-center text-center mt-auto">
                    <Button
                      className="btn-icon btn-icon-style1 mb-3 mb-md-0"
                      href="/events"
                    >
                      Learn more
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="mb-4 mb-md-0">
              <Card className="card-lift--hover shadow border-0 h-100">
                <CardBody className="py-4 py-md-5 d-flex flex-column">
                  <div className="icon icon-shape icon-shape-style2 rounded-circle mt-2 mt-md-0 mb-3">
                    <FontAwesomeIcon icon={faPencil} />
                  </div>
                  <div className="justify-content-center text-center mt-2 mt-md-3 mb-md-3">
                    <CardTitle tag="h5" className="text-uppercase">
                      Publications
                    </CardTitle>
                    <CardText className="mb-4 mx-lg-1">
                      Our goal with our articles and podcast is to create a
                      platform where scholars past and present can share their
                      experiences, learn something new, and stay connected.
                    </CardText>
                  </div>
                  <div className="justify-content-center text-center mt-auto">
                    <Button
                      className="btn-icon btn-icon-style2 mb-3 mb-md-0"
                      href="/publications"
                    >
                      Learn more
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-lift--hover shadow border-0 h-100">
                <CardBody className="py-4 py-md-5 d-flex flex-column">
                  <div className="icon icon-shape icon-shape-style3 rounded-circle mt-2 mt-md-0 mb-3">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div className="justify-content-center text-center mt-2 mt-md-3 mb-md-3">
                    <CardTitle tag="h5" className="text-uppercase">
                      Charity Events
                    </CardTitle>
                    <CardText className="mb-4 mx-lg-1">
                      The charity portfolio is an integral way for Co-op
                      scholars to give back to the community through events that
                      raise awareness for a diverse range of charities and
                      social issues.
                    </CardText>
                  </div>
                  <div className="justify-content-center text-center mt-auto">
                    <Button
                      className="btn-icon btn-icon-style3 mb-3 mb-md-0"
                      href="/charity"
                    >
                      Learn more
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
