import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";

import dayjs from "scripts/dayjs";

const BlogCard = ({ title, description, img, published, href }) => {
  return (
    <Card>
      <CardImg src={img} alt={title} top />

      <CardBody className="d-flex flex-column">
        <CardTitle tag="h5" className="h-50">
          {title}
        </CardTitle>
        <CardText className="h-100 align-self-center">{description}</CardText>

        <Button color="index" href={href} target="_Blank" className="mb-4">
          Learn more
        </Button>

        <CardFooter className="pt-2 pb-0 pl-2 pr-2 bg-white">
          <p className="text-left text-sm text-muted">
            {dayjs(published).fromNow()}
          </p>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
