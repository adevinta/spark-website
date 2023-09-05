import { useRouter } from 'next/router'
import { LinkProps } from 'next/link'
import { useState, useEffect, ReactNode } from 'react'

export interface ActiveLinkProps extends LinkProps {
  children: (props: LinkProps & { isActive?: boolean }) => ReactNode
}

export const ActiveLink = ({ children, ...props }: ActiveLinkProps) => {
  const { asPath, isReady } = useRouter()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isReady) {
      const pathname = new URL((props.as || props.href) as string, location.href).pathname

      const current = new URL(asPath, location.href).pathname

      setIsActive(current.includes(pathname))
    }
  }, [asPath, isReady, props.as, props.href])

  return <>{children({ ...props, isActive })}</>
}
