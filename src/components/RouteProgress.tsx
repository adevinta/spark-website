import { NProgress, NProgressProps } from "./NProgress";
import { useRouteState } from "../hooks/useRouteState";

export type RouteProgressProps = Omit<NProgressProps, "isAnimating">;

export const RouteProgress = (props: RouteProgressProps) => {
  const { loadingKey: key, isRouteChanging } = useRouteState();

  return (
    <NProgress
      key={key}
      className="fixed top-none w-full z-raised"
      isAnimating={isRouteChanging}
      {...props}
    />
  );
};
