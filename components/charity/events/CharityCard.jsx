import React from "react";
import Image from "next/image";

import { Col } from "reactstrap";

const CharityCard = ({ event, onClick }) => {
  return (
    <Col sm={12} md={6} className="mb-4 mb-lg-4 charity-event">
      <Image
        src={event.image}
        alt={event.title}
        className="card-img-top"
        onClick={onClick} />
    </Col>
  );
}

export default CharityCard;
