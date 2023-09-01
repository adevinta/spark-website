import { cx } from "class-variance-authority";
import { useEffect, useState, ComponentPropsWithoutRef } from "react";
import scrollIntoView from "scroll-into-view-if-needed";

import { useActiveAnchor } from "@/hooks/useActiveAnchor";
import { TableOfContentLink } from "./TableOfContentLink";

export type TableOfContentProps = ComponentPropsWithoutRef<"div">;

export const TableOfContent = ({
  className,
  ...others
}: TableOfContentProps) => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    setHeadings([
      ...(document.querySelectorAll<HTMLHeadingElement>("h2, h3") || []),
    ]);
  }, []);

  useEffect(() => {
    const scrollTarget = headings.find(
      ({ id }) => id === window.top?.location.hash.replace("#", "")
    );

    if (!scrollTarget) return;

    setTimeout(() => {
      scrollIntoView(scrollTarget, {
        block: "start",
        behavior: "smooth",
      });
    }, 500);
  }, [headings]);

  const activeAnchor = useActiveAnchor(headings);
  const activeIndex = headings.findIndex(
    (heading) => heading.id === activeAnchor?.id
  );

  if (!headings?.length) return null;

  return (
    <div
      className={cx(className, [
        ["flex flex-col shrink-0 grow-0"],
        ["overflow-y-auto"],
      ])}
      {...others}
    >
      {headings.map(({ tagName, id, firstChild }, index) => {
        if (tagName !== "H2" && tagName !== "H3") return null;

        return (
          <TableOfContentLink
            key={id}
            id={id}
            isActive={id === activeAnchor?.id}
            isPassed={index < activeIndex}
            tagName={tagName}
          >
            {firstChild.textContent}
          </TableOfContentLink>
        );
      })}
    </div>
  );
};
