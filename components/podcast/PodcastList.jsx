import React from "react";
import { Row, Col } from "reactstrap";

import PodcastPlayer from "./PodcastPlayer";

import PODCASTS from "data/PodcastData";

const PodcastList = () => {
  return (
    <Row>
      {PODCASTS.map((podcast, index) => (
        <Col key={`podcast-${index}`} md={6}>
          <PodcastPlayer podcast={podcast} />
        </Col>
      ))}
    </Row>
  )
};

export default PodcastList;
