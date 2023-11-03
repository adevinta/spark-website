import { Kbd } from '@spark-ui/kbd'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Search as SearchIcon } from '@spark-ui/icons/dist/icons/Search'
import { cx } from 'class-variance-authority'
import { useCmdK } from '@/components/CmdK/CmdKContext'

export function CmdKTrigger({ isResponsive = true }) {
  const { isOpen, setIsOpen } = useCmdK()

  return (
    <>
      <Button
        className={cx({ 'hidden lg:block': !!isResponsive, block: !isResponsive })}
        design="outlined"
        intent="basic"
        onClick={() => setIsOpen(true)}
      >
        Search... <Kbd className="uppercase">cmd+K</Kbd>
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
