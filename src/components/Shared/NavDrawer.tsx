import { Drawer, DrawerProps } from '@spark-ui/drawer'
import { Nav } from './Nav'
import { VisuallyHidden } from '@spark-ui/visually-hidden'

export type NavDrawerProps = DrawerProps

export const NavDrawer = ({ onOpenChange, ...others }: NavDrawerProps) => {
  const handleLinkClick = () => {
    onOpenChange(false)
  }

  return (
    <Drawer onOpenChange={onOpenChange} {...others}>
      <Drawer.Portal>
        <Drawer.Overlay />

        <Drawer.Content size="sm">
          <Drawer.Header>
            <VisuallyHidden>
              <Drawer.Title>Menu</Drawer.Title>
            </VisuallyHidden>
          </Drawer.Header>

          <Drawer.Body>
            <Nav onLinkClick={handleLinkClick} />
          </Drawer.Body>

          <Drawer.CloseButton aria-label="Close menu" />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  )
}
