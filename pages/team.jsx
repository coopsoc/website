/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import Head from "next/head";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components
import YearSlider from "components/YearSlider.jsx";

import ExecSection from "components/team/ExecSection.jsx";
import Subcom from "components/team/Subcom.jsx";

import { START, END, MEMBERS } from "data/TeamData.js";

// yess let's get those animations
import "animate.css";

const Team = () => {
  // TODO: have this be a subpage of "About"
  const [year, setYear] = useState(END);

  const currentYear = year - START;
  const members = MEMBERS[currentYear];

  // FIXME: Keys must not change and so shouldn't be generated during rendering (good practice but not
  // strictly necessary here as the order won't change). See:
  // https://react.dev/learn/rendering-lists#rules-of-keys
  return (
    <>
      <Head>
        <title>Team | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center mb-3 mb-sm-4 mb-md-5">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">
              MEET THE TEAM
            </h1>
          </Col>
        </Row>

        <YearSlider
          start={START}
          end={END}
          onChange={(year) => setYear(year)}
        />

        <div className="container px-4 px-md-3">
          {members.exec.map((section, index) => (
            <ExecSection
              key={`exec-section-${section.sectionName}-${index}`}
              section={section}
            />
          ))}

          {members.subcoms && (
            <section className="about-section text-center bg-white pb-sm-5">
              <div className="container subcom">
                <hr />
                <Row className="justify-content-center text-center mb-4 mb-md-5">
                  <h2>The Committee</h2>
                </Row>
                {members.subcoms.map((portfolio, index) => (
                  <>
                    {/* Only have separators between subcoms */}
                    {index !== 0 && <hr />}
                    <Subcom
                      key={`subcom-${portfolio.name}-${index}`}
                      portfolio={portfolio}
                    />
                  </>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
};

export default Team;
