import React from "react"
import Logo from "./Components/Logo"
import Container from "../../Container/Container"
import styles from "./HeaderCenter.module.css"
import NavLinks from "./Components/NavLinks"
import SearchForm from "./Components/SearchForm"
import CartWhishList from "./Components/CartWhishList"
const HeaderCenter = () => {
  return (
    <div className={styles.headerCenter}>
      <Container>
        <Logo />
        <NavLinks />
        <SearchForm />
        <CartWhishList />
      </Container>
    </div>
  )
}

export default HeaderCenter
