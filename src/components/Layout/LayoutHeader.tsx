import { IconButton } from '@spark-ui/icon-button'
import { ModeIconButton } from '../Shared/ModeIconButton'
import { Icon } from '@spark-ui/icon'
import { FiGithub } from 'react-icons/fi'
import { ComponentPropsWithoutRef } from 'react'
import { cx } from 'class-variance-authority'
import Link from 'next/link'

import { LogoIcon } from '@/components/Shared/Logo'
import { LayoutContainer } from './LayoutContainer'
import { LayoutNavButton } from './LayoutNavButton'
import { CmdKTrigger } from '@/components/CmdK/CmdKTrigger'

export interface LayoutHeaderProps extends ComponentPropsWithoutRef<'header'> {
  hasSearch?: boolean
}

export const LayoutHeader = ({ hasSearch, className, ...others }: LayoutHeaderProps) => {
  return (
    <header
      className={cx(
        className,
        'sticky top-none z-raised h-sz-64 w-full border-b-sm border-neutral-container backdrop-blur-sm',
      )}
      {...others}
    >
      <LayoutContainer className="flex h-full items-center justify-between">
        <Link href="/">
          <LogoIcon className="h-sz-44 w-sz-44" />
        </Link>

        <div className="flex gap-md">
          <ModeIconButton intent="neutral" design="ghost" />

          <IconButton intent="neutral" design="ghost" aria-label="GitHub" asChild>
            <a
              href="https://github.com/adevinta/spark"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Icon>
                <FiGithub />
              </Icon>
            </a>
          </IconButton>

          {hasSearch && <CmdKTrigger />}

          <LayoutNavButton className="lg:hidden" intent="neutral" design="ghost" />
        </div>
      </LayoutContainer>
    </header>
  )
}
