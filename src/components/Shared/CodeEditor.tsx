import { ComponentProps } from 'react'
import { LiveProvider } from 'react-live'
import { themes } from 'prism-react-renderer'

import { LivePreview } from './LivePreview'
import { LiveEditor, LiveEditorProps } from './LiveEditor'
import { CodeCopyButton } from './CodeCopyButton'

export interface CodeEditorProps
  extends ComponentProps<typeof LiveProvider>,
    Pick<LiveEditorProps, 'size'> {}

export const CodeEditor = ({ code: codeProp, size, ...others }: CodeEditorProps) => {
  const code = codeProp?.trim() || ''

  return (
    <LiveProvider theme={themes.vsDark} code={code} {...others}>
      <div className="my-xl grid grid-cols-1 overflow-hidden rounded-md text-body-2 shadow-xl md:grid-cols-2">
        <div className="relative">
          <LiveEditor size={size} />

          <CodeCopyButton className="absolute right-md top-md shadow-md" code={code} />
        </div>

        <LivePreview />
      </div>
    </LiveProvider>
  )
}
