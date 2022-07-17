import React from "react";
import Image from "next/image";

import { Button, Col, Container } from "reactstrap";

const BlogCard = ({ title, description, img, href }) => {
  return (
    <Col lg="5">
      <Container className="py-lg-md d-flex">
        <div className="card">
          <Image alt={title} src={img} layout="fill" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" style={{ height: '50px' }}><b>{title}</b></h5>
            <p className="card-text" style={{ height: '100px' }}>{description}</p>

            <Button
              className="mt-4"
              color="index"
              href={href}
              target="_Blank"
            >
              Learn more
            </Button>
          </div>
        </div>
      </Container>
    </Col>
  )
};

export default BlogCard;
