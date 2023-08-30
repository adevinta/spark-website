import { allDocs } from "contentlayer/generated";
import { SideNav, SideNavProps } from "../Shared/SideNav";
import { Fragment } from "react";
import { SideNavSeparator } from "../Shared/SideNavSeparator";
import { SideNavLink } from "../Shared/SideNavLink";

export interface LayoutNavProps extends SideNavProps {
  onLinkClick?: () => void;
}

export const LayoutNav = ({ onLinkClick, ...others }: LayoutNavProps) => {
  const categories = allDocs.reduce((categories, doc) => {
    const category = doc.category;

    return {
      ...categories,
      [category]: Array.isArray(categories[category])
        ? [...categories[category], doc]
        : [doc],
    };
  }, {});

  return (
    <SideNav {...others}>
      {Object.keys(categories).map((category) => {
        const docs = categories[category];

        return (
          <Fragment key={category}>
            <SideNavSeparator>{category}</SideNavSeparator>

            {docs.map((doc) => (
              <SideNavLink
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                onClick={onLinkClick}
              >
                {doc.title}
              </SideNavLink>
            ))}
          </Fragment>
        );
      })}
    </SideNav>
  );
};
