import { forwardRef, ReactElement } from 'react'
import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'

export interface LayoutFooterProps {
  asChild?: boolean
  children: ReactElement
  className?: string
}
export const LayoutFooter = forwardRef<HTMLElement, LayoutFooterProps>(
  ({ children, className }, forwardedRef) => (
    <Slot
      ref={forwardedRef}
      className={cx(
        'w-full grow-0',
        'sm:w-full',
        'md:w-full',
        'lg:w-sz-768',
        'xl:w-[calc(2*var(--sz-208)+var(--sz-768))]',
        '2xl:w-[calc(2*var(--sz-208)+var(--sz-768))]',
        '3xl:w-[calc(2*var(--sz-208)+var(--sz-768))]',
        className,
      )}
    >
      {children}
    </Slot>
  ),
)

LayoutFooter.displayName = 'Layout.Footer'
