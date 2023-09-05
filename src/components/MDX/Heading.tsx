import { cx } from 'class-variance-authority'
import { ElementType, HTMLAttributes } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: ElementType
  anchor: string
}

export const Heading = ({
  id,
  as: Component = 'h2',
  anchor = '#',
  className,
  children,
  ...others
}: HeadingProps) => {
  return (
    <Component id={id} className={cx(className, '[&>a]:hover:!opacity-[1]')} {...others}>
      {children}

      {id && (
        <a aria-label="anchor" href={`#${id}`} className="ml-sm opacity-0 focus:opacity-[1]">
          {anchor}
        </a>
      )}
    </Component>
  )
}
