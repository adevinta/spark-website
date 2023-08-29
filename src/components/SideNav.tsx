import { cx } from "class-variance-authority";
import { HTMLAttributes } from "react";

export type SideNavProps = HTMLAttributes<HTMLElement>;

export const SideNav = ({ className, ...others }: SideNavProps) => {
  return (
    <nav
      className={cx(
        className,
        "sticky top-[64px] w-sz-256 min-w-sz-256 h-full overflow-auto"
      )}
      {...others}
    />
  );
};
