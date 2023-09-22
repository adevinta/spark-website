/* eslint-disable no-console */
import path from 'node:path'
import fs from 'node:fs'
import { v4 as uuid } from 'uuid'
import prettier from 'prettier'
import toc from 'markdown-toc'
import { parseFrontMatter, fileToPath, removePrefix } from '@docusaurus/utils'
import { getLocalData } from '@/utils/getLocalData'

const docsDir = path.join(process.cwd(), 'src', 'docs', 'components')
const configDir = path.join(process.cwd(), 'src', 'config')

interface ResultType {
  content: string
  objectID: string
  url: string
  type: 'lvl1' | 'lvl2' | 'lvl3'
  hierarchy: {
    lvl1: string | null
    lvl2?: string | null
    lvl3?: string | null
  }
}

interface TOCResultItem {
  content: string
  slug: string
  lvl: 1 | 2 | 3
  i: number
  seen: number
}

const getUrl = (file: string) => {
  const [, , url] = file.match(/\/(.*)(\/docs\/.*\/.*)\/index.mdx/)

  return url
}

async function getMDXMeta(file: string) {
  const fileContent = fs.readFileSync(file, 'utf8')
  const { content, frontMatter: _frontMatter } = await parseFrontMatter(fileContent)
  const frontMatter = _frontMatter as Record<string, any>
  // const packageData = await getLocalData(`node_modules/${frontMatter.package}/package.json`)
  const tableOfContent = toc(content)
  const json = tableOfContent.json as TOCResultItem[]
  const title = frontMatter.title ?? ''
  const url = getUrl(file)
  const result: ResultType[] = []

  result.push({
    content: title,
    objectID: uuid(),
    type: 'lvl1',
    url: url,
    hierarchy: {
      lvl1: title,
    },
  })

  json.forEach((item, index) => {
    item.content !== title &&
      result.push({
        content: item.content,
        objectID: uuid(),
        type: `lvl${item.lvl}`,
        url: `${url}/#${item.slug}`,
        hierarchy: {
          lvl1: title,
          lvl2: item.lvl === 2 ? item.content : json[index - 1]?.content ?? null,
          lvl3: item.lvl === 3 ? item.content : null,
        },
      })
  })

  return result
}

async function saveSearchMeta(saveMode: 'local' = 'local') {
  let json: any = []

  try {
    const components = fs.readdirSync(docsDir)

    for (const component of components) {
      let result = []
      const file = `${docsDir}/${component}/index.mdx`

      try {
        result = await getMDXMeta(file)

        json.push(...result)
      } catch (error) {
        console.log(error)
      }
    }

    if (saveMode === 'local') {
      json = await prettier.format(JSON.stringify(json), { parser: 'json' })

      if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir)
      }

      const outPath = `${configDir}/search-meta.json`

      fs.writeFileSync(outPath, json)

      console.log('[Spark UI ✨] Search meta is ready ✅')

      return
    }
  } catch (error) {
    console.error(`[ERROR 🔥]:`, error)
  }
}

saveSearchMeta()
