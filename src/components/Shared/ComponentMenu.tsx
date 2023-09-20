import Link from 'next/link'
import { Tabs } from '@spark-ui/tabs'
import { useRouter } from 'next/router'

interface Props {
  slug: string
}

export const ComponentMenu = ({ slug }) => {
  const router = useRouter()

  const path = {
    usage: `/docs/components/${slug}`,
    props: `/docs/components/${slug}/props`,
  }

  return (
    <Tabs defaultValue={path.usage} intent="main" value={router.asPath} className="my-lg">
      <Tabs.List>
        <Tabs.Trigger value={path.usage} asChild>
          <Link className="px-xl" href={path.usage}>
            Usage
          </Link>
        </Tabs.Trigger>
        <Tabs.Trigger value={path.props} asChild>
          <Link className="px-xl" href={path.props}>
            Props
          </Link>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs>
  )
}
