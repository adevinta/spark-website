import { forwardRef, ReactElement } from "react";
import { Slot } from "@spark-ui/slot";

export interface LayoutSidebarProps {
  asChild?: boolean;
  children: ReactElement;
  className?: string;
}
export const LayoutSideBar = forwardRef<HTMLDivElement, LayoutSidebarProps>(
  ({ children, className }, forwardedRef) => (
    <Slot ref={forwardedRef} className={className}>
      {children}
    </Slot>
  ),
);

LayoutSideBar.displayName = "Layout.SideBar";
