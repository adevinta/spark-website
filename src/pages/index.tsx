import { NextSeo } from 'next-seo'

import { LayoutHeader } from '@/components/Layout/LayoutHeader'
import { useCmdK } from '@/components/CmdK'
import { CmdKTrigger } from '@/components/CmdK/CmdKTrigger'
import { Background } from '@/components/Background'

const boxShadow = [
  'inset 0 0 .1em .05em #FFFFFF',
  'inset 0 -1em 3em rgb(var(--colors-support))',
  'inset 1em 0 3em rgb(var(--colors-main))',
  'inset -1em 0 3em rgb(var(--colors-accent))',
  '0 0 .5em #FFFFFF',
  '2em 0em 1em .7em rgb(var(--colors-accent))',
  '-2em -.5em 1em .7em rgb(var(--colors-main))',
].join(',')

export default function IndexPage() {
  const { isOpen, setIsOpen } = useCmdK()
  return (
    <>
      <NextSeo title="Home" />

      <LayoutHeader />
      <Background />

      <main>
        <div className="absolute flex h-[calc(100dvh-64px)] w-full flex-col items-center justify-center">
          <span className="text-[3rem] font-[900] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] mix-blend-overlay">
            @spark-ui
          </span>
          <div>
            <CmdKTrigger isResponsive={false} />
          </div>
        </div>
      </main>
    </>
  )
}
