import { cx } from 'class-variance-authority'
import { useEffect, useState, ComponentPropsWithoutRef } from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'

import { useActiveAnchor } from '@/hooks/useActiveAnchor'
import { TableOfContentLink } from './TableOfContentLink'

export interface TableOfContentProps extends ComponentPropsWithoutRef<'div'> {
  headings: Array<{
    level: number
    text: string
    id: string
  }>
}

export const TableOfContent = ({ className, headings, ...others }: TableOfContentProps) => {
  const [elements, setElements] = useState<HTMLHeadingElement[]>([])

  useEffect(() => {
    const elements = headings.map(({ id }) => document.getElementById(id)) as HTMLHeadingElement[]

    setElements(elements)
  }, [headings])

  useEffect(() => {
    const scrollTarget = elements.find(
      ({ id }) => id === window.top?.location.hash.replace('#', ''),
    )

    if (!scrollTarget) return

    setTimeout(() => {
      scrollIntoView(scrollTarget, {
        block: 'start',
        behavior: 'smooth',
      })
    }, 500)
  }, [elements])

  const activeAnchor = useActiveAnchor(elements)
  const activeIndex = elements.findIndex(heading => heading.id === activeAnchor?.id)

  return (
    <aside
      className={cx(className, [['flex shrink-0 grow-0 flex-col'], ['overflow-y-auto']])}
      {...others}
    >
      {headings.map(({ level, id, text }, index) => {
        if (level !== 2 && level !== 3) {
          return null
        }

        const tagName = `H${level}` as 'H2' | 'H3'

        return (
          <TableOfContentLink
            key={id}
            id={id}
            isActive={id === activeAnchor?.id}
            isPassed={index < activeIndex}
            tagName={tagName}
          >
            {text}
          </TableOfContentLink>
        )
      })}
    </aside>
  )
}
