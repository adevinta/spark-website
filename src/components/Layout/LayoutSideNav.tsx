import { cx } from 'class-variance-authority'

import { LayoutNav, LayoutNavProps } from './LayoutNav'

export type LayoutSideNavProps = LayoutNavProps

export const LayoutSideNav = ({ className, ...others }: LayoutSideNavProps) => {
  return (
    <LayoutNav
      className={cx(
        'hidden md:block',
        'sticky top-[--sz-64]',
        'max-h-[calc(100vh-var(--sz-64))] shrink-0 basis-[--sz-256] py-sm',
        className,
      )}
      {...others}
    />
  )
}
