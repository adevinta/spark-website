import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

export type SideNavProps = HTMLAttributes<HTMLElement>

export const SideNav = ({ className, ...others }: SideNavProps) => {
  return <nav className={cx(className, 'h-full w-full overflow-auto')} {...others} />
}
