import { NextSeo } from 'next-seo'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Color from 'colorjs.io'
import { Button } from '@spark-ui/button'
import { IconButton } from '@spark-ui/icon-button'
import { Icon } from '@spark-ui/icon'
import {
  Plus as PlusIcon,
  PenOutline as PenIcon,
  Minus as MinusIcon,
  Link as LinkIcon,
} from '@spark-ui/icons'
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

const lightMatrix = [0.03, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
const chromaMatrix = [0.01, 0.05, 0.1, 0.2, 0.3, 0.4, 0.3, 0.3, 0.2, 0.15]

const defaultColors = [
  { name: 'Blue Ribbon', value: '#0052FF' },
  { name: 'Violet', value: '#8D64BB' },
  { name: 'Pale Adevinta', value: '#7C7E9F' },
  { name: 'Apple', value: '#31A56B' },
]
const ThemePage = ({ categories }: DocsDetailPageProps) => {
  const [colors, setColors] = useLocalStorage('colorPalette', defaultColors)
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
            <header className="-mx-lg bg-background-variant px-lg py-lg md:mx-none">
              <div className="flex flex-row justify-between">
                <div>
                  <H1 className="font-bold">Colors</H1>
                  <P className="font-bold first-letter:uppercase">
                    Spark-ui adaptable and consistent colors system engine.
                  </P>
                </div>
                <div className="flex flex-col gap-md">
                  <IconButton size="sm" aria-label="export" design="ghost">
                    <Icon>
                      <LinkIcon />
                    </Icon>
                  </IconButton>
                  <IconButton size="sm" aria-label="add color" design="ghost" asChild>
                    <Link href={`${pathname}/create`}>
                      <Icon>
                        <PlusIcon />
                      </Icon>
                    </Link>
                  </IconButton>
                </div>
              </div>
            </header>
            <div className="flex w-full grow flex-row gap-lg">
              <div className="relative mt-2xl flex min-w-0 flex-1 flex-col md:pl-lg">
                <p>
                  Spark-ui’s color palette maintains a balance between accessibility and brand
                  identity, with some tweaks to its naming scheme.
                </p>
                <div className="my-2xl">
                  <div className="flex flex-col gap-lg">
                    {colors.map(({ name, value }, index) => {
                      const color = new Color(value)
                      const readableColor =
                        color.contrast('black', 'WCAG21') > color.contrast('white', 'WCAG21')
                          ? 'black'
                          : 'white'
                      return (
                        <div key={name} className="overflow-hidden rounded-lg">
                          <div
                            className="flex min-h-sz-128 flex-row justify-between p-lg"
                            style={{
                              backgroundColor: new Color('oklch', color.oklch),
                              color: readableColor,
                            }}
                          >
                            <div className="flex flex-col justify-end text-headline-2">
                              <h2 id={`${name}`} className="text-headline-1-expanded uppercase font-black">
                                {name}
                              </h2>
                              <h3 className="text-headline-2"><Link href={`#${name}`}>{value}</Link></h3>
                            </div>
                            <div className="flex flex-col justify-end gap-md">
                              <IconButton
                                size="sm"
                                design="outlined"
                                intent="surface"
                                aria-label="export"
                                asChild
                              >
                                <Link href={`${pathname}/edit/${index}`}>
                                  <Icon>
                                    <PenIcon />
                                  </Icon>
                                </Link>
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  setColors(colors.filter(c => c.name !== name))
                                }}
                                size="sm"
                                design="outlined"
                                intent="surface"
                                aria-label="delete"
                              >
                                <Icon>
                                  <MinusIcon />
                                </Icon>
                              </IconButton>
                            </div>
                          </div>
                          <div className="flex flex-row">
                            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                              (colorIndex, index) => {
                                const response = new Color(color)
                                response.oklch.l = 1 - lightMatrix[index]
                                response.oklch.c = chromaMatrix[index]
                                const readableColor =
                                  response.contrast('black', 'WCAG21') >
                                  response.contrast('white', 'WCAG21')
                                    ? 'black'
                                    : 'white'
                                return (
                                  <div
                                    key={index}
                                    className={cx(
                                      'flex aspect-square min-h-sz-32 min-w-sz-32 grow flex-col items-center justify-center',
                                    )}
                                    style={{
                                      backgroundColor: new Color('oklch', response.oklch),
                                      color: readableColor,
                                    }}
                                  >
                                    <span>{/*{colorIndex}*/}</span>
                                  </div>
                                )
                              },
                            )}
                            <div className={cx('aspect-square')}></div>
                          </div>
                        </div>
                      )
                    })}
                    <Link
                      href={`${pathname}/create`}
                      className="box-content overflow-hidden rounded-lg bg-background-variant border-md border-on-background"
                    >
                      <div className="flex min-h-sz-128 flex-row justify-between p-lg">
                        <div className="flex flex-col justify-end text-headline-2">
                          <h2 className="text-headline-1-expanded">Add new color</h2>
                        </div>
                      </div>
                      <div className="flex flex-row bg-on-surface opacity-dim-4">
                        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                          (opacityIndex, index) => {
                            return (
                              <div
                                key={index}
                                className={cx(
                                  'flex aspect-square min-h-sz-32 min-w-sz-32 grow flex-col items-center justify-center bg-surface',
                                )}
                                style={{
                                  opacity: 1 - opacityIndex / 1000,
                                }}
                              >
                                <span>{/*{colorIndex}*/}</span>
                              </div>
                            )
                          },
                        )}
                        <div className={cx('aspect-square')}></div>
                      </div>
                    </Link>
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
  ssr: false,
})
