import { cx } from "class-variance-authority";
import { useRouter } from "next/router";
import { HTMLProps } from "react";

export type SideNavLinkProps = HTMLProps<HTMLAnchorElement>;

export const SideNavLink = ({
  className,
  href,
  ...others
}: SideNavLinkProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <a
      className={cx(
        className,
        "block text-body-1 p-md rounded-sm hover:bg-main/dim-5",
        { ["text-main font-semi-bold bg-main/dim-5"]: isActive }
      )}
      href={href}
      {...others}
    />
  );
};
