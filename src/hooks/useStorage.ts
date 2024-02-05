import { useCallback, useState, useEffect } from 'react'

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, 'localStorage')
}

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, 'sessionStorage')
}

function useStorage(key, defaultValue, storeType: 'localStorage' | 'sessionStorage') {
  const storageObject =
    typeof window !== 'undefined'
      ? window[storeType]
      : {
          getItem(key: string): string | null {
            return null
          },
          setItem(key: string, value: string) {},
          removeItem(key: string) {},
        }

  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof defaultValue === 'function') {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    if (window) {
      if (value === undefined) return storageObject.removeItem(key)
      storageObject.setItem(key, JSON.stringify(value))
    }
  }, [key, value, storageObject])

  const remove = useCallback(() => {
    setValue(undefined)
  }, [])

  return [value, setValue, remove]
}
