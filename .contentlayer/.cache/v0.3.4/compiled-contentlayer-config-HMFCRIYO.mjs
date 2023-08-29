var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// src/examples/index.tsx
var examples_exports = {};
__export(examples_exports, {
  button: () => button_exports
});

// src/examples/button.tsx
var button_exports = {};
__export(button_exports, {
  basic: () => basic,
  disabled: () => disabled,
  sizes: () => sizes
});
var basic = `
<Button>Basic</Button>
`;
var disabled = `
<Button disabled>Disabled</Button>
`;
var sizes = `
<div className="flex gap-lg">
  <Button size="sm">Button</Button>
  <Button size="md">Button</Button>
  <Button size="lg">Button</Button>
</div>
`;

// contentlayer.config.ts
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the doc",
      required: true
    },
    category: {
      type: "string",
      description: "The category of the doc",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const slug = doc._raw.sourceFileName.replace(/\.mdx$/, "");
        return slug;
      }
    },
    examples: {
      type: "json",
      resolve: (doc) => {
        const slug = doc._raw.sourceFileName.replace(/\.mdx$/, "");
        return examples_exports[slug];
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
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
          test: ["h2", "h3", "h4", "h5", "h6"]
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HMFCRIYO.mjs.map
