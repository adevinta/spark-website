import { Drawer, DrawerProps } from '@spark-ui/drawer'
import { Button } from '@spark-ui/button'
import { LayoutNav } from './LayoutNav'
import { VisuallyHidden } from '@spark-ui/visually-hidden'

export type LayoutNavDrawerProps = DrawerProps

export const LayoutNavDrawer = ({ onOpenChange, ...others }: LayoutNavDrawerProps) => {
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
            <LayoutNav onLinkClick={handleLinkClick} />
          </Drawer.Body>

          <Drawer.CloseButton aria-label="Close menu" />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  )
}