import React from "react";
import Head from "next/head";
import Link from "next/link";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// yess let's get those animations
import "animate.css";

// Fas Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faMicrophoneAlt,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

import NextCardBody from "components/link/NextCardBody";

const Publications = () => {
  return (
    <>
      <Head>
        <title>Publications | UNSW Co-op Society</title>
      </Head>

      <section className="section section-sm">
        <Row className="justify-content-around text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast pb-4 mt-3 mt-sm-5">
              PUBLICATIONS
            </h1>
          </Col>
        </Row>

        <Container className="pb-4 pb-md-5 d-flex">
          <Row className="justify-content-center text-center">
            <Col lg="10">
              <p className="lead text-muted">
                A central part of the Co-op society is the Publications
                portfolio who helps provide additional professional support for
                our Co-op scholars. Our work includes the First Year Guide,
                writing blogs and now an upcoming podcast with alumni who have
                stories to share. Together, our goal is to create a platform in
                which scholars past and present can share their experiences,
                learn something new, and stay connected.
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <a
                      href="https://www.coopsoc.com.au/FYG2021.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CardBody className="py-5 align-items-center">
                        <div>
                          <div className="icon icon-shape icon-shape-style1 rounded-circle mb-4">
                            <FontAwesomeIcon icon={faHandsHelping} size="4x" />
                          </div>
                          <h6
                            style={{ textAlign: "center" }}
                            className="display-4 text-uppercase"
                          >
                            First Year Guide
                          </h6>
                        </div>
                      </CardBody>
                    </a>
                  </Card>
                </Col>

                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <Link href="/blog" passHref>
                      <NextCardBody className="py-5">
                        <div className="icon icon-shape icon-shape-style2 rounded-circle mb-4">
                          <FontAwesomeIcon icon={faPencil} size="4x" />
                        </div>
                        <h6
                          style={{ textAlign: "center" }}
                          className="display-4 text-uppercase"
                        >
                          Blog Posts
                        </h6>
                      </NextCardBody>
                    </Link>
                  </Card>
                </Col>

                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <Link href="/podcast" passHref>
                      <NextCardBody className="py-5">
                        <div className="icon icon-shape icon-shape-style3 rounded-circle mb-4">
                          <FontAwesomeIcon icon={faMicrophoneAlt} size="4x" />
                        </div>
                        <h6
                          style={{ textAlign: "center" }}
                          className=" display-4 text-uppercase"
                        >
                          Podcast
                        </h6>
                      </NextCardBody>
                    </Link>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Publications;
