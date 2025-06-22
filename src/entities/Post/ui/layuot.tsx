interface Props {
  title: string
  text: string
}

function Layout({ title, text }: Props) {
  return (
    <div className="text-white pt-[20px]">
      <h2 className="text-center text-xl underline">{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Layout