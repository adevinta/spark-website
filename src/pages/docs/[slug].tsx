import { Container } from "src/components/Container";
import { Doc, allDocs } from "contentlayer/generated";
import { Header } from "@/components/Header";
import { MDXComponent } from "@/components/MDX/MDXComponent";
import { SideNav } from "@/components/SideNav";
import { SideNavLink } from "@/components/SideNavLink";
import Link from "next/link";
import { SideNavSeparator } from "@/components/SideNavSeparator";
import { Fragment } from "react";

interface DocDetailPageProps {
  categories: Map<string, Array<Doc>>;
  doc: Doc;
}

const DocDetailPage = ({ categories, doc }: DocDetailPageProps) => {
  return (
    <>
      <Header />

      <main>
        <Container className="flex gap-2xl">
          <SideNav className="hidden md:block py-lg">
            {Object.keys(categories).map((category) => {
              const docs = categories[category];

              return (
                <Fragment key={category}>
                  <SideNavSeparator>{category}</SideNavSeparator>

                  {docs.map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/docs/${doc.slug}`}
                      passHref
                      legacyBehavior
                    >
                      <SideNavLink>{doc.title}</SideNavLink>
                    </Link>
                  ))}
                </Fragment>
              );
            })}
          </SideNav>

          <div className="flex-1 min-w-0">
            <MDXComponent
              code={doc.body.code}
              globals={{ examples: doc.examples }}
            />
          </div>
        </Container>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: allDocs.map((doc) => ({
      params: { slug: doc.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const doc = allDocs.find((doc) => doc.slug === slug);

  if (!doc) {
    return { notFound: true };
  }

  const categories = allDocs.reduce((categories, doc) => {
    const category = doc.category;

    return {
      ...categories,
      [category]: Array.isArray(categories[category])
        ? [...categories[category], doc]
        : [doc],
    };
  }, {});

  return {
    props: { categories, doc },
  };
}

export default DocDetailPage;
