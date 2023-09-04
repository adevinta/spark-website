import { cx } from "class-variance-authority";

import {
  TableOfContent,
  TableOfContentProps,
} from "@/components/Shared/TableOfContent";

export type DocsTableOfContentProps = TableOfContentProps;

export const DocsTableOfContent = ({
  className,
  ...others
}: DocsTableOfContentProps) => {
  return (
    <TableOfContent
      className={cx(className, [
        "hidden xl:block",
        "sticky top-[64px]",
        "max-h-[calc(100vh-64px)] w-sz-256 min-w-sz-256 pt-lg",
      ])}
      {...others}
    />
  );
};
