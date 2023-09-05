import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

export type InlineCodeProps = HTMLAttributes<HTMLHeadingElement>

export const InlineCode = ({ className, ...others }: InlineCodeProps) => {
  return (
    <code
      className={cx(
        className,
        'bg-support/dim-5 pe-sm ps-sm font-monospace text-body-2 text-support',
      )}
      {...others}
    />
  )
}
