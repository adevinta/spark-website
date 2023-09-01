import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

export type SideNavProps = HTMLAttributes<HTMLElement>

export const SideNav = ({ className, ...others }: SideNavProps) => {
  return (
    <nav
      className={cx(className, 'sticky top-[64px] h-full w-sz-256 min-w-sz-256 overflow-auto')}
      {...others}
    />
  )
}
