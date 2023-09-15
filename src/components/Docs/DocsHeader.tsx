import { cx } from 'class-variance-authority'
import { H1 } from '@/components/MDX/H1'
import { P } from '@/components/MDX/P'
import { Icon } from '@spark-ui/icon'
import { Tag } from '@spark-ui/tag'

import { Npm } from '@/icons/Npm'
import { GitHub } from '@/icons/GitHub'
import { Bug } from '@/icons/Bug'
import { WarningFill } from '@spark-ui/icons'
import { ComponentPropsWithoutRef } from 'react'

export interface DocsHeaderProps extends ComponentPropsWithoutRef<'header'> {
  title?: string
  name?: string
  category?: string
  license?: string
  description?: string
  keywords?: string
  packageUrl?: string
  version?: string
  bugReportUrl?: string
}
export const DocsHeader = ({
  title,
  name,
  category,
  license,
  description,
  keywords,
  packageUrl,
  className,
  version,
  bugReportUrl,
}: DocsHeaderProps) => {
  return (
    <header className={cx('@container/docs-header flex flex-wrap', className)}>
      <div
        className={cx(
          'w-full bg-gradient-to-r from-background-variant from-80% to-transparent px-lg pb-lg',
          '@[512px]/docs-header:w-[calc(100%-var(--toc-width))]',
        )}
      >
        <H1 className="font-bold first-letter:uppercase">{title}</H1>
        <P className="font-bold first-letter:uppercase">{description}</P>
      </div>

      <li
        className={cx(
          ' flex w-full flex-col justify-between bg-info-container text-on-info-container shadow-sm',
          '@[512px]/docs-header:w-[--toc-width]',
        )}
      >
        <div className="flex flex-col gap-sm px-lg py-md">
          <div className="flex w-full items-baseline gap-sm">
            <span className="w-sz-64 font-bold">Name</span>
            <p className="font-mono text-body-2">{name}</p>
          </div>
          <div className="flex w-full items-center gap-sm">
            <span className="w-sz-64 font-bold">Version</span>
            <Tag intent="main" design="outlined">
              {version}
            </Tag>
          </div>
          <div className="flex w-full items-center gap-sm">
            <span className="w-sz-64 font-bold">License</span>
            <span className="capitalise font-mono text-body-2">{license}</span>
          </div>
        </div>
        <span className={cx('flex justify-start gap-md px-lg py-md')}>
          <a
            className="text-[#CB3837]"
            href={`https://www.npmjs.com/package/${name}/v/${version}`}
            target="_blank"
          >
            <Icon size="md" label="npm">
              <Npm />
            </Icon>
          </a>
          <a className="text-on-surface" href={packageUrl} target="_blank">
            <Icon size="md" label="github">
              <GitHub />
            </Icon>
          </a>
          <a href={bugReportUrl} target="_blank" className="w-fit text-alert">
            <Icon size="md" label="Reported Issues">
              <WarningFill />
            </Icon>
          </a>
          <a
            href={`https://github.com/adevinta/spark/issues/new?assignees=&labels=component,${title}&projects=4&template=bug-report.yml`}
            target="_blank"
            className="w-fit text-error"
          >
            <Icon size="md" label="Report a bug">
              <Bug />
            </Icon>
          </a>
        </span>
      </li>
    </header>
  )
}
