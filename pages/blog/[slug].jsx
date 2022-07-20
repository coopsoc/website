import React from "react";
import Head from "next/head";

import {
  Row,
  Col,
  Container
} from "reactstrap";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { getArticle, getSlugs } from "scripts/article";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const BlogPost = ({ source, frontmatter }) => {
  // TODO: add styles to our blog
  return (
    <>
      <Head>
        <title>{frontmatter.title} | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h1>{frontmatter.title}</h1>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col lg="8">
            <p className="lead text-muted">{frontmatter.description}</p>
          </Col>
        </Row>
      </section>

      <section className="section section-lg">
        <Container>
          <MDXRemote {...source} />
        </Container>
      </section>
    </>
  );
};

export default BlogPost;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, frontmatter } = await getArticle(slug);

  const mdx = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
      ]
    }
  });

  return {
    props: {
      source: mdx,
      frontmatter: {
        ...frontmatter,
        published: frontmatter.published.toISOString(),
      }
    }
  }
}

export async function getStaticPaths() {
  const paths = (await getSlugs()).map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
}
