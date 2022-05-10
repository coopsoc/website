import React, { cloneElement } from "react";
import { Card, Container, Row } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import YearSlider from "../YearSlider.jsx";
import CharityCard from "./events/CharityCard.jsx";

import styles from "styles/modules/CharityEvents.module.scss";

class CharityEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: props.end,
      slideIn: true,
      direction: "left"
    };
  }

  updateYear = (year) => {
    if (year === this.state.year) return;
    
    const dir_check = year > this.state.year;
    const slide_out = dir_check ? "right" : "left";
    const slide_in = dir_check ? "left" : "right";

    this.setState({
      slideIn: false,
      direction: slide_out
    });

    setTimeout(() => {
      this.setState({
        year: year,
        slideIn: true,
        direction: slide_in
      });
    }, 500);
  }

  renderYear = () => {
    const year_index = this.state.year - this.props.start;
    const events = this.props.events[year_index];

    return (
      <Container className={styles["charity-container"]}>
        <Card className="bg-gradient-neutral shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
              <div className="row">
                {events.map((event, index) => (
                  <CharityCard
                    key={index}
                    event={event}
                    onClick={() => this.props.onClick(event)} />
                ))}
              </div>
            </Row>
          </div>
        </Card>
      </Container>
    );
  }

  fetchStyles = (style) => {
    return {
      enter: styles[`${style}-enter`],
      enterActive: styles[`${style}-enter-active`],
      exit: styles[`${style}-exit`],
      exitActive: styles[`${style}-exit-active`]
    };
  }

  render() {
    return (
      <>
        <YearSlider
          start={this.props.start}
          end={this.props.end}
          onChange={year => this.updateYear(year)} />

        <TransitionGroup childFactory={child => {
          return cloneElement(child, {
            classNames: this.state.direction === "right" ?
              this.fetchStyles("left-to-right") :
              this.fetchStyles("right-to-left"),
            timeout: 1000,
            unmountOnExit: true
          });
        }}>
          <CSSTransition
            key={`transition-${this.state.year}`}
            classNames={this.fetchStyles("left-to-right")}
            timeout={1000}
            unmountOnExit>
            <Container>
              {this.renderYear()}
            </Container>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}

export default CharityEvents;
