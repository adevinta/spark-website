import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'

export interface DocsFooterProps extends ComponentPropsWithoutRef<'div'> {
  previous: string | null
  next: string | null
  docUrl: string
}

export const DocsFooter = ({ className, previous, next, docUrl, ...others }: DocsFooterProps) => {
  const [previousCategory, previousName] = (previous || '').split('/')
  const [nextCategory, nextsName] = (next || '').split('/')
  return (
    <>
      <div className="flex w-full grow justify-center py-lg">
        <div>
          <Link
            className="text-caption capitalize leading-6 hover:text-main"
            href={docUrl}
            target="_blank"
          >
            Edit this page on Github.
          </Link>
        </div>
      </div>
      <div
        className={cx(
          'mb-3xl mt-lg flex h-sz-64 w-full flex-row justify-between border-t-sm border-neutral-container pt-lg',
          className,
        )}
        {...others}
      >
        <div>
          {previous && (
            <Link
              className="flex flex-col items-start justify-between pr-3xl text-subhead capitalize leading-6 hover:text-main"
              href={`/docs/${previousCategory}/${previousName}`}
            >
              <span className="text-caption">Previous</span>
              <span>{previousName}</span>
            </Link>
          )}
        </div>
        <div className="">
          {next && (
            <Link
              className="flex flex-col items-end justify-between pl-3xl text-subhead capitalize leading-6 hover:text-main"
              href={`/docs/${nextCategory}/${nextsName}`}
            >
              <span className="text-caption">Next</span>
              <span>{nextsName}</span>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
