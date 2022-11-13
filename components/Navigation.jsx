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

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

// reactstrap components
import {
  Collapse,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  NavbarToggler,
} from "reactstrap";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import Logo from "public/img/brand/logo_white.png";
import LogoSmall from "public/img/brand/logo_small.png";

import NextNavbarBrand from "./link/NextNavbarBrand.jsx";
import NextNavLink from "./link/NextNavLink.jsx";
import NavIcon from "./navigation/NavIcon.jsx";

const Navigation = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });

  const getNavLinkClass = (path) => {
    return router.pathname === path ? "active" : "navbar-hover navbar-nav-hover align-items-lg-center";
  }

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

            <NavbarToggler onClick={() => setOpen(true)} />

            <Collapse isOpen={open} navbar>
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
                    {/* Needs two spans to make "X" shape */}
                    <NavbarToggler onClick={() => setOpen(false)} >
                      <span />
                      <span />
                    </NavbarToggler>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-click align-items-lg-center" navbar>
                {
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <span className="nav-link-inner--text">ABOUT   </span>
                  </DropdownToggle>
                  <DropdownMenu style={{ marginTop: "20px", marginLeft: "18px"}}>
                    <DropdownItem>
                      <NavItem>
                        <Link href="/about" passHref>
                          <NextNavLink style={{ color: 'grey' }}>
                            About Us
                          </NextNavLink>
                        </Link>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <Link href="/team" passHref>
                          <NextNavLink style={{ color: 'grey' }}>
                            The Team
                          </NextNavLink>
                        </Link>
                      </NavItem>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                }

                <NavItem>
                  <Link href="/events" passHref>
                    <NextNavLink
                      className={getNavLinkClass("/events")}
                    >
                      <span className="nav-link-inner--text">EVENTS</span>
                    </NextNavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href="/publications" passHref>
                    <NextNavLink
                      className={getNavLinkClass("/publications")}
                    >
                      <span className="nav-link-inner--text">PUBLICATIONS</span>
                    </NextNavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href="/charity" passHref>
                    <NextNavLink
                      className={getNavLinkClass("/charity")}
                    >
                      <span className="nav-link-inner--text">CHARITY</span>
                    </NextNavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href="/nominations" passHref>
                    <NextNavLink
                      className={getNavLinkClass("/nominations")}
                    >
                      <span className="nav-link-inner--text">2023 NOMINEES</span>
                    </NextNavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href="https://merch.coopsoc.com.au" passHref>
                    <NextNavLink
                      className="navbar-hover navbar-nav-hover align-items-lg-center"
                    >
                      <span className="nav-link-inner--text">MERCH</span>
                    </NextNavLink>
                  </Link>
                </NavItem>
              </Nav>


              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavIcon
                  href="https://www.facebook.com/coopsoc.unsw/"
                  id="tooltip-facebook"
                  icon={faFacebookSquare}
                  collapseText="FACEBOOK"
                  tooltip="Like us on Facebook" />
                <NavIcon
                  href="mailto: coopsoc.unsw@gmail.com"
                  id="tooltip-email"
                  icon={faEnvelope}
                  collapseText="EMAIL"
                  tooltip="Email us" />
                <NavIcon
                  href="https://www.instagram.com/coopsoc_unsw/"
                  id="tooltip-instagram"
                  icon={faInstagram}
                  collapseText="INSTAGRAM"
                  tooltip="Follow us on Instagram" />
                <NavIcon
                  href="https://www.linkedin.com/company/unsw-co-op-society/"
                  id="tooltip-linkedin"
                  icon={faLinkedinIn}
                  collapseText="LINKEDIN"
                  tooltip="Connect on LinkedIn" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;