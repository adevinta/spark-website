import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

export interface LayoutContainerProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

export const LayoutContainer = ({ className, asChild, ...others }: LayoutContainerProps) => {
  const Component = asChild ? Slot : 'div'

  return <Component className={cx(className, 'm-auto max-w-[1280px] px-lg')} {...others} />
}
