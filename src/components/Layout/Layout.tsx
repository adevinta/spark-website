import { ReactNode, forwardRef, PropsWithRef, HTMLAttributes } from 'react'
import { cx } from 'class-variance-authority'

import { findElement } from '@/utils/findElement'

export interface LayoutProps extends PropsWithRef<HTMLAttributes<HTMLDivElement>> {}

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const findLayoutElement = findElement(children as ReactNode)

    const topBanner = findLayoutElement('Layout.TopBanner')
    const header = findLayoutElement('Layout.Header')
    const hero = findLayoutElement('Layout.Hero')
    const leadingPanel = findLayoutElement('Layout.LeadingPanel')
    const leadingSidebar = findLayoutElement('Layout.LeadingSidebar')
    const content = findLayoutElement('Layout.Content')
    const trailingSidebar = findLayoutElement('Layout.TrailingSidebar')
    const trailingPanel = findLayoutElement('Layout.TrailingPanel')
    const bottomBanner = findLayoutElement('Layout.BottomBanner')
    const footer = findLayoutElement('Layout.Footer')

    return (
      <div
        ref={forwardedRef}
        className={cx(
          'relative flex min-h-screen w-screen flex-col flex-nowrap justify-between',
          className,
        )}
        {...props}
      >
        {topBanner}
        <div className="relative flex w-screen grow flex-col items-center justify-between">
          <div className="relative flex w-screen grow flex-col items-center">
            {header}
            {hero}
            <div
              className={cx(
                'relative w-full grow-0',
                'flex flex-row items-stretch justify-center',
                'sm:w-full',
                'md:w-full',
                'lg:w-[calc(1*var(--sz-208)+var(--sz-768))]',
                'xl:w-[calc(2*var(--sz-208)+var(--sz-768))]',
                '2xl:w-[calc(3*var(--sz-208)+var(--sz-768))]',
                '3xl:w-[calc(4*var(--sz-208)+var(--sz-768))]',
                className,
              )}
            >
              {leadingPanel}
              <main
                className={cx(
                  'relative flex grow flex-row flex-nowrap justify-around',
                  'lg:min-w-sz-768',
                  'xl:min-w-[var(--sz-768)] xl:max-w-[calc(2*var(--sz-208)+var(--sz-768))]',
                  '2xl:min-w-[var(--sz-768)] 2xl:max-w-[calc(2*var(--sz-208)+var(--sz-768))]',
                  '2xl:min-w-[var(--sz-768)] 3xl:max-w-[calc(2*var(--sz-208)+var(--sz-768))]',
                )}
              >
                {leadingSidebar}
                {content}
                {trailingSidebar}
              </main>
              {trailingPanel}
            </div>
          </div>
          {footer}
        </div>
        {bottomBanner}
      </div>
    )
  },
)

Layout.displayName = 'Layout'
