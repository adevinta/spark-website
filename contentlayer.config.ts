import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { marked } from "marked";
import Slugger from "github-slugger";

import * as examples from "./src/examples";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the doc",
      required: true,
    },
    category: {
      type: "string",
      description: "The category of the doc",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const slug = doc._raw.sourceFileName.replace(/\.mdx$/, "");
        return slug;
      },
    },
    headings: {
      type: "json",
      resolve: (doc) => {
        const slugger = new Slugger();
        const markdownText = doc.body.raw;
        let headings: Array<{
          level: number;
          text: string;
          id: string;
        }> = [];

        if (!markdownText) {
          return headings;
        }

        slugger.reset();
        const tokens = marked.lexer(markdownText);

        tokens.forEach((token) => {
          if (token.type === "heading") {
            headings.push({
              level: token.depth,
              text: token.text,
              id: slugger.slug(token.text),
            });
          }
        });

        return headings;
      },
    },
    examples: {
      type: "json",
      resolve: (doc) => {
        const slug = doc._raw.sourceFileName.replace(/\.mdx$/, "");
        return examples[slug];
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "src",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "before",
          test: ["h2", "h3", "h4", "h5", "h6"],
        },
      ],
    ],
  },
});
