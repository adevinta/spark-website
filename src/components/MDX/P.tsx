import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

export type PProps = HTMLAttributes<HTMLParagraphElement>

export const P = ({ className, ...others }: PProps) => {
  return <p className={cx(className, 'my-md text-body-1')} {...others} />
}
