import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { marked } from 'marked'
import Slugger from 'github-slugger'

import * as fs from 'fs'
import * as path from 'path'
import * as examples from './src/examples'

function readDocgenFiles() {
  const nodeModulesDir = path.resolve(
    new URL(import.meta.url).pathname,
    '../../../../node_modules/@spark-ui',
  )

  const packagesDir = fs.readdirSync(nodeModulesDir)
  const docgenContents: Record<string, string | null> = {}

  for (const packageName of packagesDir) {
    const docgenFilePath = path.join(nodeModulesDir, packageName, 'dist/public/docgen.json')

    try {
      const content = fs.readFileSync(docgenFilePath, 'utf-8')
      docgenContents[packageName] = JSON.parse(content)
    } catch (err) {
      // Handle cases where the file doesn't exist
      docgenContents[packageName] = null
    }
  }

  return docgenContents
}

const docgenData = {}

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the doc',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The category of the doc',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: doc => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: doc => {
        const [, ...slugs] = doc._raw.flattenedPath.split('/')
        const slugAsParams = slugs.filter(slug => slug !== 'index.mdx').join('/')
        
        return slugAsParams
      },
    },
    headings: {
      type: 'json',
      resolve: doc => {
        const slugger = new Slugger()
        const markdownText = doc.body.raw
        let headings: Array<{
          level: number
          text: string
          id: string
        }> = []

        if (!markdownText) {
          return headings
        }

        slugger.reset()
        const tokens = marked.lexer(markdownText)

        tokens.forEach(token => {
          if (token.type === 'heading') {
            headings.push({
              level: token.depth,
              text: token.text,
              id: slugger.slug(token.text),
            })
          }
        })

        return headings
      },
    },
    docgen: {
      type: 'json',
      resolve: doc => {
        const packageName = doc._raw.sourceFileName.replace(/\.mdx$/, '')

        return docgenData[packageName]
      },
    },
    examples: {
      type: 'json',
      resolve: doc => {
        const [, slug] = doc._raw.flattenedPath.split('/')
        return examples[slug]
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'src',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'before',
          test: ['h2', 'h3', 'h4', 'h5', 'h6'],
        },
      ],
    ],
  },
})
