import { forwardRef, ReactElement } from 'react'
import { cx } from 'class-variance-authority'

import { LayoutSideBar } from './LayoutSidebar'

export interface LayoutLeadingSidebarProps {
  children: ReactElement
  className?: string
}
export const LayoutLeadingSidebar = forwardRef<HTMLDivElement, LayoutLeadingSidebarProps>(
  ({ children, className }, forwardedRef) => (
    <LayoutSideBar ref={forwardedRef} className={cx('hidden lg:block', className)}>
      {children}
    </LayoutSideBar>
  ),
)

LayoutLeadingSidebar.displayName = 'Layout.TrailingSidebar'
