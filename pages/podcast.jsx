import React from "react";

import { Col, Row } from "reactstrap";

import Navigation from "components/Navigation";
import Header from "components/Header";
import Footer from "components/Footer";

import PodcastList from "components/podcast/PodcastList";

const Podcast = () => {
  return (
    <>
      <Navigation />
      <Header />

      <main>
        <section className="section section-lg">
          <Row className="justify-content-center text-center ">
            <Col lg="8">
              <h1 className="animate__animated animate__fadeInDown animate__fast">PODCAST</h1>
            </Col>
          </Row>
        </section>

        <section className="section">
          <PodcastList />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Podcast;
