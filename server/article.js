import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { sync } from "glob";

const articlesPath = path.join(process.cwd(), "articles");

export async function getSlugs() {
    const paths = sync(`${articlesPath}/*.mdx`);

    return paths.map(path => {
        const folders = path.split("/");
        const basename = folders[folders.length - 1];
        return basename.split(".")[0];
    });
}

export async function getArticle(slug) {
    const location = path.join(articlesPath, `${slug}.mdx`);
    const source = fs.readFileSync(location);
    const { content, data } = matter(source);
}
