import { NextSeo } from "next-seo";
import { Doc, allDocs } from "contentlayer/generated";

import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutSideNav } from "@/components/Layout/LayoutSideNav";
import { LayoutTableOfContent } from "@/components/Layout/LayoutTableOfContent";
import { MDXComponent } from "@/components/MDX/MDXComponent";

interface DocDetailPageProps {
  doc: Doc;
}

const DocDetailPage = ({ doc }: DocDetailPageProps) => {
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

          <LayoutTableOfContent key={doc.slug} />
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
