import '../styles/globals.css'
import { Nunito_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { cx } from 'class-variance-authority'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

import { AppProps } from 'next/app'
import { LayoutProgress } from '@/components/Layout/LayoutProgress'
import { DefaultSeo } from '@/components/Shared/DefaultSeo'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={cx(nunito.className, 'overflow-x-hidden')}>
        <DefaultSeo />
        <LayoutProgress />
        <div className="w-full lg:w-[100dvw]">
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
