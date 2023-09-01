import { forwardRef, ReactElement } from 'react'
import { cx } from 'class-variance-authority'

import { LayoutSideBar } from './LayoutSidebar'

export interface LayoutLeadingSidebarProps {
  asChild?: boolean
  children: ReactElement
  className?: string
}
export const LayoutLeadingSidebar = forwardRef<HTMLDivElement, LayoutLeadingSidebarProps>(
  ({ children, className }, forwardedRef) => (
    <LayoutSideBar
      ref={forwardedRef}
      className={cx(
        'grow-0 hidden sm:hidden md:hidden lg:block lg:w-sz-208 xl:min-w-sz-208 2xl:min-w-sz-208 3xl:min-w-sz-208',
        className,
      )}
    >
      {children}
    </LayoutSideBar>
  ),
)

LayoutLeadingSidebar.displayName = 'Layout.TrailingSidebar'
