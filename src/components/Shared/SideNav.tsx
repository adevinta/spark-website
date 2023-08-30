import { cx } from "class-variance-authority";
import { HTMLAttributes } from "react";

export type SideNavProps = HTMLAttributes<HTMLElement>;

export const SideNav = ({ className, ...others }: SideNavProps) => {
  return (
    <nav className={cx(className, "w-full h-full overflow-auto")} {...others} />
  );
};
