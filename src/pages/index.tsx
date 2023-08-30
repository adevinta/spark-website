import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";

export default function IndexPage() {
  return (
    <>
      <LayoutHeader />

      <LayoutContainer className="flex flex-col gap-sm my-xl" asChild>
        <main>
          <h1 className="text-display-2">Home</h1>
        </main>
      </LayoutContainer>
    </>
  );
}
