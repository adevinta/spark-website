import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'

export interface DocsFooterProps extends ComponentPropsWithoutRef<'div'> {
  previous: string | null
  next: string | null
  docUrl: string
}

export const DocsFooter = ({ className, previous, next, docUrl, ...others }: DocsFooterProps) => {
  return (
    <>
      <div className="flex w-full grow justify-center py-lg">
        <Link
          className="text-caption capitalize leading-6 hover:text-main"
          href={docUrl}
          target="_blank"
        >
          Edit this page on Github.
        </Link>
      </div>
      <div
        className={cx(
          'mb-3xl mt-lg flex h-sz-64 w-full flex-row justify-between border-t-sm border-neutral-container pt-lg',
          className,
        )}
        {...others}
      >
        <div className="flex w-2/4 flex-col items-start justify-between">
          {previous && (
            <>
              <span className="text-caption">Previous</span>
              <Link
                className="text-subhead capitalize leading-6 hover:text-main"
                href={`/docs/${previous}`}
              >
                {previous}
              </Link>
            </>
          )}
        </div>
        <div className="flex w-2/4 flex-col items-end">
          {next && (
            <>
              <span className="text-caption">Next</span>
              <Link
                className="text-subhead capitalize leading-6 hover:text-main"
                href={`/docs/${next}`}
              >
                {next}
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}
