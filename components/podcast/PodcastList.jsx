import React from "react";
import { Col } from "reactstrap";

import PodcastPlayer from "./PodcastPlayer";

import PODCASTS from "data/PodcastData";

const PodcastList = () => {
  return (
    <>
      {PODCASTS.map((podcast, index) => (
        <Col
          key={`podcast-${index}`}
          md={6} lg={4}>
          <PodcastPlayer podcast={podcast} />
        </Col>
      ))}
    </>
  )
};

export default PodcastList;
