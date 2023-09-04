import { NextSeo } from 'next-seo'

import { Layout } from '@/components/Layout'
import { Header } from '@/components/Shared/Header'
import { Footer } from '@/components/Shared/Footer'

export default function IndexPage() {
  return (
    <>
      <NextSeo title="Home" />
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <h1 className="text-display-1-expanded flex items-center justify-center">Spark-ui ✨</h1>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </>
  )
}
