import { forwardRef, ReactElement } from 'react'
import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'

export interface LayoutHeroProps {
  asChild?: boolean
  children: ReactElement
  className?: string
}
export const LayoutHero = forwardRef<HTMLElement, LayoutHeroProps>(
  ({ children, className }, forwardedRef) => (
    <Slot ref={forwardedRef} className={cx('min-h-[50dvh] w-screen grow', className)}>
      {children}
    </Slot>
  ),
)

LayoutHero.displayName = 'Layout.Hero'
