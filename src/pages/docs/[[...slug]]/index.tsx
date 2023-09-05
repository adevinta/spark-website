import { NextSeo } from 'next-seo'
import { Doc, allDocs } from 'contentlayer/generated'
import { Slot } from '@spark-ui/slot'

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

  console.log(doc)

  return (
    <>
      <NextSeo title={doc.title} />

      <LayoutHeader />

      <LayoutContainer className="flex w-full gap-2xl min-h-[calc(100dvh-var(--sz-64))]">
        <LayoutSideNav />

        <main className="flex w-full flex-row gap-2xl">
          <div className="min-w-0 flex-1">
            <MDXComponent code={doc.body.code} globals={{ examples: doc.examples }} />
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

  const doc = Object.assign(allDocs[index], {
    prev: allDocs[index - 1]?.slugAsParams || null,
    next: allDocs[index + 1]?.slugAsParams || null,
  })

  return {
    props: { doc },
  }
}

export default DocsDetailPage
