import { NextSeo } from 'next-seo'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Color from 'colorjs.io'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { Export, Plus, PenOutline, Minus, QuestionOutline } from '@spark-ui/icons'
import { FormField } from '@spark-ui/form-field'
import { Input, InputGroup } from '@spark-ui/input'
import Link from 'next/link'

import { LayoutContainer } from '@/components/Layout/LayoutContainer'
import { LayoutHeader } from '@/components/Layout/LayoutHeader'
import { LayoutSideNav } from '@/components/Layout/LayoutSideNav'
import { allDocs, Doc } from 'contentlayer/generated'
import { cx } from 'class-variance-authority'
import { LayoutNav } from '@/components/Layout/LayoutNav'
import { H1 } from '@/components/MDX/H1'
import { P } from '@/components/MDX/P'
import { useLocalStorage } from '@/hooks/useStorage'
import { useRouter } from 'next/router'

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

const ThemePage = ({
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
  const [colors, setColors] = useState([
    { name: 'Blue Ribbon', value: new Color('#0052FF') },
    { name: 'Violet', value: new Color('#8D64BB') },
    { name: 'Pale Adevinta', value: new Color('#7C7E9F') },
    { name: 'Apple', value: new Color('#31A56B') },
  ])
  const { pathname } = useRouter()
  return (
    <>
      <NextSeo title="theme" />

      <LayoutHeader hasSearch categories={categories} />

      <LayoutContainer className="flex min-h-[calc(100dvh-var(--sz-64))] w-full">
        <LayoutSideNav>
          <LayoutNav categories={categories} />
        </LayoutSideNav>

        <main className="flex w-full flex-row">
          <article className="flex w-full flex-col">
            <header className="-mx-lg bg-background-variant px-lg pb-lg md:mx-none">
              <H1 className="font-bold">Color</H1>
              <P className="font-bold first-letter:uppercase">
                Spark-ui adaptable and consistent color system.
              </P>
            </header>
            <div className="flex w-full grow flex-row gap-lg">
              <div className="relative mt-2xl flex min-w-0 flex-1 flex-col md:pl-lg">
                <p>
                  Spark-ui’s color palette maintains a balance between accessibility and brand
                  identity, with some tweaks to its naming scheme.
                </p>
                <div className="my-2xl">
                  <div className="flex flex-col gap-lg">
                    <div>
                      <FormField>
                        <FormField.Label>Name</FormField.Label>
                        <InputGroup>
                          <InputGroup.TrailingAddon className="px-none">
                            <Button className="rounded-none" design="tinted">
                              <Icon>
                                <QuestionOutline />
                              </Icon>
                            </Button>
                          </InputGroup.TrailingAddon>
                          <Input value="" />
                        </InputGroup>
                      </FormField>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </LayoutContainer>
    </>
  )
}

export async function getStaticProps({ params }) {
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
        { Foundations: [] },
      ),
    },
  }
}

export default dynamic(() => Promise.resolve(ThemePage), {
  ssr: false
})
