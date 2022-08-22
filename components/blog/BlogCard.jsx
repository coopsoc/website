import React from "react";

import { Button, Card, CardBody, CardImg, Col, Container } from "reactstrap";

const BlogCard = ({ title, description, img, href }) => {
  return (
    <Col lg="4">
      <Container className="py-lg-md">
        <Card>
          <CardImg src={img} alt={title} top />

          <CardBody>
            <h5 className="card-title" style={{ height: "50px" }}><b>{title}</b></h5>
            <p className="card-text" style={{ height: "100px" }}>{description}</p>

            <Button
              className="mt-4"
              color="index"
              href={href}
              target="_Blank">
              Learn more
            </Button>
          </CardBody>
        </Card>
      </Container>
    </Col>
  )
};

export default BlogCard;
