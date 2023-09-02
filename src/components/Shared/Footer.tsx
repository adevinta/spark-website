import { ComponentPropsWithoutRef } from 'react'
import { cx } from 'class-variance-authority'

export type FooterProps = ComponentPropsWithoutRef<'footer'>

export const Footer = ({ className, ...others }: FooterProps) => {
  return <footer className={cx('flex flex-row justify-center px-lg', className)} {...others} />
}
