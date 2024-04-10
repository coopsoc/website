import React, { useState } from "react";
import Head from "next/head";

// yess let's get those animations
import "animate.css";

// reactstrap components
import { Container, Col, Row } from "reactstrap";

import CharityEvents from "components/charity/CharityEvents";
import CharityList from "components/charity/CharityList";
import CharityModal from "components/charity/CharityModal";
import CharityUpcoming from "components/charity/CharityUpcoming";

const Charity = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});

  // Given a charity event, display its details in the modal.
  const displayInfo = (event) => {
    setShowModal(true);
    setCurrentEvent(event);
  };

  // Toggle the modal on or off.
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Head>
        <title>Charity | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">
              CHARITY
            </h1>
          </Col>
        </Row>

        <Container className="py-lg-md d-flex">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <p className="lead text-muted">
                Co-op Soc merged with the Co-op Soc Charitable Society (CSCS) in
                2018, and since then, the charity portfolio has been an integral
                way for Co-op scholars to give back to the community. We
                organise fun events to support a diverse range of charities and
                social issues, providing various avenues for social impact.
                Beyond having a positive impact on society, our core aims are to
                socialise, meet new people and above all, contribute with a
                giving heart.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <hr />

      {/* Interactive carousel for events */}
      <section className="section">
        <Row className="justify-content-center text-center mb-lg">
          <h2>Our Events</h2>
        </Row>

        <CharityEvents onClick={displayInfo} />
      </section>

      <hr />

      {/* List of supported charities */}
      <section className="section">
        <Row className="justify-content-center text-center mb-lg">
          <h2>Charities Supported</h2>
        </Row>

        <CharityList />
      </section>

      <hr />

      {/* List of upcoming events */}
      <section className="section">
        <Row className="justify-content-center text-center mb-lg">
          <h2>Upcoming Community Events</h2>
        </Row>

        <CharityUpcoming />
      </section>

      <CharityModal
        isOpen={showModal}
        toggle={toggleModal}
        event={currentEvent}
      />
    </>
  );
};

export default Charity;
