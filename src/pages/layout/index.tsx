import { Layout } from "@/components/Layout";

export default function IndexPage() {
  return (
    <Layout>
      <Layout.TopBanner>
        <div className="bg-background" contentEditable>
          top banner
        </div>
      </Layout.TopBanner>
      <Layout.Header>
        <header className="bg-background-variant" contentEditable>
          header
        </header>
      </Layout.Header>
      <Layout.Hero>
        <div className="bg-basic text-on-basic" contentEditable>
          hero
        </div>
      </Layout.Hero>
      <Layout.LeadingPanel>
        <div
          className="bg-basic-container text-on-basic-container"
          contentEditable
        >
          leading panel
        </div>
      </Layout.LeadingPanel>
      <Layout.LeadingSidebar>
        <div className="bg-main-variant text-on-main-variant" contentEditable>
          leading sidebar
        </div>
      </Layout.LeadingSidebar>
      <Layout.Content>
        <div className="bg-main text-on-main" contentEditable>
          content
        </div>
      </Layout.Content>
      <Layout.TrailingSidebar>
        <div className="bg-main-variant text-on-main-variant" contentEditable>
          trailing sidebar
        </div>
      </Layout.TrailingSidebar>
      <Layout.TrailingPanel>
        <div
          className="bg-basic-container text-on-basic-container"
          contentEditable
        >
          trailing panel
        </div>
      </Layout.TrailingPanel>
      <Layout.Footer>
        <footer className="bg-background-variant" contentEditable>
          footer
        </footer>
      </Layout.Footer>
      <Layout.BottomBanner>
        <div className="bg-background" contentEditable>
          bottom banner
        </div>
      </Layout.BottomBanner>
    </Layout>
  );
}
