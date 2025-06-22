import { Logo } from "../../../shared";
import { RightText } from "./RightText";

function Layout() {
  return (
    <header className="flex justify-between py-[10px] bg-lime-700 px-[20px]">
      <Logo />
      <RightText />
    </header>
  )
}

export default Layout