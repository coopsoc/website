import React, { cloneElement, useState } from "react";
import { Card, Container, Row } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import YearSlider from "components/YearSlider";
import CharityCard from "./events/CharityCard";

import styles from "styles/modules/CharityEvents.module.scss";

import { END, EVENTS, START } from "data/CharityData";
import { CharityEvent } from "../../data/types";
import { ClickableEvent } from "components/types";

// TODO: events sliding is still a bit janky, patch up when possible
const CharityEvents = ({ onClick }: ClickableEvent<CharityEvent, void>) => {
  const [year, setYear] = useState<number>(END);
  const [direction, setDirection] = useState<string>("left");

  const updateYear = (newYear: number) => {
    // Using a callback here to ensure that state gets updated properly -
    // when we didn't use a callback, `prev` would always be stuck on END
    setYear((prev) => {
      if (newYear === prev) return newYear;

      const dirCheck = newYear < prev;
      const slideOut = dirCheck ? "right" : "left";
      const slideIn = dirCheck ? "left" : "right";

      setDirection(slideOut);

      setTimeout(() => {
        setDirection(slideIn);
      }, 500);

      return newYear;
    });
  };

  const renderYear = () => {
    const yearIndex = year - START;
    const events = EVENTS[yearIndex];

    return (
      <Container className={styles["charity-container"]}>
        <Card className="bg-gradient-neutral shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
              <div className="row">
                {events.map((event, index) => (
                  <CharityCard key={index} event={event} onClick={onClick} />
                ))}
              </div>
            </Row>
          </div>
        </Card>
      </Container>
    );
  };

  const fetchStyles = () => {
    const style = direction === "right" ? "left-to-right" : "right-to-left";

    return {
      enter: styles[`${style}-enter`],
      enterActive: styles[`${style}-enter-active`],
      exit: styles[`${style}-exit`],
      exitActive: styles[`${style}-exit-active`],
    };
  };

  return (
    <>
      <YearSlider start={START} end={END} onChange={updateYear} />

      <TransitionGroup
        childFactory={(child) => {
          return cloneElement(child, {
            classNames: fetchStyles(),
            timeout: 1000,
            unmountOnExit: true,
          });
        }}
      >
        <CSSTransition
          key={`transition-${year}`}
          classNames={fetchStyles()}
          timeout={1000}
          unmountOnExit
        >
          <Container>{renderYear()}</Container>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default CharityEvents;
