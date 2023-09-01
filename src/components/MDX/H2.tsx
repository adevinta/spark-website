import { cx } from 'class-variance-authority'
import { Heading, HeadingProps } from './Heading'

export interface H2Props extends HeadingProps {
  anchor: string
}

export const H2 = ({ className, ...others }: H2Props) => {
  return <Heading className={cx(className, 'my-lg text-display-3')} {...others} />
}
