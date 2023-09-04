import { forwardRef, ReactElement } from 'react'
import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'

export interface LayoutContentProps {
  children: ReactElement
  className?: string
}
export const LayoutContent = forwardRef<HTMLElement, LayoutContentProps>(
  ({ children, className }, forwardedRef) => (
    <Slot
      ref={forwardedRef}
      className={cx(
        'mx-lg w-full grow',
        'first:ml-lg last:mr-lg first:max-w-full last:max-w-full',
        'lg:ml-none xl:mr-none',
        className,
      )}
    >
      {children}
    </Slot>
  ),
)

LayoutContent.displayName = 'Layout.Content'
