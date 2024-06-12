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
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <br></br>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <div className="container">
                <a className="footerLink" href="/Constitution.pdf">
                  Constitution
                </a>{" "}
                |{" "}
                <a
                  className="footerLink"
                  href="/Grievance-Resolution-Policy-Procedure.pdf"
                >
                  Grievance Policy
                </a>
              </div>
              <div className="container">
                Copyright &copy; 2023 UNSW Co-op Society
              </div>
              <br></br>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
