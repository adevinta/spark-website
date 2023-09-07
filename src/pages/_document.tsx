import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning className="bg-background text-on-background">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
