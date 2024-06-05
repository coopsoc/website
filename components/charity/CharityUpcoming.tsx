import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Col, Container, Row } from "reactstrap";

import { partition } from "scripts/list";
import { UPCOMING } from "data/CharityData";

import useBreakpoints from "./upcoming/useBreakpoints";
import { CharityEvent } from "data/types";

const CharityUpcoming = () => {
  const [small, medium, large]: boolean[] = useBreakpoints([720, 960, 1140]);
  const [parts, setParts] = useState<React.JSX.Element[][]>([]);

  const rowToDisplay = (row: CharityEvent[]) => {
    const images: React.JSX.Element[] = [];
    const text: React.JSX.Element[] = [];

    for (let i = 0; i < row.length; i++) {
      const item = row[i];

      images.push(<Image alt={item.title} src={item.image} />);

      text.push(
        <>
          <b>{item.title}</b>
          <p className="mt-auto">{item.date}</p>
        </>,
      );
    }

    return [images, text];
  };

  // Breakpoints change whenever we resize, and we need to change the number
  // of items in each row for a responsive layout
  useEffect(() => {
    const rowItems = Number(!small) + Number(!medium) + Number(!large) + 1;

    const partitioned = partition(UPCOMING, rowItems).map(rowToDisplay).flat(1);
    setParts(partitioned);
  }, [small, medium, large]);

  return (
    <Container>
      {parts.map((row, index) => (
        <Row
          key={`upcoming-row-${index}`}
          className="justify-content-center align-items-center"
        >
          {row.map((item, itemIndex) => (
            <Col
              key={`upcoming-col-${index}-${itemIndex}`}
              sm={6}
              md={4}
              lg={3}
              className="mb-2 mb-lg-0 text-center"
            >
              {item}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default CharityUpcoming;
