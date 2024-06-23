import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Head from "next/head";
import { Col, Container, Row } from "reactstrap";

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/api/checkout_sessions?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return redirect("/checkout");
  }

  if (status === "complete") {
    // TODO check if failure is possible. If so, should probably have a different message
    return (
      <>
        <Head>
          <title>Merch | UNSW Co-op Society</title>
          <meta name="robots" content="noindex"></meta>
        </Head>

        <section className="section section-sm">
          <Row className="justify-content-around text-center">
            <Col lg="8">
              <h1 className="animate__animated animate__zoomIn animate__fast pb-4 mt-3 mt-sm-5">
                SUCCESS
              </h1>
            </Col>
          </Row>

          <Container className="py-lg-md d-flex">
            <Row className="justify-content-center text-center">
              <Col lg="10">
                <p className="lead text-muted">
                  Thanks for shopping with us! A confirmation email will be sent
                  to {customerEmail}. If you have any questions, please email{" "}
                  <a href="mailto:coopsoc.unsw@gmail.com">
                    coopsoc.unsw@gmail.com
                  </a>
                  .
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }

  return null;
};

export default Return;
