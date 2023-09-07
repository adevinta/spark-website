import { NextSeo } from 'next-seo'
import { Doc, allDocs } from 'contentlayer/generated'

import { LayoutContainer } from '@/components/Layout/LayoutContainer'
import { LayoutHeader } from '@/components/Layout/LayoutHeader'
import { LayoutSideNav } from '@/components/Layout/LayoutSideNav'
import { DocsTableOfContent } from '@/components/Docs/DocsTableOfContent'
import { MDXComponent } from '@/components/MDX/MDXComponent'
import { MDXComponentFooter } from '@/components/MDX/MDXComponentFooter'

interface DocsDetailPageProps {
  doc: Doc
}

const DocsDetailPage = ({ doc }: DocsDetailPageProps) => {
  if (!doc) {
    return null
  }

  return (
    <>
      <NextSeo title={doc.title} />

      <LayoutHeader />

      <LayoutContainer className="flex min-h-[calc(100dvh-var(--sz-64))] w-full gap-2xl">
        <LayoutSideNav />

        <main className="flex w-full flex-row gap-2xl">
          <div className="relative flex min-w-0 flex-1 flex-col">
            <MDXComponent
              code={doc.body.code}
              globals={{ examples: doc.examples, docgen: doc.docgen }}
            />
            <MDXComponentFooter
              previous={doc.prev}
              next={doc.next}
              filePath={doc._raw.sourceFilePath}
            />
          </div>
          <DocsTableOfContent headings={doc.headings} />
        </main>
      </LayoutContainer>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: allDocs.map(doc => ({
      params: { slug: doc.slugAsParams.split('/') },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const index = allDocs.findIndex((doc, index) => doc.slugAsParams === slug.join('/'))

  if (index === undefined) {
    return { notFound: true }
  }

  const isComponentDoc = doc => doc.slugAsParams.split('/').length === 1
  const isCurrentDoc = currentDoc => doc =>
    doc.slugAsParams.split('/').slice(1) === currentDoc.slugAsParams.split('/').slice(1)

  const currentDoc = allDocs[index]
  const isCurrent = isCurrentDoc(currentDoc)

  const doc = Object.assign(currentDoc, {
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
  })

  return {
    props: { doc },
  }
}

export default DocsDetailPage
