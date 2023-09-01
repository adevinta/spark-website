import { forwardRef } from 'react'

import { LayoutBanner, type LayoutBannerProps } from './LayoutBanner'
import { cx } from 'class-variance-authority'

export type LayoutTopBannerProps = LayoutBannerProps
export const LayoutTopBanner = forwardRef<HTMLDivElement, LayoutTopBannerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <LayoutBanner ref={forwardedRef} className={cx('w-screen grow-0', className)} {...props}>
      {children}
    </LayoutBanner>
  ),
)

LayoutTopBanner.displayName = 'Layout.TopBanner'
