import { useNProgress } from '@tanem/react-nprogress'
import { Progress } from '@spark-ui/progress'
import { ComponentProps } from 'react'

export type NProgressProps = Omit<ComponentProps<typeof Progress>, 'isIndeterminate'> & {
  isAnimating: boolean
}

export const NProgress = ({ isAnimating, ...others }: NProgressProps) => {
  const { progress, isFinished } = useNProgress({
    isAnimating,
  })

  if (isFinished) {
    return null
  }

  return <Progress value={progress * 100} {...others} />
}
