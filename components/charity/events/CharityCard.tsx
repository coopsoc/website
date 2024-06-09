import React from "react";
import Image from "next/image";

import { Col } from "reactstrap";
import { CharityEvent } from "../../../data/types";
import { ClickableEvent } from "components/types";

interface CharityCardProps extends ClickableEvent<CharityEvent, void> {
  event: CharityEvent;
}

const CharityCard = ({ event, onClick }: CharityCardProps) => {
  return (
    <Col sm={12} md={6} className="mb-4 mb-lg-4 charity-event">
      <Image
        src={event.image}
        alt={event.title}
        className="card-img-top"
        onClick={() => onClick(event)}
      />
    </Col>
  );
};

export default CharityCard;
