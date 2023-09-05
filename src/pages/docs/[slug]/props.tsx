import { NextSeo } from "next-seo";
import { Doc, allDocs } from "contentlayer/generated";

import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutSideNav } from "@/components/Layout/LayoutSideNav";
import { ComponentMenu } from "@/components/Shared/ComponentMenu";
import { MDXComponent } from "@/components/MDX/MDXComponent";
import { ComponentProps } from "@/components/Shared/ComponentProps";
import { H1 } from "@/components/MDX/H1";

interface DocDetailPropsPageProps {
  doc: Doc;
}

const DocDetailPropsPage = ({ doc }: DocDetailPropsPageProps) => {
  return (
    <>
      <NextSeo title={doc.title} />

      <LayoutHeader />

      <LayoutContainer className="flex gap-2xl" asChild>
        <main>
          <LayoutSideNav />

          <div className="flex-1 min-w-0">
            <H1>{doc.title}</H1>
            <p>{doc.description}</p>
            <ComponentMenu slug={doc.slug} />
            <ComponentProps docgen={doc.docgen} />
            <MDXComponent
              code={doc.body.code}
              globals={{ examples: doc.examples, slug: doc.slug }}
            />
          </div>
        </main>
      </LayoutContainer>
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

  if (!doc || !doc.docgen) {
    return { notFound: true };
  }

  return {
    props: { doc },
  };
}

export default DocDetailPropsPage;
