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

  const docgenContents: Record<string, string | null> = ({} = packagesDir.reduce(
    (contents, packageName) => {
      const docgenFilePath = path.join(nodeModulesDir, packageName, 'dist/public/docgen.json')
      try {
        const currentContent = fs.readFileSync(docgenFilePath, 'utf-8')
        contents[packageName] = JSON.parse(currentContent)
      } catch (err) {
        // Handle cases where the file doesn't exist
        contents[packageName] = null
      }
      return contents
    },
    {},
  ))

  return docgenContents
}

const docgenData = readDocgenFiles()

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `content/**/*.mdx`,
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
    package: {
      type: 'string',
      description: 'The package name documented',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: doc => {
        const [root,...rest] = doc._raw.flattenedPath.split('/')

        return `/${rest.join('/')}`
      },
    },
    slugAsParams: {
      type: 'string',
      resolve: doc => {
        const [,, ...slugs] = doc._raw.flattenedPath.split('/')
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
      resolve: (doc) => {
        const [root,, , name] = doc._raw.sourceFileDir.split('/')
        return docgenData[name] || {}
      },
    },
    examples: {
      type: 'json',
      resolve: doc => {
        const [root,, categories, name, slug] = doc._raw.flattenedPath.split('/')
        return examples[categories]?.[name]
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
