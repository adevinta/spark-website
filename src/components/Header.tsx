import { IconButton } from '@spark-ui/icon-button'
import { Container } from './Container'
import { LogoIcon } from './Logo'
import { ModeIconButton } from './ModeIconButton'
import { Icon } from '@spark-ui/icon'
import { FiGithub } from 'react-icons/fi'
import { HtmlHTMLAttributes } from 'react'
import { cx } from 'class-variance-authority'
import Link from 'next/link'

export type HeaderProps = HtmlHTMLAttributes<HTMLElement>

export const Header = ({ className, ...others }: HeaderProps) => {
  return (
    <header
      className={cx(
        className,
        'sticky top-none z-raised h-sz-64 w-full border-b-sm border-neutral-container backdrop-blur-sm',
      )}
      {...others}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/">
          <LogoIcon className="h-sz-44 w-sz-44" />
        </Link>

        <div className="flex gap-md">
          <ModeIconButton intent="neutral" design="ghost" />

          <IconButton intent="neutral" design="ghost" aria-label="GitHub">
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
        </div>
      </Container>
    </header>
  )
}
