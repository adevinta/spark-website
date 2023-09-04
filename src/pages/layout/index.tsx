import { Layout } from '@/components/Layout'

export default function IndexPage() {
  return (
    <Layout>
      <Layout.Header>
        <header className="bg-background-variant" contentEditable suppressContentEditableWarning>
          header
        </header>
      </Layout.Header>
      <Layout.LeadingSidebar>
        <div
          className="bg-main-variant text-on-main-variant"
          contentEditable
          suppressContentEditableWarning
        >
          leading sidebar
        </div>
      </Layout.LeadingSidebar>
      <Layout.Content>
        <div className="bg-main text-on-main" contentEditable suppressContentEditableWarning>
          content
        </div>
      </Layout.Content>
      <Layout.TrailingSidebar>
        <div
          className="bg-main-variant text-on-main-variant"
          contentEditable
          suppressContentEditableWarning
        >
          trailing sidebar
        </div>
      </Layout.TrailingSidebar>
      <Layout.Footer>
        <footer className="bg-background-variant" contentEditable suppressContentEditableWarning>
          footer
        </footer>
      </Layout.Footer>
    </Layout>
  )
}
