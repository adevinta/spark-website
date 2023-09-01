import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export default function IndexPage() {
  return (
    <>
      <>
        <Header />

        <Container className="my-xl flex flex-col gap-sm">
          <h1 className="text-display-2">Home</h1>
        </Container>
      </>
    </>
  )
}
