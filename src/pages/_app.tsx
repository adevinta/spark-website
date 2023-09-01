import '../styles/globals.css'
import { Nunito_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

import { AppProps } from 'next/app'
import {RouteProgress} from "@/components/Shared/RouteProgress";
import { DefaultSeo } from '@/components/Shared/DefaultSeo'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={nunito.className}>
        <DefaultSeo />
        <RouteProgress />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default App
