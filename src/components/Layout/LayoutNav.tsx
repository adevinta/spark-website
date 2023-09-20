import { allDocs } from 'contentlayer/generated'
import { Fragment } from 'react'

import { Nav, NavProps } from '@/components/Shared/Nav'
import { NavSeparator } from '@/components/Shared/NavSeparator'
import { NavLink } from '@/components/Shared/NavLink'

export interface LayoutNavProps extends NavProps {
  onLinkClick?: () => void
}

export const LayoutNav = ({ onLinkClick, ...others }: LayoutNavProps) => {
  const categories = allDocs.reduce((categories, doc) => {
    const category = doc.category

    return {
      ...categories,
      [category]: Array.isArray(categories[category]) ? [...categories[category], doc] : [doc],
    }
  }, {})

  return (
    <Nav {...others}>
      {Object.keys(categories).map(category => {
        const docs = categories[category]

        return (
          <Fragment key={category}>
            <NavSeparator>{category}</NavSeparator>
            {docs
              .filter(doc => doc.slugAsParams.split('/').length === 2)
              .map(doc => (
                <NavLink key={doc.url} href={doc.url} onClick={onLinkClick}>
                  {doc.title}
                </NavLink>
              ))}
          </Fragment>
        )
      })}
    </Nav>
  )
}
