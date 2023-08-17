import React, { FC } from "react"
import Container from "../../Container/Container"
import AvailableContact from "./Components/AvailableContact"
import styles from "../Header.module.css"
import Nav from "./Components/Nav"
import LoginLangSwitch from "./Components/LoginLangSwitch"

const HeaderTop: FC = () => {
  return (
    <div className={styles.headerTop}>
      <Container>
        <AvailableContact />
        <Nav />
        <LoginLangSwitch />
      </Container>
    </div>
  )
}

export default HeaderTop
