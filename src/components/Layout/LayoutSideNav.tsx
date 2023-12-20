import { cx } from 'class-variance-authority'
import {Slot} from "@spark-ui/slot";

import {LayoutNavProps } from './LayoutNav'

export type LayoutSideNavProps = Omit<LayoutNavProps, 'categories'>

export const LayoutSideNav = ({ className, children, ...others }: LayoutSideNavProps) => {
  return (
    <Slot
      className={cx(
        'hidden md:block',
        'sticky top-[--sz-64]',
        'max-h-[calc(100vh-var(--sz-64))] shrink-0 basis-[--sz-256] py-sm',
        className,
      )}
      {...others}
    >
      {children}
    </Slot>
  )
}
