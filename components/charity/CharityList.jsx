import React from "react";
import Image from "next/image";
import { Container, Row } from "reactstrap";

import { SPONSORS } from "../../data/CharityData";

const CharityList = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        {SPONSORS.map(sponsor => (
          <div className="col-lg-3 mb-3 mb-lg-0">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <Image
                alt={sponsor.name}
                src={sponsor.image}
                style={{ width: "100%" }} />
            </a>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default CharityList;
