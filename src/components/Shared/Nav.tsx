import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

export type NavProps = ComponentPropsWithoutRef<'nav'>

export const Nav = ({ className, ...others }: NavProps) => {
  return <nav className={cx('h-full w-full', className)} {...others} />
}
