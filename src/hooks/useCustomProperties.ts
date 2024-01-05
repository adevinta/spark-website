import { useEffect, useState, useRef, useReducer } from 'react'
import { CSSGlobalVariables } from '../utils/CSSGlobalVariables'

import { useMountedState } from '@spark-ui/use-mounted-state'

const initialState = {}

interface Actions {
  data?: { [argument: string]: string }
  type?: 'UPDATE'
}
function reducer(state: { [argument: string]: string }, { data, type }: Actions = {}) {
  switch (type) {
    case 'UPDATE':
      debugger
      return { ...state, ...data }
    default:
      return state
  }
}
export const useCustomProperties = (
  {
    filter,
    autoprefix,
    normalize,
  }: {
    filter?: string | undefined
    autoprefix?: boolean | undefined
    normalize?: ((name: string) => string) | undefined
  } = {},
  callback: (customProperties: { [key: string]: string }) => void = () => {},
) => {
  const isMounted = useMountedState()


  const [tokens, dispatch] = useReducer(reducer, initialState)
  const { current: initialTokens } = useRef<{ [key: string]: string }>(tokens)
  const variables = useRef(tokens)
  const updateTokens = variables => {
    debugger
    callback(variables)
  }

  const update = newData => {
    return dispatch({ data: newData, type: 'UPDATE' })
  }

  useEffect(() => {
    if (isMounted()) {
      variables.current = new CSSGlobalVariables({
        filter,
        autoprefix,
        normalize,
        callback: updateTokens,
      })
      update(variables.current)
    }
  }, [])
  return [
    tokens,
    {
      set: (tokenName: string, tokenValue: string) => {
        variables.current[tokenName] = tokenValue
        update({ ...(tokenName && { [tokenName]: tokenValue }) })
      },
      get: (tokenName: string) => tokens[tokenName],
      reset: (tokenName?: string) => {
        update({
          ...(tokenName ? { [tokenName]: initialTokens[tokenName] } : { ...initialTokens }),
        })
      },
    },
  ]
}
