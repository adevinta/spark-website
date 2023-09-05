import { cx } from 'class-variance-authority'
import { Heading, HeadingProps } from './Heading'

export type H3Props = HeadingProps

export const H3 = ({ className, ...others }: H3Props) => {
  return <Heading className={cx(className, 'my-md text-subhead')} {...others} />
}
