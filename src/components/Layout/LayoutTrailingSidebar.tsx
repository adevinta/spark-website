import { forwardRef, ReactElement } from 'react'
import { cx } from 'class-variance-authority'

import { LayoutSideBar } from './LayoutSidebar'

export interface LayoutTrailingSidebarProps {
  asChild?: boolean
  children: ReactElement
  className?: string
}
export const LayoutTrailingSidebar = forwardRef<HTMLDivElement, LayoutTrailingSidebarProps>(
  ({ children, className }, forwardedRef) => (
    <LayoutSideBar
      ref={forwardedRef}
      className={cx(
        'grow-0 hidden sm:hidden md:hidden lg:hidden xl:block xl:min-w-sz-208 2xl:min-w-sz-208 3xl:min-w-sz-208',
        className,
      )}
    >
      {children}
    </LayoutSideBar>
  ),
)

LayoutTrailingSidebar.displayName = 'Layout.TrailingSidebar'
