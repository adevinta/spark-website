import Link from "next/link";
import { Tabs } from "@spark-ui/tabs";
import { useRouter } from "next/router";

interface Props {
  slug: string;
}

export const ComponentMenu = ({ slug }) => {
  const router = useRouter();

  const path = {
    usage: "/docs/[slug]",
    props: `/docs/[slug]/props`,
  };

  console.log("SLUG", path, router.asPath, router.pathname);

  return (
    <Tabs
      defaultValue={path.usage}
      intent="main"
      value={router.pathname}
      className="my-lg"
    >
      <Tabs.List>
        <Tabs.Trigger value={path.usage} asChild>
          <Link
            href={{
              pathname: path.usage,
              query: { slug },
            }}
          >
            Usage
          </Link>
        </Tabs.Trigger>
        <Tabs.Trigger value={path.props} asChild>
          <Link
            href={{
              pathname: path.props,
              query: { slug },
            }}
          >
            Props
          </Link>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs>
  );
};
