import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

export interface H1Props extends HTMLAttributes<HTMLHeadingElement> {}

export const H1 = ({ className, ...others }: H1Props) => {
  return <h1 className={cx(className, 'my-lg text-display-2')} {...others} />
}
