import React from "react";
import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { getArticle, getSlugs } from "scripts/article";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const BlogPost = ({ source, frontmatter }) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | UNSW Co-op Society</title>
      </Head>

      <MDXRemote {...source} />
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
      post: {
        source: mdx,
        frontmatter,
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
