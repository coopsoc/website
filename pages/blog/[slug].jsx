import React from "react";
import Head from "next/head";
import Image from "next/image";

import {
  Row,
  Col
} from "reactstrap";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeImgSize from "rehype-img-size";
import rehypeSlug from "rehype-slug";

import { getArticle, getSlugs } from "scripts/article";
import BlogTab from "components/blog/social_distance/BlogTab";
import BlogTabEntry from "components/blog/social_distance/BlogTabEntry";

const MarkdownImage = (props) => (
  <Image alt={props.alt} layout="responsive" loading="lazy" {...props} />
);

const components = {
  img: MarkdownImage,
  BlogTab: BlogTab,
  BlogTabEntry: BlogTabEntry
};

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
        <Row className="justify-content-center">
          <Col lg="6" className="markdown">
            <MDXRemote components={components} {...source} />
          </Col>
        </Row>
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
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        [
          rehypeImgSize,
          {
            dir: "public"
          }
        ],
        rehypeSlug,
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
