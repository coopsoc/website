import React, { useRef, useEffect } from "react";
import { Col, Container } from "reactstrap";

import Slider from "nouislider";
import wNumb from "wnumb";

const YearSlider = ({ start, end, onChange }) => {
  const sliderRef = useRef(null);

  const updateSlider = (values, _) => {
    const year = parseInt(values[0]);
    onChange(year);
  }

  useEffect(() => {
    const sliderNode = sliderRef.current;

    Slider.create(sliderRef.current, {
      start: [end],
      connect: [true, false],
      step: 1,
      range: { min: start, max: end },
      format: wNumb({
        decimals: 0
      })
    }).on("update", updateSlider);

    return () => {
      if (sliderNode) {
        sliderNode.noUiSlider.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="py-lg-md d-flex">
        <Col></Col>
        <Col lg="5" sm="8">
          <div className="slider" ref={sliderRef} />
        </Col>
        <Col></Col>
      </Container>
      <Container className="py-lg-md d-flex">
        <Col></Col>
        <p>{start}</p>
        <Col className="mt-4 mt-md-0" lg="2" sm="2"></Col>
        <Col className="mt-4 mt-md-0" lg="2" sm="2"></Col>
        <p>{end}</p>
        <Col></Col>
      </Container>
    </>
  );
}

export default YearSlider;
