import { NextSeo } from 'next-seo'
import { Doc, allDocs } from 'contentlayer/generated'

import { LayoutContainer } from '@/components/Layout/LayoutContainer'
import { LayoutHeader } from '@/components/Layout/LayoutHeader'
import { MDXComponent } from '@/components/MDX/MDXComponent'
import { LayoutSideNav } from '@/components/Layout/LayoutSideNav'

interface DocDetailPageProps {
  doc: Doc
}

const DocDetailPage = ({ doc }: DocDetailPageProps) => {
  return (
    <>
      <NextSeo title={doc.title} />

      <LayoutHeader />

      <LayoutContainer className="flex gap-2xl">
        <LayoutSideNav />
        <main>
          <div className="min-w-0 flex-1">
            <MDXComponent code={doc.body.code} globals={{ examples: doc.examples }} />
          </div>
        </main>
      </LayoutContainer>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: allDocs.map(doc => ({
      params: { slug: doc.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const doc = allDocs.find(doc => doc.slug === slug)

  if (!doc) {
    return { notFound: true }
  }

  return {
    props: { doc },
  }
}

export default DocDetailPage
