import { Kbd } from '@spark-ui/kbd'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Search as SearchIcon } from '@spark-ui/icons/dist/icons/Search'
import { cx } from 'class-variance-authority'
import { useCmdK } from '@/components/CmdK/CmdKContext'
import { useEffect, useState } from 'react'

const ACTION_KEY_DEFAULT = 'Ctrl'
const ACTION_KEY_APPLE = 'Cmd'

export function CmdKTrigger({ isResponsive = true }) {
  const { isOpen, setIsOpen } = useCmdK()

  const [actionKey, setActionKey] = useState(ACTION_KEY_APPLE)

  useEffect(() => {
    if (typeof navigator === 'undefined') {
      return
    }

    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)

    if (!isMac) {
      setActionKey(ACTION_KEY_DEFAULT)
    }
  }, [])

  return (
    <>
      <Button
        className={cx({ 'hidden lg:block': !!isResponsive, block: !isResponsive })}
        design="outlined"
        intent="basic"
        onClick={() => setIsOpen(true)}
      >
        Search... <Kbd className="uppercase">{actionKey}+K</Kbd>
      </Button>
      <IconButton
        className={cx({ 'block lg:hidden': !!isResponsive, hidden: !isResponsive })}
        aria-label="search"
        intent="neutral"
        design="ghost"
        onClick={() => setIsOpen(true)}
      >
        <Icon>
          <SearchIcon />
        </Icon>
      </IconButton>
    </>
  )
}
