import { DefaultSeo as DefaultSeoPrimitive } from 'next-seo'
import { useRouter } from 'next/router'

export const DefaultSeo = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? '/'
  const siteName = 'SparkUI'
  const router = useRouter()
  const canonical = url.concat(router.asPath)

  return (
    <DefaultSeoPrimitive
      openGraph={{
        type: 'website',
        locale: 'en',
        url: canonical,
        images: [{ url: '/og-logo.png' }],
        siteName,
      }}
      canonical={canonical}
      titleTemplate={`%s | ${siteName}`}
      defaultTitle={siteName}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      themeColor="#ffffff"
      additionalLinkTags={[
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
      ]}
    />
  )
}
