import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import * as fs from "fs";
import * as path from "path";
import * as examples from "./src/examples";

function readDocgenFiles() {
  const nodeModulesDir = path.resolve(
    new URL(import.meta.url).pathname,
    "../../../../node_modules/@spark-ui"
  );

  const packagesDir = fs.readdirSync(nodeModulesDir);
  const docgenContents: Record<string, string | null> = {};

  for (const packageName of packagesDir) {
    const docgenFilePath = path.join(
      nodeModulesDir,
      packageName,
      "dist/public/docgen.json"
    );

    try {
      const content = fs.readFileSync(docgenFilePath, "utf-8");
      docgenContents[packageName] = JSON.parse(content);
    } catch (err) {
      // Handle cases where the file doesn't exist
      docgenContents[packageName] = null;
    }
  }

  return docgenContents;
}

const docgenData = readDocgenFiles();

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
    docgen: {
      type: "json",
      resolve: (doc) => {
        const packageName = doc._raw.sourceFileName.replace(/\.mdx$/, "");

        return docgenData[packageName];
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
