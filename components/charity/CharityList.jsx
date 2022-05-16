import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";

import { SPONSORS } from "data/CharityData.js";

const CharityList = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        {SPONSORS.map((sponsor, index) => (
          <Col
            key={`charity-list-${sponsor.name}-${index}`}
            lg={3} className="mb-3 mb-lg-0">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <Image
                alt={sponsor.name}
                src={sponsor.image} />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CharityList;
