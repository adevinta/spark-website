import { ReactNode, forwardRef, PropsWithRef, HTMLAttributes } from 'react'
import { cx } from 'class-variance-authority'

import { findElement } from '@/utils/findElement'

export interface LayoutProps extends PropsWithRef<HTMLAttributes<HTMLDivElement>> {}

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const findLayoutElement = findElement(children as ReactNode)

    const header = findLayoutElement('Layout.Header')
    const leadingSidebar = findLayoutElement('Layout.LeadingSidebar')
    const content = findLayoutElement('Layout.Content')
    const trailingSidebar = findLayoutElement('Layout.TrailingSidebar')
    const footer = findLayoutElement('Layout.Footer')

    return (
      <div
        ref={forwardedRef}
        className={cx(
          'relative flex min-h-screen w-full grow flex-col flex-nowrap items-center justify-between',
          className,
        )}
        {...props}
      >
        <div className="relative flex w-full grow flex-col items-center">
          {header}
          <main
            className={cx(
              'relative w-full shrink grow overflow-hidden',
              'flex flex-row items-stretch justify-between gap-3xl',
              className,
            )}
          >
            {leadingSidebar}
            {content}
            {trailingSidebar}
          </main>
        </div>
        {footer}
      </div>
    )
  },
)

Layout.displayName = 'Layout'
