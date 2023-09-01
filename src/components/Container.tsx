import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

export type ContainerProps = HTMLAttributes<HTMLDivElement>

export const Container = ({ className, ...others }: ContainerProps) => {
  return <div className={cx(className, 'm-auto max-w-[1280px] px-lg')} {...others} />
}
