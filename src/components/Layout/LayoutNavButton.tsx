import { Icon } from '@spark-ui/icon'
import { IconButton, IconButtonProps } from '@spark-ui/icon-button'
import { BurgerMenu } from '@spark-ui/icons'
import { useState } from 'react'

import { LayoutNavDrawer } from './LayoutNavDrawer'
import { Doc } from 'contentlayer/generated'

type LayoutNavButtonType = Omit<IconButtonProps, 'aria-label'>
export interface LayoutNavButtonProps extends LayoutNavButtonType {
  categories?: { [key: string]: Doc[] }
}

export const LayoutNavButton = ({ categories, ...props }: LayoutNavButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  const handleOpenChange = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  return (
    <>
      <IconButton aria-label="Menu" onClick={handleClick} {...props}>
        <Icon>
          <BurgerMenu />
        </Icon>
      </IconButton>

      <LayoutNavDrawer open={isOpen} onOpenChange={handleOpenChange} categories={categories} />
    </>
  )
}
