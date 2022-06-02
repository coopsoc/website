
import React from "react";
import Image from "next/image";

// Images
import Stonks from "assets/img/pubs/stonks.jpeg";

import Connected from "assets/img/pubs/connected.jpg";
import Placement from "assets/img/pubs/placement.jpg";

// reactstrap components
import {
  Row,
  Col,
  Button,
  Container,
} from "reactstrap";

// yess let's get those animations
import "animate.css"

const Blog = () => {
  // FIXME: style up blog posts so they mesh with rest of website
  // TODO: consider converting blogs to Markdown or MDX
  return (
    <>
      <section className="section section-lg">
        <Row className="justify-content-center text-center ">
          <Col lg="8">
            <h1 className="animate__animated animate__fadeInDown animate__fast">BLOG POSTS</h1>
          </Col>
        </Row>
      </section>

      <section className="section section-lg mt--200">
        <Row className="justify-content-center text-center ">
          <Col lg="5">
            <br></br>
            <br></br>
            <Container className="py-lg-md d-flex">
              <div className="card">
                <Image src={Stonks} className="card-img-top" />
                <div className="card-body" >
                  <h5 className="card-title" style={{ height: '50px' }}><b>Why Most Young People Should Start Investing</b></h5>
                  <p className="card-text" style={{ height: '100px' }}>Ever considered learning to invest? This article by Ethan Wong (BIS21) - a passionate young investor himself - outlines why you should, and how you can make a start on it today!</p>

                  <Button
                    className="mt-4"
                    color="index"
                    href="https://ethwong.medium.com/why-most-young-people-should-start-investing-6ea64448ef6b"
                    target="_Blank"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </Container>
          </Col>

          <Col lg="5">
            <br></br>
            <br></br>
            <Container className="py-lg-md d-flex">
              <div className="card">
                <Image src={Connected} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title" style={{ height: '50px' }}><b>Social Distancing Without the Socially Distant</b></h5>
                  <p className="card-text" style={{ height: '100px' }}>How can we stay connected during isolation?</p>

                  <Button className="mt-4" color="index" href="/blog/social-distance">
                    Learn more
                  </Button>
                </div>

              </div>
            </Container>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col lg="5">
            <br></br>
            <br></br>
            <Container className="py-lg-md d-flex">
              <div className="card">
                <Image src={Placement} className="card-img-top" />
                <div className="card-body" >
                  <h5 className="card-title" style={{ height: '50px' }}><b>First Placement Experiences</b></h5>
                  <p className="card-text" style={{ height: '100px' }}>Read about some of our past Exec&apos;s placement experiences!</p>

                  <Button className="mt-4" color="index" href="/blog/placement">
                    Learn more
                  </Button>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Blog;
