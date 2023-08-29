import { cx } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { ActiveLink } from "./ActiveLink";
import { ComponentProps } from "react";

export interface SideNavLinkProps extends ComponentProps<typeof Link> {}

export const SideNavLink = ({
  className,
  href,
  children,
  ...others
}: SideNavLinkProps) => {
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
