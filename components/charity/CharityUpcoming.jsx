import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";

import styles from "styles/modules/CharityUpcoming.module.scss";

import { UPCOMING } from "data/CharityData.js";

const CharityUpcoming = () => {
  return (
    <Container>
      <Row className="justify-content-center h-100">
        {UPCOMING.map((event, index) => (
          <Col
            key={`charity-upcoming-${event.name}-${index}`}
            xs={12} sm={6} md={4} lg={3}
            className="mb-2 mb-lg-0 text-center d-flex flex-column">
            <Image
              className={styles["upcoming-image"]}
              alt={event.name}
              src={event.image} />
            <b className="mt-auto">{event.name}</b>
            <p>{event.date}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CharityUpcoming;
