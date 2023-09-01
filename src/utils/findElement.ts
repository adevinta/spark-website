import { Children, isValidElement, ReactNode } from 'react'
import { getDisplayName } from '@/utils/getDisplayName'

export const findElement =
  (children: ReactNode) =>
  (...values: string[]) => {
    const validChildren = Children.toArray(children).filter(isValidElement)

    return validChildren.find(child => {
      const displayName = getDisplayName(child)

      return values.includes(displayName || '')
    })
  }
