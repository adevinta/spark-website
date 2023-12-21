import { Drawer, DrawerProps } from '@spark-ui/drawer'
import { LayoutNav } from './LayoutNav'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import {Doc} from "contentlayer/generated";

export interface LayoutNavDrawerProps extends DrawerProps {
  categories?: {[key: string]: Doc[]}
}

export const LayoutNavDrawer = ({ onOpenChange, categories, ...others }: LayoutNavDrawerProps) => {
  const handleLinkClick = () => {
    onOpenChange(false)
  }

  return (
    <Drawer onOpenChange={onOpenChange} {...others}>
      <Drawer.Portal>
        <Drawer.Overlay />

        <Drawer.Content>
          <Drawer.Header>
            <VisuallyHidden>
              <Drawer.Title>Menu</Drawer.Title>
            </VisuallyHidden>
          </Drawer.Header>

          <Drawer.Body>
            <LayoutNav onLinkClick={handleLinkClick} className="h-screen" categories={categories} />
          </Drawer.Body>

          <Drawer.CloseButton aria-label="Close menu" />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  )
}
