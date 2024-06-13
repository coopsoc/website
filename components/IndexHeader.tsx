import React from "react";
import { Col, Container, Row } from "reactstrap";
import Typewriter from "typewriter-effect";

import styles from "styles/modules/IndexHeader.module.scss";

const IndexHeader = () => {
  return (
    <div className="position-relative">
      {/* shape Hero */}
      <section className="section section-lg section-shaped pb-250">
        <div className="shape shape-style-custom shape-primary">
          <span className="floating" />
          <span className="floating" />
          <span className="floating" />
          <span className="floating" />
          <span className="floating" />
          <span className="floating" />
          <span className="floating" />
        </div>

        <Container className="d-flex">
          <div className="col px-0">
            <br></br>
            <Row>
              <Col lg="8" className={styles.typewriter}>
                <Typewriter
                  options={{ loop: false }}
                  onInit={(typewriter) => {
                    typewriter.typeString("UNSW CO-OP SOCIETY").start();
                  }}
                />
                <p className="lead text-white" style={{ fontWeight: "normal" }}>
                  A society for co-ops, by co-ops.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 4000 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="4000 0 4000 105 0 105" />
          </svg>
        </div>
      </section>
      {/* 1st Hero Variation */}
    </div>
  );
};

export default IndexHeader;
