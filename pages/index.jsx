import React from "react";

// Reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  CardDeck
} from "reactstrap";

// Import Swiper styles
import "swiper/css/bundle";
// Core version + navigation, pagination modules:
import SwiperCore, { Navigation as SNavigation, Pagination } from 'swiper/core';

// Configure Swiper to use modules
SwiperCore.use([SNavigation, Pagination]);

// FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faHeart } from "@fortawesome/free-solid-svg-icons";
import { niCalendarGrid } from "components/icon/nucleo.js";

const Index = () => {
  return (
    <>
      <section className="section section-lg pt-lg-0 mt--200">
        <Container>
          <Row className="justify-content-center">
            <CardDeck>
              <Card className="card-lift--hover shadow border-0 h-100">
                <CardBody className="py-5 d-flex flex-column">
                  <div className="icon icon-shape icon-shape-style1 rounded-circle mb-4">
                    <FontAwesomeIcon icon={niCalendarGrid} />
                  </div>
                  <div className="justify-content-center text-center mt-3 mb-3">
                    <h6 className="text-uppercase">
                      Social Events
                    </h6>
                    <p className="description">
                      At the core of the society, our aims are to socialise and meet new people. We facilitate this through a wide range of social events,
                      including an annual camp and ball.
                    </p>
                  </div>
                  <div className="justify-content-center text-center mt-auto">
                    <Button className="btn-icon btn-icon-style1" href="/events">
                      Learn more
                    </Button>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-lift--hover shadow border-0 h-100">
                <CardBody className="py-5 d-flex flex-column">
                  <div className="icon icon-shape icon-shape-style2 rounded-circle mb-4">
                    <FontAwesomeIcon icon={faPencil} />
                  </div>
                  <div className="justify-content-center text-center mt-3 mb-3">
                    <h6 className="text-uppercase">
                      Publications
                    </h6>
                    <p className="description">
                      Our goal with our articles and podcast is to create a platform where scholars past and present can share their experiences, learn something new, and stay connected.
                    </p>
                  </div>
                  <div className="justify-content-center text-center mt-auto">
                    <Button className="btn-icon btn-icon-style2" href="/publications">
                      Learn more
                    </Button>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-lift--hover shadow border-0 h-100">
                <CardBody className="py-5 d-flex flex-column">
                  <div className="icon icon-shape icon-shape-style3 rounded-circle mb-4">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div className="justify-content-center text-center mt-3 mb-3">
                    <h6 className="text-uppercase">
                      Charity Events
                    </h6>
                    <p className="description">
                      The charity portfolio is an integral way for Co-op scholars to give back to the community through events
                      that raise awareness for a diverse range of charities and social issues.
                    </p>
                  </div>
                  <div className="justify-content-center text-center mt-auto">
                    <Button className="btn-icon btn-icon-style3" href="/charity">
                      Learn more
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
