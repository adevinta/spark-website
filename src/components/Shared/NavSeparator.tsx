import { cx } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

export type NavSeparatorProps = ComponentPropsWithoutRef<"p">;

export const NavSeparator = ({ className, ...others }: NavSeparatorProps) => {
  return (
    <p
      className={cx(className, "p-md text-body-1 text-main font-semi-bold")}
      {...others}
    />
  );
};
