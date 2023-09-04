import { forwardRef, ReactElement } from 'react'
import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'

export interface LayoutFooterProps {
  children: ReactElement
  className?: string
}
export const LayoutFooter = forwardRef<HTMLElement, LayoutFooterProps>(
  ({ children, className }, forwardedRef) => (
    <Slot ref={forwardedRef} className={cx('w-full grow-0 px-lg', className)}>
      {children}
    </Slot>
  ),
)

LayoutFooter.displayName = 'Layout.Footer'
