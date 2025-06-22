import { useGetPostsQuery } from "../../../app/api"
import { Post } from "../../../entities"

function Layout() {
  const { data, isLoading, error } = useGetPostsQuery()

  if (isLoading) return (
    <div className="h-[100vh] flex justify-center items-center">
      <span className="animate-spin border border-b-white border-neutral-400 w-[20px] aspect-square block rounded-full"></span>
    </div>
  )
  if (error || !data) return (
    <div className="h-[100vh] flex justify-center items-center">
      <p className="text-white text-center">Извините, у нас ошибка, так что не сегодня</p>
    </div>
  )

  return (
    <div className="">
      {data.map((post) => {
        return (
          <Post text={post.body} title={post.title} key={post.id}/>
        )
      })}
    </div>
  )
}

export default Layout
