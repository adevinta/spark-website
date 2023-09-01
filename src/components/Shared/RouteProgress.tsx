import { NProgress, NProgressProps } from '@/components/Shared/NProgress'
import { useRouteState } from '@/hooks/useRouteState'

export type RouteProgressProps = Omit<NProgressProps, 'isAnimating'>

export const RouteProgress = (props: RouteProgressProps) => {
  const { loadingKey: key, isRouteChanging } = useRouteState()

  return (
    <NProgress
      key={key}
      className="fixed top-none z-sticky w-full"
      isAnimating={isRouteChanging}
      {...props}
    />
  )
}
