import { forwardRef, ReactElement } from 'react'
import { cx } from 'class-variance-authority'

import { LayoutPanel } from './LayoutPanel'

export interface LayoutTrailingPanelProps {
  asChild?: boolean
  children: ReactElement
  className?: string
}
export const LayoutTrailingPanel = forwardRef<HTMLDivElement, LayoutTrailingPanelProps>(
  ({ children, className }, forwardedRef) => (
    <LayoutPanel
      ref={forwardedRef}
      className={cx(
        'grow-0 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block 2xl:min-w-sz-208 3xl:min-w-sz-208',
        className,
      )}
    >
      {children}
    </LayoutPanel>
  ),
)

LayoutTrailingPanel.displayName = 'Layout.TrailingPanel'
