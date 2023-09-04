import { FC } from 'react'

import { Layout as Root, type LayoutProps } from './Layout'
import { LayoutHeader } from './LayoutHeader'
import { LayoutContent } from './LayoutContent'
import { LayoutFooter } from './LayoutFooter'
import { LayoutLeadingSidebar } from './LayoutLeadingSidebar'
import { LayoutTrailingSidebar } from './LayoutTrailingSidebar'

export const Layout: FC<LayoutProps> & {
  Header: typeof LayoutHeader
  LeadingSidebar: typeof LayoutLeadingSidebar
  Content: typeof LayoutContent
  TrailingSidebar: typeof LayoutTrailingSidebar
  Footer: typeof LayoutFooter
} = Object.assign(Root, {
  Header: LayoutHeader,
  LeadingSidebar: LayoutLeadingSidebar,
  Content: LayoutContent,
  TrailingSidebar: LayoutTrailingSidebar,
  Footer: LayoutFooter,
})

Layout.Header.displayName = 'Layout.Header'
Layout.LeadingSidebar.displayName = 'Layout.LeadingSidebar'
Layout.Content.displayName = 'Layout.Content'
Layout.TrailingSidebar.displayName = 'Layout.TrailingSidebar'
Layout.Footer.displayName = 'Layout.Footer'
