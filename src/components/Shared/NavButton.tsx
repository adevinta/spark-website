import { Icon } from '@spark-ui/icon'
import { IconButton, IconButtonProps } from '@spark-ui/icon-button'
import { BurgerMenu } from '@spark-ui/icons'
import { useState } from 'react'

import { NavDrawer } from './NavDrawer'

export type NavButtonProps = Omit<IconButtonProps, 'aria-label'>

export const NavButton = (props: NavButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  const handleOpenChange = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  return (
    <>
      <IconButton aria-label="rew" onClick={handleClick} {...props}>
        <Icon>
          <BurgerMenu />
        </Icon>
      </IconButton>

      <NavDrawer open={isOpen} onOpenChange={handleOpenChange} />
    </>
  )
}
