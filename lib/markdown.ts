import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const wikiDirectory = path.join(process.cwd(), 'content/wiki');

export function getWikiSlugs() {
  return fs.readdirSync(wikiDirectory).map((file) => file.replace(/\.md$/, ''));
}

export async function getWikiBySlug(slug: string) {
  const fullPath = path.join(wikiDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(content);

  return {
    metadata: data,
    content: processedContent.toString(),
  };
}
