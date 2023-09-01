import { forwardRef, ReactElement } from 'react'
import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'

export interface LayoutContentProps {
  asChild?: boolean
  children: ReactElement
  className?: string
}
export const LayoutContent = forwardRef<HTMLElement, LayoutContentProps>(
  ({ children, className }, forwardedRef) => (
    <Slot
      ref={forwardedRef}
      className={cx(
        's:w-full w-auto grow md:w-full lg:min-w-sz-768 xl:min-w-sz-768 2xl:min-w-sz-768 3xl:min-w-sz-768',
        className,
      )}
    >
      {children}
    </Slot>
  ),
)

LayoutContent.displayName = 'Layout.Content'
