import { cx } from 'class-variance-authority'
import Link from 'next/link'
import { ActiveLink } from './ActiveLink'
import { ComponentProps } from 'react'

export interface SideNavLinkProps extends ComponentProps<typeof Link> {}

export const SideNavLink = ({ className, href, children, ...others }: SideNavLinkProps) => {
  return (
    <ActiveLink href={href} {...others}>
      {({ isActive, ...props }) => (
        <Link
          className={cx(className, 'block rounded-sm p-md text-body-1 hover:bg-main/dim-5', {
            ['bg-main/dim-5 font-semi-bold text-main']: isActive,
          })}
          {...props}
        >
          {children}
        </Link>
      )}
    </ActiveLink>
  )
}
