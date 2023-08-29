import { cx } from "class-variance-authority";
import { HTMLAttributes } from "react";

export type PProps = HTMLAttributes<HTMLParagraphElement>;

export const P = ({ className, ...others }: PProps) => {
  return <p className={cx(className, "text-body-1 my-md")} {...others} />;
};
