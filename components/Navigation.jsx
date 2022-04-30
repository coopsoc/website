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
import Link from "next/link";
import { withRouter } from "next/router";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

// reactstrap components
import {
  UncontrolledCollapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import Image from "next/image";

import Logo from "../assets/img/brand/logo_white.png";
import LogoSmall from "../assets/img/brand/logo_small.png";

import NextNavbarBrand from "./link/NextNavbarBrand";
import NextNavLink from "./link/NextNavLink";

class Navigation extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }

  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  getNavLinkClass = (path) => {
    return this.props.router.pathname === path ? "active" : "navbar-hover navbar-nav-hover align-items-lg-center";
  }

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <Link href="/" passHref>
                <NextNavbarBrand className="mr-lg-5">
                  <Image alt="..." src={Logo} />
                </NextNavbarBrand>
              </Link>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>

              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link href="/">
                        <a>
                          <Image
                            alt="..."
                            src={LogoSmall}
                          />
                        </a>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar >
                  <NavItem>
                    <Link href="/team" passHref>
                      <NextNavLink
                        className={this.getNavLinkClass("/team")}
                      >
                        <span className="nav-link-inner--text">THE  TEAM</span>
                      </NextNavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/events" passHref>
                      <NextNavLink
                        className={this.getNavLinkClass("/events")}
                      >
                        <span className="nav-link-inner--text">EVENTS</span>
                      </NextNavLink>
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link href="/publications" passHref>
                      <NextNavLink
                        className={this.getNavLinkClass("/publications")}
                      >
                        <span className="nav-link-inner--text">PUBLICATIONS</span>
                      </NextNavLink>
                    </Link>

                  </NavItem>

                  <NavItem>
                    <Link href="/charity" passHref>
                      <NextNavLink
                        className={this.getNavLinkClass("/charity")}
                      >
                        <span className="nav-link-inner--text">CHARITY</span>
                      </NextNavLink>
                    </Link>
                  </NavItem>
                </Nav>

                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/coopsoc.unsw/"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        FACEBOOK
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="mailto: coopsoc.unsw@gmail.com"
                      id="tooltip356643867"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        EMAIL
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356643867">
                      Email us
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/coopsoc_unsw/"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        INSTAGRAM
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/company/unsw-co-op-society/"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        LINKEDIN
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Connect on LinkedIn
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default withRouter(Navigation);
