import { LayoutNav, LayoutNavProps } from './LayoutNav'
import { cx } from 'class-variance-authority'

export type LayoutSideNavProps = LayoutNavProps

export const LayoutSideNav = ({ className, ...others }: LayoutSideNavProps) => {
  return (
    <LayoutNav
      className={cx(className, 'sticky top-[64px] hidden w-sz-256 min-w-sz-256 md:block')}
      {...others}
    />
  )
}