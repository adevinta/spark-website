import { allDocs } from 'contentlayer/generated'
import { Fragment, HTMLAttributes } from 'react'
import { SideNavSeparator } from '../Shared/SideNavSeparator'
import { SideNavLink } from '../Shared/SideNavLink'
import { cx } from 'class-variance-authority'
export interface NavProps extends HTMLAttributes<HTMLElement> {
  onLinkClick?: () => void
}

export const Nav = ({ onLinkClick, className, ...others }: NavProps) => {
  const categories = allDocs.reduce((categories, doc) => {
    const category = doc.category

    return {
      ...categories,
      [category]: Array.isArray(categories[category]) ? [...categories[category], doc] : [doc],
    }
  }, {})

  return (
    <nav className={cx('h-full overflow-auto', className)} {...others}>
      {Object.keys(categories).map(category => {
        const docs = categories[category]

        return (
          <Fragment key={category}>
            <SideNavSeparator>{category}</SideNavSeparator>

            {docs.map(doc => (
              <SideNavLink key={doc.slug} href={`/docs/${doc.slug}`} onClick={onLinkClick}>
                {doc.title}
              </SideNavLink>
            ))}
          </Fragment>
        )
      })}
    </nav>
  )
}
