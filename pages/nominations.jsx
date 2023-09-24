import React from "react";

// reactstrap components
import { Row, Col, Container, Button } from "reactstrap";

// yess let's get those animations
import "animate.css"

// core components
import NomineeCard from "components/nominations/NomineeCard";
import NomineeModal from "components/nominations/NomineeModal";

import NOMINEES from "data/NominationsData.js";
import { useState } from "react";

import styles from "styles/modules/nominations.module.scss";

const Nominations = () => {
  const [showModal, setShowModal] = useState(false);
  const [nominee, setNominee] = useState({});

  // Given a person's name, returns all roles they're nominated for
  const getNominatedRoles = (name) => {
    const roles = [];

    for (const role of NOMINEES) {
      const role_name = role.role;

      if (role.nominees.find(data => data.name === name)) {
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
      <section className="section section-lg">
        {/* Title */}
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">
              2023 EXEC NOMINEES
            </h1>
          </Col>
        </Row>

        {/* PreferenceKey */}
        <Row className="justify-content-center text-center mb-md">
          <Col lg="8">
            <Button
              className="mt-4"
              color="index2"
              target="_blank"
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7oytFJak2vGJHu9CXh1oxuxxUMTVNNEJPUDRHRlpGWkgwVjdYVEZNSDJJMi4u"
            >
              Vote Now!
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <p style={{ fontSize: 16 }}>
            <mark className={styles["mark-1"]}>
              &nbsp;&nbsp;&nbsp;&nbsp;First Preference&nbsp;&nbsp;&nbsp;
            </mark>
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <p style={{ fontSize: 16 }}>
            <mark className={styles["mark-2"]}>
              &nbsp;Second Preference&nbsp;
            </mark>
          </p>
        </Row>

        <br></br>

        <Row className="justify-content-center text-center">
          <p>Click on each nominee to find out more!</p>
        </Row>

        {/* Rendering all nominees using map functions */}
        <div className="container">
          {/* Iterate over every role */}
          {NOMINEES.map((role, index) => (
            <>
              <hr />
              <br />
              {(role.role === "Marketing Director" || role.role === "Charity Director")
                ?
                <div>
                  <Row className="justify-content-center text-center">
                    <h2>{role.role}</h2>
                  </Row>
                  <Row className="justify-content-center text-center mb-md">
                    <p style={{ fontSize: 20 }}>Two directors will be elected.</p>
                  </Row>
                </div>
                :
                <Row className="justify-content-center text-center mb-md">
                  <h2>{role.role}</h2>
                </Row>
              }
              <div className="row justify-content-center">

                <Container>
                  <div className="row justify-content-center">
                    {/* Iterate over every nominee going for that role */}
                    {role.nominees.map((nominee, nomineeIndex) => (
                      <NomineeCard
                        key={`nominee-${index}-${nomineeIndex}`}
                        data={nominee}
                        onClick={() => clickNominee(nominee)} />
                    ))}
                  </div>
                </Container>
              </div>

              <br />
              <br />
              <br />
            </>
          ))}
        </div>
      </section>

      <NomineeModal
        data={nominee}
        roles={getNominatedRoles(nominee.name)}
        isOpen={showModal}
        toggle={toggleModal} />
    </>
  );
}

export default Nominations;
