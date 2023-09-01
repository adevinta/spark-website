import React, { FC } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { InlineCode } from './InlineCode'
import { CodeCopyButton } from '../Shared/CodeCopyButton'

interface Props {
  className: string
  children: string
}

export const Code: FC<Props> = ({ children, className }) => {
  if (!className) {
    return <InlineCode>{children}</InlineCode>
  }

  const language = className.replace(/language-/, '')
  const code = children.replace(/\n$/, '')

  return (
    <div className="relative">
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="my-lg max-w-full overflow-auto rounded-md p-lg font-monospace text-body-2 shadow-xl"
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      <CodeCopyButton className="absolute right-md top-md shadow-md" code={code} />
    </div>
  )
}
