import '../styles/globals.css'
import { Nunito_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

import { AppProps } from 'next/app'
import { LayoutProgress } from '@/components/Layout/LayoutProgress'
import { DefaultSeo } from '@/components/Shared/DefaultSeo'
import { CmdKProvider, CmdKModal } from '@/components/CmdK'
import { useState } from 'react'

function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ThemeProvider>
      <div className={nunito.className}>
        <DefaultSeo />
        <LayoutProgress />
        <CmdKProvider value={{ isOpen, setIsOpen }}>
          <Component {...pageProps} />
          <CmdKModal />
        </CmdKProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
