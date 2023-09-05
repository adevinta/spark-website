import { NextSeo } from "next-seo";
import { Doc, allDocs } from "contentlayer/generated";

import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { MDXComponent } from "@/components/MDX/MDXComponent";
import { LayoutSideNav } from "@/components/Layout/LayoutSideNav";
import { ComponentMenu } from "@/components/Shared/ComponentMenu";
import { H1 } from "@/components/MDX/H1";

interface DocDetailPageProps {
  doc: Doc;
}

const DocDetailPage = ({ doc }: DocDetailPageProps) => {
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />

      <LayoutHeader />

      <LayoutContainer className="flex gap-2xl" asChild>
        <main>
          <LayoutSideNav />

          <div className="flex-1 min-w-0">
            <H1>{doc.title}</H1>
            <p>{doc.description}</p>
            <ComponentMenu slug={doc.slug} />
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

  if (!doc) {
    return { notFound: true };
  }

  return {
    props: { doc },
  };
}

export default DocDetailPage;
