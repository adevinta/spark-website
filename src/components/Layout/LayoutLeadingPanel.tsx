import { forwardRef, ReactElement } from 'react'
import { cx } from 'class-variance-authority'

import { LayoutPanel } from './LayoutPanel'

export interface LayoutLeadingPanelProps {
  asChild?: boolean
  children: ReactElement
  className?: string
}
export const LayoutLeadingPanel = forwardRef<HTMLDivElement, LayoutLeadingPanelProps>(
  ({ children, className }, forwardedRef) => (
    <LayoutPanel
      ref={forwardedRef}
      className={cx(
        'grow-0 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:flex 3xl:min-w-sz-208',
        className,
      )}
    >
      {children}
    </LayoutPanel>
  ),
)

LayoutLeadingPanel.displayName = 'Layout.LeadingPanel'
