import { NextSeo } from 'next-seo'
import { Doc, allDocs } from 'contentlayer/generated'

import { LayoutContainer } from '@/components/Layout/LayoutContainer'
import { LayoutHeader } from '@/components/Layout/LayoutHeader'
import { LayoutSideNav } from '@/components/Layout/LayoutSideNav'
import { DocsTableOfContent } from '@/components/Docs/DocsTableOfContent'
import { MDXComponent } from '@/components/MDX/MDXComponent'
import { DocsFooter } from '@/components/Docs/DocsFooter'
import { getLocalData } from '@/utils/getLocalData'
import { DocsHeader } from '@/components/Docs/DocsHeader'
import { ComponentMenu } from '@/components/Shared/ComponentMenu'

import projectPackage from '../../../../../package.json'
import { LayoutNav } from '@/components/Layout/LayoutNav'

interface DocsDetailPageProps {
  categories: {
    [key: string]: Doc[]
  }
  doc: Doc
  prev: string | null
  next: string | null
  title: string | null
  name: string | null
  category: string | null
  license: string | null
  description: string | null
  version: string | null
  keywords: string | null
  repository: string | null
  packageUrl: string | null
  bugReportUrl: string | null
  slug: string[] | null
}

interface JSONPackage {
  config?: {
    title?: string
    category?: string
  }
  name?: string
  license?: string
  description?: string
  keywords?: string[]
  version?: string
  bugs?: {
    url?: string
  }
  repository?: {
    type: string
    url?: string
    directory?: string
  }
}

const DocsDetailPage = ({
  doc,
  categories,
  prev,
  next,
  title,
  name,
  category,
  license,
  description,
  keywords,
  version,
  packageUrl,
  bugReportUrl,
  slug,
}: DocsDetailPageProps) => {
  if (!doc) {
    return null
  }

  const [componentName, componentTab] = slug

  return (
    <>
      <NextSeo title={doc.title} />

      <LayoutHeader hasSearch categories={categories} />

      <LayoutContainer className="flex min-h-[calc(100dvh-var(--sz-64))] w-full">
        <LayoutSideNav>
          <LayoutNav categories={categories} />
        </LayoutSideNav>

        <main className="flex w-full flex-row">
          <article className="flex w-full flex-col">
            <DocsHeader
              {...{
                title,
                version,
                name,
                category,
                license,
                description,
                keywords,
                packageUrl,
                bugReportUrl,
              }}
              className="-mx-lg px-lg pb-lg md:mx-none"
            />
            <div className="flex w-full grow flex-row gap-lg">
              <div className="relative flex min-w-0 flex-1 flex-col md:pl-lg">
                {category.toLowerCase() === 'components' ? (
                  <ComponentMenu componentName={componentName} componentTab={componentTab} />
                ) : null}
                <MDXComponent
                  code={doc.body.code}
                  globals={{ examples: doc.examples, docgen: doc.docgen }}
                />
                <DocsFooter previous={prev} next={next} docUrl={bugReportUrl} />
              </div>
              <DocsTableOfContent headings={doc.headings} />
            </div>
          </article>
        </main>
      </LayoutContainer>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: allDocs
      .filter(doc => {
        const slugs = doc.slugAsParams.split('/')
        return ['components', 'hooks'].includes(slugs[0])
      })
      .map(doc => {
        const [category, ...slug] = doc.slugAsParams.split('/')
        return {
          params: { slug, category },
        }
      }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug, category } = params

  const [name, ...rest] = slug

  const index = allDocs.findIndex(
    (doc, index) => doc.slugAsParams === [category, name, ...rest].join('/'),
  )

  if (index === undefined) {
    return { notFound: true }
  }

  const isComponentDoc = doc => doc.slugAsParams.split('/').length === 2
  const isCurrentDoc = currentDoc => doc =>
    doc?.slugAsParams.split('/').slice(1) === currentDoc?.slugAsParams.split('/').slice(1)

  const currentDoc = allDocs[index]

  let packageJSON: JSONPackage = {}

  if (currentDoc.package) {
    packageJSON = await getLocalData(`node_modules/${currentDoc.package}/package.json`)
  }

  const isCurrent = isCurrentDoc(currentDoc)

  return {
    props: {
      categories: allDocs.reduce(
        (categories, doc) => {
          const category = doc.category

          return {
            ...categories,
            ...(Object.keys(categories).includes(category) && {
              [category]: [...categories[category], doc],
            }),
          }
        },
        { Components: [], Hooks: [] },
      ),
      doc: currentDoc,
      prev:
        allDocs
          .slice(0, index)
          .filter(doc => !isCurrent(doc))
          .reverse()
          .find(isComponentDoc)?.slugAsParams || null,
      next:
        allDocs
          .slice(index + 1)
          .filter(doc => !isCurrent(doc))
          .find(isComponentDoc)?.slugAsParams || null,
      name: currentDoc.package,
      title: currentDoc.title,
      category: currentDoc.category,
      slug,
      license: packageJSON.license,
      description: packageJSON.description,
      keywords: packageJSON.keywords,
      version: packageJSON.version,
      packageUrl: `${packageJSON.repository?.url.replace('.git', '')}/tree/main/${packageJSON
        .repository?.directory}`,
      docUrl: `${projectPackage.repository?.url.replace('.git', '')}/edit/main/src/${
        currentDoc._raw.sourceFilePath
      }`,
      bugReportUrl: `${packageJSON.bugs?.url}`,
    },
  }
}

export default DocsDetailPage
