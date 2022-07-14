import React from "react";
import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { getSlugs } from "server/article";

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

}

export async function getStaticPaths() {
  const paths = (await getSlugs()).map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
}
