import { cx } from 'class-variance-authority'

import { LayoutNav, LayoutNavProps } from './LayoutNav'

export type LayoutSideNavProps = LayoutNavProps

export const LayoutSideNav = ({ className, ...others }: LayoutSideNavProps) => {
  return (
    <LayoutNav
      className={cx(className, 'sticky hidden w-sz-256 min-w-sz-256 md:block')}
      {...others}
    />
  )
}
