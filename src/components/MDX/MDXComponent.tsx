import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { CodeEditor } from '@/components/Shared/CodeEditor'
import { ComponentMenu } from '@/components/Shared/ComponentMenu'
import { ComponentProps } from '@/components/Shared/ComponentProps'
import { Raw } from '@/components/Shared/Raw'
import { DocHeader } from '@/components/Shared/DocHeader'
import { cx } from 'class-variance-authority'

import { H1 } from './H1'
import { H2 } from './H2'
import { H3 } from './H3'
import { Code } from './Code'
import { P } from './P'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code,
  inlineCode: H3,
  CodeEditor,
  ComponentMenu,
  ComponentProps,
  Raw,
  DocHeader,
}

export type MDXComponentProps = {
  code: string
  globals?: Record<string, unknown> | undefined
  className?: string
}

export const MDXComponent = ({ code, globals, className }: MDXComponentProps) => {
  const Component = useMDXComponent(code, { ...globals, React })

  return (
    <main className={cx('w-full flex-1 grow-0', className)}>
      <Component components={components} />
    </main>
  )
}
