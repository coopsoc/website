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
import React from "react";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

// core components
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import YearSlider from "../components/YearSlider";

import ExecSection from "../components/team/ExecSection";
import Subcom from "../components/team/Subcom";

import { START, END, MEMBERS } from "../data/TeamData";

// yess let's get those animations
import "animate.css";


class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: END,
    };

    this.mainRef = React.createRef();
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.mainRef.current.scrollTop = 0;
  }

  render() {
    const currentYear = this.state.year - START;
    const members = MEMBERS[currentYear];

    return (
      <>
        <Navigation />
        <main ref={this.mainRef}>
          <Header />
          <section className="section section-lg">
            <Row className="justify-content-center text-center mb-lg">
              <Col lg="8">
                <h1 className="animate__animated animate__zoomIn animate__fast">MEET THE TEAM</h1>
              </Col>
            </Row>

            <YearSlider
              start={START}
              end={END}
              onChange={year => this.setState({
                year: year
              })} />

            <br></br>

            <div className="container">
              {members.exec.map((section, index) => (
                <ExecSection
                  key={`exec-section${index}`}
                  section={section} />
              ))}

              {members.subcoms && (
                <section className="about-section text-center bg-white pb-sm-5">
                  <div className="container subcom">
                    <hr></hr>
                    <Row className="justify-content-center text-center mb-lg">
                      <h2>The Committee</h2>
                    </Row>
                    {members.subcoms.map((portfolio, index) => (
                      <Subcom
                        key={index}
                        data={portfolio} />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Team;
