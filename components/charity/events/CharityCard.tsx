import React from "react";
import Image from "next/image";

import { Col } from "reactstrap";
import { CharityEvent, CharityEventProps } from "../../../data/types";
import { ClickableEvent } from "components/types";

interface CharityCardProps
  extends CharityEventProps,
    ClickableEvent<CharityEvent, void> {}

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
