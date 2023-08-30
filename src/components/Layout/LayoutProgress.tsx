import { NProgress, NProgressProps } from "@/components/Shared/NProgress";
import { useRouteState } from "@/hooks/useRouteState";

export type LayoutProgressProps = Omit<NProgressProps, "isAnimating">;

export const LayoutProgress = (props: LayoutProgressProps) => {
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
