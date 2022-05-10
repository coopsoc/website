import React from "react";

// core components
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// yess let's get those animations
import "animate.css";

// reactstrap components
import {
  Container,
  Col,
  Row
} from "reactstrap";

import CharityEvents from "../components/charity/CharityEvents";
import CharityList from "../components/charity/CharityList";
import CharityModal from "../components/charity/CharityModal";
import CharityUpcoming from "../components/charity/CharityUpcoming";

import { START, END, EVENTS } from "../data/CharityData.js";

class Charity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // State for the modal
      showModal: false,
      currentEvent: {},
    };
  }

  // Given a charity event, display its details in the modal.
  displayInfo = (event) => {
    this.setState({
      showModal: true,
      currentEvent: event,
    });
  }

  // Toggle the modal on or off.
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <>
        <Navigation />
        <main>
          <Header />

          <section className="charity-section">
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <h1 className="animate__animated animate__zoomIn animate__fast">CHARITY</h1>
              </Col>
            </Row>

            <Container className="py-lg-md d-flex">
              <Row className="justify-content-center text-center">
                <Col lg="8">
                  <p className="lead text-muted">
                    Co-op Soc merged with the Co-op Soc Charitable Society (CSCS) in
                    2018, and since then, the charity portfolio has been an integral
                    way for Co-op scholars to give back to the community. We organise
                    fun events to support a diverse range of charities and social
                    issues, providing various avenues for social impact. Beyond having
                    a positive impact on society, our core aims are to socialise, meet
                    new people and above all, contribute with a giving heart.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          <hr />

          {/* Interactive carousel for events */}
          <section className="section">
            <Row className="justify-content-center text-center mb-lg">
              <h2>Our Events</h2>
            </Row>

            <CharityEvents
              start={START}
              end={END}
              events={EVENTS}
              onClick={this.displayInfo} />
          </section>

          <hr />

          {/* List of supported charities */}
          <section className="section">
            <Row className="justify-content-center text-center mb-lg">
              <h2>Charities Supported</h2>
            </Row>

            <CharityList />
          </section>

          <hr />

          {/* List of upcoming events */}
          <section className="section">
            <Row className="justify-content-center text-center mb-lg">
              <h2>Upcoming Community Events</h2>
            </Row>

            <CharityUpcoming />
          </section>

          <CharityModal
            isOpen={this.state.showModal}
            toggle={this.toggleModal}
            event={this.state.currentEvent} />
        </main>
        <Footer />
      </>
    );
  }
}

export default Charity;
