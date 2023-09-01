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
        'w-auto px-lg grow',
        'sm:w-full',
        'md:w-full',
        'lg:min-w-sz-768',
        'xl:min-w-sz-768 xl:max-w-[calc(1*var(--sz-208)+var(--sz-768))]',
        '2xl:min-w-sz-768 2xl:max-w-[calc(2*var(--sz-208)+var(--sz-768))]',
        '3xl:min-w-sz-768 3xl:max-w-[calc(2*var(--sz-208)+var(--sz-768))]',
        className,
      )}
    >
      {children}
    </Slot>
  ),
)

LayoutContent.displayName = 'Layout.Content'
