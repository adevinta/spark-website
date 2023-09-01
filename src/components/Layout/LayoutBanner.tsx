import { forwardRef, ReactElement } from "react";
import { Slot } from "@spark-ui/slot";

export interface LayoutBannerProps {
  asChild?: boolean;
  children: ReactElement;
  className?: string;
}
export const LayoutBanner = forwardRef<HTMLDivElement, LayoutBannerProps>(
  ({ children, className }, forwardedRef) => (
    <Slot ref={forwardedRef} className={className}>
      {children}
    </Slot>
  ),
);

LayoutBanner.displayName = "Layout.Banner";
