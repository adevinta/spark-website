import { NextSeo } from 'next-seo'
import { Doc, allDocs } from 'contentlayer/generated'

import { MDXComponent } from '@/components/MDX/MDXComponent'
import { Header } from '@/components/Shared/Header'
import { Layout } from '@/components/Layout'
import { Nav } from '@/components/Shared/Nav'
import { Footer } from '@/components/Shared/Footer'

interface DocDetailPageProps {
  doc: Doc
}

const DocDetailPage = ({ doc }: DocDetailPageProps) => {
  return (
    <>
      <NextSeo title={doc.title} />
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.LeadingSidebar>
          <Nav />
        </Layout.LeadingSidebar>
        <Layout.Content>
          <div className="px-lg">
            <MDXComponent code={doc.body.code} globals={{ examples: doc.examples }} />
          </div>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
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
