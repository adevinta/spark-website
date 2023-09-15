import { cx } from 'class-variance-authority'

import { TableOfContent, TableOfContentProps } from '@/components/Shared/TableOfContent'

export type DocsTableOfContentProps = TableOfContentProps

export const DocsTableOfContent = ({ className, ...others }: DocsTableOfContentProps) => {
  return (
    <TableOfContent
      className={cx(className, [
        'hidden xl:block',
        'sticky top-[var(--header-height)]',
        'mt-2xl max-h-[calc(100vh-var(--header-height))] w-sz-256 min-w-sz-256 pt-3xl',
      ])}
      {...others}
    />
  )
}
