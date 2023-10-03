import { cx } from 'class-variance-authority'
import { Root as ScrollArea, Viewport, Scrollbar, Thumb, Corner } from '@radix-ui/react-scroll-area'

import { LayoutNav, LayoutNavProps } from './LayoutNav'

export type LayoutSideNavProps = LayoutNavProps

export const LayoutSideNav = ({ className, ...others }: LayoutSideNavProps) => {
  return (
    <div
      className={cx(
        'hidden md:block',
        'sticky top-[--sz-64] bottom-[--sz-64] hidden h-[calc(100vh-var(--sz-64)-var(--sz-64))] shrink-0 basis-[--sz-256] py-sm pr-sm',
        className,
      )}
    >
      <ScrollArea asChild className="h-full overflow-hidden">
        <div>
          <Viewport className="h-full w-full pr-md">
            <LayoutNav {...others} />
          </Viewport>
          <Scrollbar
            orientation="vertical"
            forceMount
            className="flex touch-none select-none bg-basic-container py-sm transition-colors duration-200 ease-out hover:bg-basic-container-hovered data-[orientation=horizontal]:h-sz-4 data-[orientation=vertical]:w-sz-4 data-[orientation=horizontal]:flex-col"
          >
            <Thumb
              className={cx([
                'relative flex-1 rounded-full bg-on-basic-container',
                'before:absolute before:content-[""]',
                'before:left-1/2 before:top-1/2 before:h-full before:min-h-sz-44 before:w-full before:min-w-sz-44 before:-translate-x-1/2 before:-translate-y-1/2',
              ])}
            />
          </Scrollbar>
          <Corner className="bg-main" />
        </div>
      </ScrollArea>
    </div>
  )
}
