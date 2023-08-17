import { FC } from "react"
import HeaderCenter from "./Center/HeaderCenter"
import HeaderTop from "./Top/HeaderTop"
import HeaderBottom from "./Bottom/HeaderBottom"

const Header: FC = () => {
  return (
    <header className='header'>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
    </header>
  )
}

export default Header
