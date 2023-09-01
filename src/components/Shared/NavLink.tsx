import { cx } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps } from "react";

import { ActiveLink } from "./ActiveLink";

export interface NavLinkProps extends ComponentProps<typeof Link> {}

export const NavLink = ({
  className,
  href,
  children,
  ...others
}: NavLinkProps) => {
  return (
    <ActiveLink href={href} {...others}>
      {({ isActive, ...props }) => (
        <Link
          className={cx(
            className,
            "block text-body-1 p-md rounded-sm hover:bg-main/dim-5",
            { ["text-main font-semi-bold bg-main/dim-5"]: isActive }
          )}
          {...props}
        >
          {children}
        </Link>
      )}
    </ActiveLink>
  );
};
