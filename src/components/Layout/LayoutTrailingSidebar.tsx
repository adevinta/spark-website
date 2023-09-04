import { forwardRef, ReactElement } from 'react'
import { cx } from 'class-variance-authority'

import { LayoutSideBar } from './LayoutSidebar'

export interface LayoutTrailingSidebarProps {
  children: ReactElement
  className?: string
}
export const LayoutTrailingSidebar = forwardRef<HTMLDivElement, LayoutTrailingSidebarProps>(
  ({ children, className }, forwardedRef) => (
    <LayoutSideBar ref={forwardedRef} className={cx('hidden xl:block', className)}>
      {children}
    </LayoutSideBar>
  ),
)

LayoutTrailingSidebar.displayName = 'Layout.TrailingSidebar'
