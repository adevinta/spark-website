import { cx } from 'class-variance-authority'
import Link from 'next/link'
import { ComponentProps } from 'react'

import { ActiveLink } from './ActiveLink'

export interface NavLinkProps extends ComponentProps<typeof Link> {}

export const NavLink = ({ className, href, children, ...others }: NavLinkProps) => {
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
