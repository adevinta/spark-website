import Link from 'next/link'
import { Tabs } from '@spark-ui/tabs'
import { useRouter } from 'next/router'

interface Props {
  componentName: string
  componentTab: string
}

const getRoute = ({componentName, componentTab}: {componentName?: string, componentTab?: string}) => `/${['docs', 'components', componentName, componentTab].filter(slug => !!slug).join('/')}`

export const ComponentMenu = ({ componentName, componentTab }) => {
  const router = useRouter()

  const path = {
    usage: getRoute({componentName}),
    props: getRoute({componentName, componentTab: 'props'}),
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
