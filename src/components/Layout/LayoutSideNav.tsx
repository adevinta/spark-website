import { LayoutNav, LayoutNavProps } from "./LayoutNav";
import { cx } from "class-variance-authority";

export type LayoutSideNavProps = LayoutNavProps;

export const LayoutSideNav = ({ className, ...others }: LayoutSideNavProps) => {
  return (
    <LayoutNav
      className={cx(
        className,
        "hidden md:block sticky top-[64px] w-sz-256 min-w-sz-256"
      )}
      {...others}
    />
  );
};