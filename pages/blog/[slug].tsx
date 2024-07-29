import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";

import { Row, Col } from "reactstrap";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeImgSize from "rehype-img-size";
import rehypeSlug from "rehype-slug";

import dayjs from "scripts/dayjs";
import { getArticle, getSlugs } from "scripts/article";
import BlogTab from "components/blog/social_distance/BlogTab";
import BlogTabEntry from "components/blog/social_distance/BlogTabEntry";
import { Blog } from "../../data/types";

// Workaround for MDXRemote error
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MarkdownImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" loading="lazy" {...props} />
);

const components = {
  img: MarkdownImage,
  BlogTab: BlogTab,
  BlogTabEntry: BlogTabEntry,
};

interface BlogPostProps {
  source: {
    compiledSource: string;
    renderedOutput: string;
    scope: Record<string, unknown>;
  };
  frontmatter: Blog;
}

const BlogPost = ({ source, frontmatter }: BlogPostProps) => {
  // TODO: add styles to our blog
  return (
    <>
      <Head>
        <title>{frontmatter.title} | UNSW Co-op Society</title>
      </Head>

      <section className="section section-sm">
        <Row className="justify-content-around text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast pb-4 mt-3 mt-sm-5">
              {frontmatter.title}
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col lg="8">
            <p className="lead text-muted">{frontmatter.description}</p>
          </Col>

          <Col lg="8">
            <p className="text-muted">
              {dayjs(frontmatter.published).format("D MMMM YYYY")}
            </p>

            <hr />
          </Col>
        </Row>
      </section>

      <section className="section section-lg pt-0">
        <Row className="justify-content-center">
          <Col lg="6" className="markdown">
            <MDXRemote
              components={components}
              frontmatter={frontmatter}
              {...source}
            />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default BlogPost;

export async function getStaticProps({ params }: { params: { slug: string } }) {
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          rehypeImgSize as unknown as any, // workaround for TS strict mode
          {
            dir: "public",
          },
        ],
        rehypeSlug,
      ],
    },
  });

  return {
    props: {
      source: mdx,
      frontmatter: {
        ...frontmatter,
        published: frontmatter.published.toISOString(),
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = (await getSlugs()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
