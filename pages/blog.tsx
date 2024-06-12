import React from "react";
import Head from "next/head";
// reactstrap components
import { Row, Col, CardDeck } from "reactstrap";

// yess let's get those animations
import "animate.css";

import BlogCard from "components/blog/BlogCard";

import { partition } from "scripts/list";
import { getAllArticles } from "scripts/article";

type Post = {
  title: string;
  description: string;
  image: string;
  published: string;
  link: string;
  slug: string;
};

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => {
  // TODO: add dates published to each blog
  const rows: Post[][] = partition(posts, 3);

  return (
    <>
      <Head>
        <title>Blog | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__fadeInDown animate__fast">
              BLOG POSTS
            </h1>
          </Col>
        </Row>
      </section>

      <section className="section section-lg">
        <Row className="justify-content-center text-center">
          <Col lg="8">
            {rows.map((row, index) => (
              <CardDeck key={`blog-row-${index}`} className="mb-lg">
                {row.map((post, postIndex) => (
                  <BlogCard
                    key={`blog-${index}-${postIndex}`}
                    title={post.title}
                    description={post.description}
                    img={post.image}
                    published={post.published}
                    href={post.link === null ? `/blog/${post.slug}` : post.link}
                  />
                ))}
              </CardDeck>
            ))}
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const articles = await getAllArticles();

  const sorted = articles
    .sort((a, b) => {
      if (a.published.isBefore(b.published)) {
        return 1;
      } else if (a.published.isAfter(b.published)) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((article) => {
      return {
        ...article,
        published: article.published.toISOString(),
      };
    });

  return {
    props: {
      posts: sorted,
    },
  };
}
