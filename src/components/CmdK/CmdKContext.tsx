import { createContext, useContext, Dispatch, SetStateAction } from 'react'

const CmdKContext = createContext<{
  isOpen: boolean
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}>({ isOpen: false, setIsOpen: undefined })

export const useCmdK = () => useContext(CmdKContext)

export const CmdKProvider = CmdKContext.Provider
