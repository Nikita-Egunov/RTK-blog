import { Logo } from "../../../shared";
import { RightText } from "./RightText";

function Layout() {
  return (
    <header className="flex justify-between py-[10px] bg-lime-700 px-[20px] sticky top-0 left-0">
      <Logo />
      <RightText />
    </header>
  )
}

export default Layout