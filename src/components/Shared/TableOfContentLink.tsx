import { VariantProps, cva } from 'class-variance-authority'
import { ComponentPropsWithoutRef, MouseEventHandler } from 'react'

const style = cva(['block', 'py-sm', ['hover:bg-[#F2F6FF]']], {
  variants: {
    isActive: {
      true: ['text-[#0052FF]', 'shadow-[inset_4px_0px_0px]'],
      false: ['text-on-surface', 'shadow-[inset_1px_0px_0px_#D1D0D5]'],
    },
    isPassed: {
      true: ['shadow-[inset_4px_0px_0px_#D1D0D5]'],
    },
    tagName: {
      H2: 'pl-lg text-body-1',
      H3: "pl-[calc(theme('spacing.xl')*1)] text-body-2",
      H4: "pl-[calc(theme('spacing.xl')*2)] text-caption",
    },
  },
})

type TableOfContentStyleProps = VariantProps<typeof style>

export interface TableOfContentProps
  extends ComponentPropsWithoutRef<'a'>,
    TableOfContentStyleProps {}

export const TableOfContentLink = ({
  id,
  className,
  isActive,
  isPassed,
  tagName,
  ...others
}: TableOfContentProps) => {
  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleClick: MouseEventHandler<HTMLAnchorElement> = event => {
    event.preventDefault()
    scrollToAnchor(id)
    parent.location.href = parent.location.href.split('#')[0] + '#' + id
  }

  return (
    <a
      href={`#${id}`}
      className={style({
        isActive,
        isPassed,
        tagName,
      })}
      onClick={handleClick}
      {...others}
    />
  )
}
