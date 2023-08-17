import React, { FC } from "react"
import Container from "../../Container/Container"
import AvailableContact from "./Components/AvailableContact"
import styles from "../Header.module.css"
import LoginLangSwitch from "./Components/LoginLangSwitch"
import navStyles from "./Components/Style.module.css"
import { navItemsTop } from "../navData/navDataLinks"
import NavLinks from "../NavComponent/NavLinks"

const HeaderTop: FC = () => {
  return (
    <div className={styles.headerTop}>
      <Container>
        <AvailableContact />
        <NavLinks className={navStyles.nav} navItems={navItemsTop} />
        <LoginLangSwitch />
      </Container>
    </div>
  )
}

export default HeaderTop
