import { forwardRef, ReactElement } from 'react'
import { cx } from 'class-variance-authority'
import { Slot } from '@spark-ui/slot'

export interface LayoutHeaderProps {
  children: ReactElement
  className?: string
}
export const LayoutHeader = forwardRef<HTMLElement, LayoutHeaderProps>(
  ({ children, className }, forwardedRef) => (
    <Slot ref={forwardedRef} className={cx('w-full grow-0 px-lg', className)}>
      {children}
    </Slot>
  ),
)

LayoutHeader.displayName = 'Layout.Header'
