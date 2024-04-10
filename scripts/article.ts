import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { sync } from "glob";

import dayjs from "scripts/dayjs";

const articlesPath = path.join(process.cwd(), "articles");

/**
 * Fetches a list of all slugs (i.e. URL endpoints of articles) in the server.
 * @returns a list of all slugs available
 */
export async function getSlugs() {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    const folders = path.split("/");
    const basename = folders[folders.length - 1];
    return basename.split(".")[0];
  });
}

/**
 * Given an article slug, fetches all relevant information about the article
 * to be displayed.
 * @param {string} slug - the slug we want to get data from
 * @returns all data from the corresponding MDX file
 */
export async function getArticle(slug) {
  const location = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(location);
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      ...data,
      slug,
      published: dayjs(data.published),
    },
  };
}

/**
 * Fetches a list of all articles and their details for the front page.
 * @returns all data relevant to the front page
 */
export async function getAllArticles() {
  const articles = fs.readdirSync(articlesPath);

  return articles.map((slug) => {
    const location = path.join(articlesPath, slug);
    const source = fs.readFileSync(location);
    const { data } = matter(source);

    return {
      ...data,
      slug: slug.replace(".mdx", ""),
      published: dayjs(data.published),
    };
  });
}
