import React from "react";
import Head from "next/head";

// reactstrap components
import { Row, Col, Container, Button } from "reactstrap";

// yess let's get those animations
import "animate.css";

// core components
import NomineeCard from "components/nominations/NomineeCard";
import NomineeModal from "components/nominations/NomineeModal";

import NOMINEES from "data/NominationsData.js";
import { useState } from "react";

import styles from "styles/modules/nominations.module.scss";

const Egm = () => {
  const [showModal, setShowModal] = useState(false);
  const [nominee, setNominee] = useState({});

  // Given a person's name, returns all roles they're nominated for
  const getNominatedRoles = (name) => {
    const roles = [];

    for (const role of NOMINEES) {
      const role_name = role.role;

      if (role.nominees.find((data) => data.name === name)) {
        roles.push(role_name);
      }
    }

    return roles;
  };

  const clickNominee = (nominee) => {
    setShowModal(true);
    setNominee(nominee);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Head>
        <title>EGM | UNSW Co-op Society</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <section className="section section-lg">
        {/* Title */}
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">
              EGM EXEC/DIRECTOR NOMINEES
            </h1>
          </Col>
        </Row>

        {/* PreferenceKey */}
        <Row className="justify-content-center text-center mb-md">
          <Col lg="8">
            <Button
              className="mt-4"
              color="primary"
              target="_blank"
              href="https://youtube.com/watch?v=dQw4w9WgXcQ"
            >
              Vote Now!
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <h4>
            <mark className={styles["mark-1"]}>
              &nbsp;&nbsp;&nbsp;&nbsp;First Preference&nbsp;&nbsp;&nbsp;
            </mark>
          </h4>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <h4>
            <mark className={styles["mark-2"]}>
              &nbsp;Second Preference&nbsp;
            </mark>
          </h4>
        </Row>

        <br></br>

        <Row className="justify-content-center text-center">
          <h3>Click on each nominee to find out more!</h3>
        </Row>

        {/* Rendering all nominees using map functions */}
        <div className="container">
          {/* Iterate over every role */}
          {NOMINEES.map((role, index) => (
            <>
              <hr />
              <br />
              {role.role === "Marketing Director" ? (
                <div>
                  <Row className="justify-content-center text-center">
                    <h2>{role.role}</h2>
                  </Row>
                  <Row className="justify-content-center text-center mb-md">
                    <p style={{ fontSize: 20 }}>
                      Two directors will be elected.
                    </p>
                  </Row>
                </div>
              ) : (
                <Row className="justify-content-center text-center mb-md">
                  <h2>{role.role}</h2>
                </Row>
              )}
              <div className="row justify-content-center">
                <Container>
                  <div className="row justify-content-center">
                    {/* Iterate over every nominee going for that role */}
                    {role.nominees
                      // Sort by last name
                      .sort((a, b) =>
                        a.name
                          .split(" ")
                          .slice(-1)[0]
                          .localeCompare(b.name.split(" ").slice(-1)[0]),
                      )
                      .map((nominee, nomineeIndex) => (
                        <NomineeCard
                          key={`nominee-${index}-${nomineeIndex}`}
                          data={nominee}
                          onClick={() => clickNominee(nominee)}
                        />
                      ))}
                  </div>
                </Container>
              </div>
            </>
          ))}
        </div>
        <div className="container justify-content-center text-center">
          <hr />
          <h1>Constitution Updates</h1>
          <p style={{ fontWeight: "bold" }}>
            Proposed updates to the constitution can be seen{" "}
            <a href="/Constitution_Proposal.pdf">here.</a> Please read and be
            prepared to vote for/against during the EGM. <br />
            Note: Changes are highlighted in yellow.
          </p>
        </div>
      </section>

      <NomineeModal
        data={nominee}
        roles={getNominatedRoles(nominee.name)}
        isOpen={showModal}
        toggle={toggleModal}
      />
    </>
  );
};

export default Egm;
