/* eslint-disable no-console */
import path from 'node:path'
import fs from 'node:fs'
import { v4 as uuid } from 'uuid'
import prettier from 'prettier'
import toc from 'markdown-toc'
import { parseMarkdownFile, fileToPath, removePrefix } from '@docusaurus/utils'

// const docsRootFolder = 'content/docs'
// const configFolder = 'config'

// interface ResultType {
//   content: string
//   objectID: string
//   url: string
//   type: 'lvl1' | 'lvl2' | 'lvl3'
//   hierarchy: {
//     lvl1: string | null
//     lvl2?: string | null
//     lvl3?: string | null
//   }
// }

// interface TOCResultItem {
//   content: string
//   slug: string
//   lvl: 1 | 2 | 3
//   i: number
//   seen: number
// }

// const getUrl = (slug: string) => {
//   const url = removePrefix(slug, '/')

//   return `/docs${url}`
// }

// async function getMDXMeta(file: string) {
//   const { content, frontMatter: _frontMatter } = await parseMarkdownFile(file)

//   const frontMatter = _frontMatter as Record<string, any>
//   const tableOfContent = toc(content)
//   const json = tableOfContent.json as TOCResultItem[]
//   let slug = fileToPath(file).replace(`/${docsRootFolder}`, '').replace(process.cwd(), '')

//   const result: ResultType[] = []
//   const title = !!frontMatter.title ? frontMatter.title : ''

//   result.push({
//     content: title,
//     objectID: uuid(),
//     type: 'lvl1',
//     url: getUrl(slug),
//     hierarchy: {
//       lvl1: title,
//     },
//   })

//   json.forEach((item, index) => {
//     item.content !== title &&
//       result.push({
//         content: item.content,
//         objectID: uuid(),
//         type: `lvl${item.lvl}`,
//         url: getUrl(slug) + `#${item.slug}`,
//         hierarchy: {
//           lvl1: title,
//           lvl2: item.lvl === 2 ? item.content : json[index - 1]?.content ?? null,
//           lvl3: item.lvl === 3 ? item.content : null,
//         },
//       })
//   })

//   return result
// }

async function saveSearchMeta(saveMode: 'local' = 'local') {
  let json: any = []

  try {
    // const files = shell
    //   .ls('-R', docsRootFolder)
    //   .map((file: any) => path.join(process.cwd(), docsRootFolder, file))
    //   .filter((file: any) => file.endsWith('.mdx'))

    const docsDir = path.join(process.cwd(), 'src', 'docs', 'components')
    const picturesMetadataFile = path.join(process.cwd(), 'data', 'pictures', 'metadata.json')

    const files = fs.readdirSync(docsDir)
    console.log({ files })

    // for (const file of files) {
    //   let result = []

    //   try {
    //     result = await getMDXMeta(file)
    //     json.push(...result)
    //   } catch (error) {}
    // }

    // if (saveMode === 'local') {
    //   json = prettier.format(JSON.stringify(json), { parser: 'json' })

    //   if (!fs.existsSync(`${configFolder}`)) {
    //     fs.mkdirSync(`${configFolder}`)
    //   }

    //   const outPath = path.join(process.cwd(), `${configFolder}`, 'search-meta.json')

    //   fs.writeFileSync(outPath, json)

    //   console.log('[NextUI] Search meta is ready ✅')

    //   return
    // }
  } catch (error) {
    console.error(`[ERROR 🔥]:`, error)
  }
}

saveSearchMeta()
