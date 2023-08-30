import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { LiveEditor as LiveEditorPrimitive } from "react-live";

const liveEditorVariants = cva(
  "min-h-full overflow-auto bg-[#1E1E1E] p-lg [&>*]:!p-none font-monospace",
  {
    variants: {
      size: {
        sm: "h-sz-180 max-h-sz-180",
        md: "h-sz-240 max-h-sz-240",
        lg: "h-sz-300 max-h-sz-300",
        xl: "h-sz-360 max-h-sz-360",
        "2xl": "h-sz-420 max-h-sz-420",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

export interface LiveEditorProps
  extends ComponentProps<typeof LiveEditorPrimitive>,
    VariantProps<typeof liveEditorVariants> {}

export const LiveEditor = ({ className, size, ...others }: LiveEditorProps) => {
  return (
    <LiveEditorPrimitive
      className={liveEditorVariants({ className, size })}
      {...others}
    />
  );
};
