import { cx } from 'class-variance-authority'
import { HTMLProps } from 'react'

export type SideNavSeparatorProps = HTMLProps<HTMLParagraphElement>

export const SideNavSeparator = ({ className, ...others }: SideNavSeparatorProps) => {
  return <p className={cx(className, 'p-md text-body-1 font-semi-bold text-main')} {...others} />
}
