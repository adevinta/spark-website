import { NextSeo } from 'next-seo'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'
import gaussian from 'gaussian'
import { scaleLinear, scaleQuantile } from 'd3-scale'

import Color from 'colorjs.io'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { ClockArrow, QuestionOutline, LockOutline } from '@spark-ui/icons'
import { FormField } from '@spark-ui/form-field'
import { Input, InputGroup } from '@spark-ui/input'
import { useLocalStorage } from '@/hooks/useStorage'
import { Slider } from '@spark-ui/slider'
import Link from 'next/link'

import { LayoutContainer } from '@/components/Layout/LayoutContainer'
import { LayoutHeader } from '@/components/Layout/LayoutHeader'
import { LayoutSideNav } from '@/components/Layout/LayoutSideNav'
import { allDocs, Doc } from 'contentlayer/generated'
import { cx } from 'class-variance-authority'
import { LayoutNav } from '@/components/Layout/LayoutNav'
import { H1 } from '@/components/MDX/H1'
import { P } from '@/components/MDX/P'
import { useRouter } from 'next/router'
import { useCombinedState } from '@spark-ui/use-combined-state'

const oklchToHex = ({ light, chroma, hue }) => {
  const color = new Color('oklch', [light / 100, chroma / 100, hue])
  return color.to('sRGB').toString({ format: 'hex' })
}

const lightScale = v =>
  Math.round(scaleLinear().domain([0, 1, 5, 9]).range([990, 900, 500, 350])(v)) / 1000

const quantileLightScale = scaleQuantile()
  .domain([0, 100])
  .range([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

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
const ThemePage = ({ categories, colorIndex }: DocsDetailPageProps) => {
  const [colors, setColors] = useLocalStorage('colorPalette', [])
  const { name, value } = colors[colorIndex] || {}
  const color = new Color(value)
  const [fieldName, setFieldName] = useState(name)
  const [colorValue, setColorValue] = useState(color)
  const [factorValue, setFactorValue] = useState(5)

  const { light, chroma, hue } = {
    light: Math.round(colorValue.oklch.l * 100),
    chroma: Math.round(colorValue.oklch.c * 100),
    hue: Math.round(colorValue.oklch.h),
  }

  const [colorField, setColorField] = useState(oklchToHex({ light, chroma, hue }))

  const fn = gaussian(5, factorValue)

  const lockedIndex = quantileLightScale(100 - light)

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
                    <FormField>
                      <FormField.Label>Name</FormField.Label>
                      <InputGroup>
                        <Input value={fieldName} />
                      </InputGroup>
                    </FormField>
                    <FormField>
                      <FormField.Label>Value</FormField.Label>
                      <InputGroup>
                        <Input
                          value={colorField}
                          onChange={event => {
                            let color
                            const value = event.target.value
                            try {
                              color = new Color(event.target.value)
                              color.alpha = 1
                              setColorValue(color)
                            } catch (error) {}
                            console.log(color)
                            setColorField(value)
                          }}
                        />
                      </InputGroup>
                    </FormField>
                    <div></div>
                    <div>
                      <div className="flex flex-row gap-lg">
                        <div className="grow">
                          <div className="flex h-full flex-col">
                            <div
                              className="grow"
                              style={{ backgroundColor: colorValue.toString({ format: 'oklch' }) }}
                            />
                            <div className="grow-1 flex flex-row">
                              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                                (value, index) => {
                                  const stepColor = new Color('oklch', [
                                    lightScale(index),
                                    (chroma * fn.pdf(index)) / fn.pdf(5) / 100,
                                    hue,
                                  ])
                                  const readableColor =
                                    stepColor.contrast('black', 'WCAG21') >
                                    stepColor.contrast('white', 'WCAG21')
                                      ? 'black'
                                      : 'white'
                                  return (
                                    <span
                                      key={value}
                                      className="flex aspect-[1/2.5] grow flex-col items-center justify-center"
                                      style={{ backgroundColor: stepColor, color: readableColor }}
                                    >
                                      {lockedIndex === index && (
                                        <Icon label="lock">
                                          <LockOutline />
                                        </Icon>
                                      )}
                                    </span>
                                  )
                                },
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="grow">
                          <div className="flex flex-col gap-xl">
                            <FormField>
                              <span className="flex flex-row gap-sm">
                                <FormField.Label>Hue</FormField.Label>:<span>{hue}</span>
                              </span>
                              <Slider
                                name="hue"
                                value={[Math.round(hue)]}
                                max={360}
                                shape="rounded"
                                onValueChange={value => {
                                  setColorValue(
                                    new Color('oklch', [light / 100, chroma / 100, value[0]]),
                                  )
                                  setColorField(oklchToHex({ light, chroma, hue: value[0] }))
                                }}
                              >
                                <Slider.Track />
                                <Slider.Thumb />
                              </Slider>
                            </FormField>
                            <FormField>
                              <span className="flex flex-row gap-sm">
                                <FormField.Label>Light</FormField.Label>:<span>{light}</span>
                              </span>
                              <Slider
                                name="light"
                                value={[Math.round(light)]}
                                max={100}
                                shape="rounded"
                                onValueChange={value => {
                                  setColorValue(
                                    new Color('oklch', [value[0] / 100, chroma / 100, hue]),
                                  )
                                  setColorField(oklchToHex({ light: value[0], chroma, hue }))
                                }}
                              >
                                <Slider.Track />
                                <Slider.Thumb />
                              </Slider>
                            </FormField>
                            <FormField>
                              <span className="flex flex-row gap-sm">
                                <FormField.Label>Chroma</FormField.Label>:<span>{chroma}</span>
                              </span>
                              <Slider
                                name="chroma"
                                value={[Math.round(chroma)]}
                                max={50}
                                shape="rounded"
                                onValueChange={value => {
                                  setColorValue(
                                    new Color('oklch', [light / 100, value[0] / 100, hue]),
                                    setColorField(oklchToHex({ light, chroma: value[0], hue })),
                                  )
                                }}
                              >
                                <Slider.Track />
                                <Slider.Thumb />
                              </Slider>
                            </FormField>
                            <FormField>
                              <span className="flex flex-row gap-sm">
                                <FormField.Label>Factor</FormField.Label>:<span>{factorValue}</span>
                              </span>
                              <Slider
                                name="factor"
                                value={[factorValue]}
                                min={5}
                                max={50}
                                shape="rounded"
                                onValueChange={([value]) => {
                                  setFactorValue(value)
                                }}
                              >
                                <Slider.Track />
                                <Slider.Thumb />
                              </Slider>
                            </FormField>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full grow flex-row justify-between gap-lg md:pl-lg">
              <div className="flex flex-row gap-lg">
                <Button design="outlined" intent="danger">
                  Cancel
                </Button>
                <Button design="outlined" intent="basic">Add +</Button>
              </div>
              <Button>Save</Button>
            </div>
          </article>
        </main>
      </LayoutContainer>
    </>
  )
}

export const getServerSideProps = ({ params }) => {
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
      ...params,
    },
  }
}

export default dynamic(() => Promise.resolve(ThemePage), {
  ssr: false,
})
