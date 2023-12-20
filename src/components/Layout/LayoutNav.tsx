import {allDocs, Doc} from 'contentlayer/generated'
import { Fragment } from 'react'

import { Nav, NavProps } from '@/components/Shared/Nav'
import { NavSeparator } from '@/components/Shared/NavSeparator'
import { NavLink } from '@/components/Shared/NavLink'

export interface LayoutNavProps extends NavProps {
  onLinkClick?: () => void
  categories: {[key: string]: Doc[]}
}

export const LayoutNav = ({ onLinkClick, categories, ...others }: LayoutNavProps) => {
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
                <NavLink className="ml-md" key={doc.url} href={doc.url} onClick={onLinkClick}>
                  {doc.title}
                </NavLink>
              ))}
          </Fragment>
        )
      })}
    </Nav>
  )
}
