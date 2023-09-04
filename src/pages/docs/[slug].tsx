import { NextSeo } from "next-seo";
import { Doc, allDocs } from "contentlayer/generated";

import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutSideNav } from "@/components/Layout/LayoutSideNav";
import { DocsTableOfContent } from "@/components/Docs/DocsTableOfContent";
import { MDXComponent } from "@/components/MDX/MDXComponent";

interface DocsDetailPageProps {
  doc: Doc;
}

const DocsDetailPage = ({ doc }: DocsDetailPageProps) => {
  return (
    <>
      <NextSeo title={doc.title} />

      <LayoutHeader />

      <LayoutContainer className="flex gap-2xl" asChild>
        <main>
          <LayoutSideNav />

          <div className="flex-1 min-w-0">
            <MDXComponent
              code={doc.body.code}
              globals={{ examples: doc.examples }}
            />
          </div>

          <DocsTableOfContent headings={doc.headings} />
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

export default DocsDetailPage;
