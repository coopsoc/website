
import React from "react";
import Image from "next/image";

// core components
import Header from "components/Header";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

// Images
import Stonks from "assets/img/pubs/stonks.jpeg";

import Connected from "assets/img/pubs/connected.jpg";
import Placement from "assets/img/pubs/placement.jpg";

// reactstrap components
import {
  Modal,
  Row,
  Col,
  Button,
  Container,
} from "reactstrap";


// yess let's get those animations
import "animate.css"

import SocialDistanceBlog from "components/blog/SocialDistanceBlog.jsx";
import PlacementBlog from "components/blog/PlacementBlog.jsx";


class Blog extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  // TODO: move blog posts to separate pages instead of making them components
  render() {
    return (
      <>
        <Navigation />
        <main>
          <Header />
          <section className="section section-lg">
            <Row className="justify-content-center text-center ">
              <Col lg="8">

                <h1 className="animate__animated animate__fadeInDown animate__fast">BLOG POSTS</h1>
              </Col>
            </Row>
          </section>

          <section className="section section-lg mt--200 ">
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
                      <Button
                        className="mt-4"
                        color="index"
                        onClick={() => this.toggleModal("modal1")}
                      >
                        Learn more
                      </Button>
                    </div>

                  </div>
                </Container>
              </Col>
            </Row>

            <Row className="justify-content-center text-center ">
              <Col lg="5">
                <br></br>
                <br></br>
                <Container className="py-lg-md d-flex">
                  <div className="card">
                    <Image src={Placement} className="card-img-top" />
                    <div className="card-body" >
                      <h5 className="card-title" style={{ height: '50px' }}><b>First Placement Experiences</b></h5>
                      <p className="card-text" style={{ height: '100px' }}>Read about some of our past Exec's placement experiences!</p>

                      <Button
                        className="mt-4"
                        color="index"
                        onClick={() => this.toggleModal("modal2")}
                      >
                        Learn more
                      </Button>
                    </div>
                  </div>
                </Container>
              </Col>

            </Row>


            {/* Social Distancing Without the Socially Distant */}
            <Modal
              className="modal-dialog-centered modal-lg"
              isOpen={this.state.modal1}
              toggle={() => this.toggleModal("modal1")}
            >
              <SocialDistanceBlog />
            </Modal>

            <Modal
              className="modal-dialog-centered modal-lg"
              isOpen={this.state.modal2}
              toggle={() => this.toggleModal("modal2")}
            >
              <PlacementBlog />
            </Modal>

          </section>
        </main>
        <Footer />
      </>
    );
  }

}


export default Blog;
