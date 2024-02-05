import { NextSeo } from 'next-seo'

import { LayoutContainer } from '@/components/Layout/LayoutContainer'
import { LayoutHeader } from '@/components/Layout/LayoutHeader'
import { Nav } from '@/components/Shared/Nav'
import { NavLink } from '@/components/Shared/NavLink'
import { LayoutSideNav } from '@/components/Layout/LayoutSideNav'
import { ComponentMenu } from '@/components/Shared/ComponentMenu'
import { allDocs, Doc } from 'contentlayer/generated'
import { cx } from 'class-variance-authority'
import { LayoutNav } from '@/components/Layout/LayoutNav'

interface ThemeProps {
  categories: {
    [key: string]: Doc[]
  }
}
const ThemePage = ({ categories }: ThemeProps) => {
  return (
    <>
      <NextSeo title="theme" />

      <LayoutHeader hasSearch categories={categories} />

      <LayoutContainer className="flex min-h-[calc(100dvh-var(--sz-64))] w-full">
        <LayoutSideNav>
          <LayoutNav categories={categories} />
        </LayoutSideNav>

        <main className="flex w-full flex-row">content</main>
      </LayoutContainer>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: allDocs
      .filter(doc => {
        const slugs = doc.slugAsParams.split('/')
        return ['foundations'].includes(slugs[0])
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
  const categories = allDocs.reduce(
    (categories, doc) => {
      const category = doc.category

      return {
        ...categories,
        ...(Object.keys(categories).includes(category) && {
          [category]: [...categories[category], doc],
        }),
      }
    },
    { Foundations: [] },
  )
  return {
    props: {
      categories,
    },
  }
}

export default ThemePage
