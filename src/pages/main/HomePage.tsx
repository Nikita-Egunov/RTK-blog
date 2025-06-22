import { RenderPosts } from "../../features";
import { Header } from "../../widgets";

export function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-lime-600 px-[10px]">
        <RenderPosts />
      </main>
    </>
  )
}