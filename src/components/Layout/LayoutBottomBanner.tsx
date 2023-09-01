import { forwardRef } from "react";
import { cx } from "class-variance-authority";

import { LayoutBanner, type LayoutBannerProps } from "./LayoutBanner";

export type LayoutBottomBannerProps = LayoutBannerProps;
// @ts-ignore
export const LayoutBottomBanner = forwardRef<
  HTMLDivElement,
  LayoutBottomBannerProps
>(({ children, className, ...props }, forwardedRef) => (
  <LayoutBanner
    ref={forwardedRef}
    className={cx("grow-0 w-screen", className)}
    {...props}
  >
    {children}
  </LayoutBanner>
));

LayoutBottomBanner.displayName = "Layout.BottomBanner";
