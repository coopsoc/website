import { Blog } from "../../data/types";
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

const BlogCard = (blog: Blog) => {
  return (
    <Card>
      <CardImg src={blog.img} alt={blog.title} top />

      <CardBody className="d-flex flex-column">
        <CardTitle tag="h5" className="h-50">
          {blog.title}
        </CardTitle>
        <CardText className="h-100 align-self-center">
          {blog.description}
        </CardText>

        <Button color="index" href={blog.href} target="_Blank" className="mb-4">
          Learn more
        </Button>

        <CardFooter className="pt-2 pb-0 ps-2 pe-2 bg-white">
          <p className="text-left text-sm text-muted">
            {dayjs(blog.published).fromNow()}
          </p>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
