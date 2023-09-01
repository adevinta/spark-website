import { forwardRef, ReactElement } from 'react'
import { Slot } from '@spark-ui/slot'

export interface LayoutPanelProps {
  asChild?: boolean
  children: ReactElement
  className?: string
}
export const LayoutPanel = forwardRef<HTMLDivElement, LayoutPanelProps>(
  ({ children, className }, forwardedRef) => (
    <Slot ref={forwardedRef} className={className}>
      {children}
    </Slot>
  ),
)

LayoutPanel.displayName = 'Layout.Panel'
