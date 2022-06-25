import React from "react";
import Head from "next/head";
import Image from "next/image";

import BlogCard from "components/blog/BlogCard.jsx";

// Images
import Stonks from "public/img/pubs/stonks.jpeg";
import Connected from "public/img/pubs/connected.jpg";
import Placement from "public/img/pubs/placement.jpg";

// reactstrap components
import {
  Row,
  Col,
  Button,
  Container,
} from "reactstrap";

// yess let's get those animations
import "animate.css";

const Blog = () => {
  // FIXME: style up blog posts so they mesh with rest of website
  // TODO: consider converting blogs to Markdown or MDX
  return (
    <>
      <Head>
        <title>Blog | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__fadeInDown animate__fast">BLOG POSTS</h1>
          </Col>
        </Row>
      </section>

      <section className="section section-lg">
        <Row className="justify-content-center text-center mb-lg">
          <BlogCard
            title="Why Most Young People Should Start Investing"
            description="Ever considered learning to invest? This article by Ethan Wong (BIS21) - a passionate young investor himself - outlines why you should, and how you can make a start on it today!"
            img={Stonks}
            href="https://ethwong.medium.com/why-most-young-people-should-start-investing-6ea64448ef6b" />

          <BlogCard
            title="Social Distancing Without the Socially Distant"
            description="How can we stay connected during isolation?"
            img={Connected}
            href="/blog/social-distance" />
        </Row>

        <Row className="justify-content-center text-center mb-lg">
          <BlogCard
            title="First Placement Experiences"
            description="Read about some of our past Exec's placement experiences!"
            img={Placement}
            href="/blog/placement" />
        </Row>
      </section>
    </>
  );
}

export default Blog;
