import { NextSeo } from 'next-seo'

import { LayoutHeader } from '@/components/Layout/LayoutHeader'
import { LayoutContainer } from '@/components/Layout/LayoutContainer'

export default function IndexPage() {
  return (
    <>
      <NextSeo title="Home" />

      <LayoutHeader />

      <LayoutContainer className="my-xl flex flex-col gap-sm" asChild>
        <main>
          <h1 className="text-display-2">Home</h1>
        </main>
      </LayoutContainer>
    </>
  )
}
