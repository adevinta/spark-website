import { forwardRef, ReactElement } from 'react'
import { cx } from 'class-variance-authority'
import { Slot } from '@spark-ui/slot'

export interface LayoutSidebarProps {
  children: ReactElement
  className?: string
}
export const LayoutSideBar = forwardRef<HTMLDivElement, LayoutSidebarProps>(
  ({ children, className }, forwardedRef) => {
    return (
      <Slot
        ref={forwardedRef}
        className={cx(
          'w-sz-320 min-w-sz-256 shrink grow-0 first:ml-lg last:mr-lg',
          className,
        )}
      >
        {children}
      </Slot>
    )
  },
)

LayoutSideBar.displayName = 'Layout.SideBar'
