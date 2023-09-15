import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

export type NavProps = ComponentPropsWithoutRef<'nav'>

export const Nav = ({ className, ...others }: NavProps) => {
  return <nav className={cx('w-full overflow-y-scroll', className)} {...others} />
}
