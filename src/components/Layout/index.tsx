/*
Header
Top/Bottom banner
Nav
Hero
Main
Content
Left/Right Panel
Left/right Sidebar
Footer
 */

import { FC } from 'react'

import { Layout as Root, type LayoutProps } from './Layout'
import { LayoutHeader } from './LayoutHeader'
import { LayoutContent } from './LayoutContent'
import { LayoutHero } from './LayoutHero'
import { LayoutFooter } from './LayoutFooter'
import { LayoutTopBanner } from './LayoutTopBanner'
import { LayoutBottomBanner } from './LayoutBottomBanner'
import { LayoutLeadingSidebar } from './LayoutLeadingSidebar'
import { LayoutTrailingSidebar } from './LayoutTrailingSidebar'
import { LayoutLeadingPanel } from './LayoutLeadingPanel'
import { LayoutTrailingPanel } from './LayoutTrailingPanel'

export const Layout: FC<LayoutProps> & {
  Header: typeof LayoutHeader
  TopBanner: typeof LayoutTopBanner
  Hero: typeof LayoutHero
  LeadingPanel: typeof LayoutLeadingPanel
  LeadingSidebar: typeof LayoutLeadingSidebar
  Content: typeof LayoutContent
  TrailingSidebar: typeof LayoutTrailingSidebar
  TrailingPanel: typeof LayoutTrailingPanel
  BottomBanner: typeof LayoutBottomBanner
  Footer: typeof LayoutFooter
} = Object.assign(Root, {
  Header: LayoutHeader,
  TopBanner: LayoutTopBanner,
  Hero: LayoutHero,
  LeadingPanel: LayoutLeadingPanel,
  LeadingSidebar: LayoutLeadingSidebar,
  Content: LayoutContent,
  TrailingSidebar: LayoutTrailingSidebar,
  TrailingPanel: LayoutTrailingPanel,
  BottomBanner: LayoutBottomBanner,
  Footer: LayoutFooter,
})

Layout.Header.displayName = 'Layout.Header'
Layout.TopBanner.displayName = 'Layout.TopBanner'
Layout.Hero.displayName = 'Layout.Hero'
Layout.LeadingPanel.displayName = 'Layout.LeadingPanel'
Layout.LeadingSidebar.displayName = 'Layout.LeadingSidebar'
Layout.Content.displayName = 'Layout.Content'
Layout.TrailingSidebar.displayName = 'Layout.TrailingSidebar'
Layout.TrailingPanel.displayName = 'Layout.TrailingPanel'
Layout.BottomBanner.displayName = 'Layout.BottomBanner'
Layout.Footer.displayName = 'Layout.Footer'
