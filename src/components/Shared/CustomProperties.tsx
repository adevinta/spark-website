import { useState } from 'react'
import { cx } from 'class-variance-authority'
import { Kbd } from '@spark-ui/kbd'
import { Input } from '@spark-ui/input'

import { useCustomProperties } from '@/hooks/useCustomProperties'

export const CustomProperties = ({ className }: { className?: string }) => {
  const [customProperties, { set }] = useCustomProperties()
  const [a, setA] = useState<{ [value: string]: string }>({ [1]: 'a' })

  const generateHandleChange = tokenName => event => set(tokenName, event.target.value)
  return (
    <div className={cx('flex w-full flex-col gap-md', className)}>
      {Object.entries(customProperties)
        // .filter(([tokenName]) => tokenName === '--colors-basic')
        .map(([tokenName, tokenValue]) => {
          return (
            <div key={tokenName} className="flex items-center">
              <Kbd>{tokenName}</Kbd>:{' '}
              <Input
                className="grow"
                value={tokenValue}
                aria-label={tokenName}
                onChange={generateHandleChange(tokenName)}
              />
            </div>
          )
        })}
    </div>
  )
}
