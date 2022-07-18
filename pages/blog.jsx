import React from "react";
import Head from "next/head";
import Image from "next/image";

// reactstrap components
import {
  Row,
  Col,
  Button,
  Container,
} from "reactstrap";

// yess let's get those animations
import "animate.css";

import BlogCard from "components/blog/BlogCard.jsx";

import { partition } from "scripts/list";
import { getAllArticles } from "scripts/article";

const Blog = ({ posts }) => {
  // FIXME: style up blog posts so they mesh with rest of website
  // TODO: consider converting blogs to Markdown or MDX
  const rows = partition(posts, 2);

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
        {rows.map((row, index) => (
          <Row 
            key={`blog-row-${index}`}
            className="justify-content-center text-center mb-lg">
            {row.map((post, postIndex) => (
              <BlogCard
                key={`blog-${index}-${postIndex}`}
                title={post.title}
                description={post.description}
                img={post.image}
                href={`/blog/${post.slug}`} />
            ))}
          </Row>
        ))}
      </section>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const articles = await getAllArticles();

  const sorted = articles
    .sort((a, b) => {
      if (a.published.isBefore(b.published)) {
        return -1;
      } else if (a.published.isAfter(b.published)) {
        return 1;
      } else {
        return 0;
      }
    })
    .map(article => {
      return {
        ...article,
        published: article.published.toISOString(),
      };
    });

  return {
    props: {
      posts: sorted,
    }
  }
}
