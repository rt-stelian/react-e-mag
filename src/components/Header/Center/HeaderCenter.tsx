import { Logo, SearchForm, CartWhishList } from "./Components"
import { navItemsCenter } from "../navData/navDataLinks"
import Container from "../../Container/Container"
import styles from "./HeaderCenter.module.css"
import navStyles from "./Components/Style.module.css"
import NavLinks from "../NavComponent/NavLinks"
const HeaderCenter = () => {
  return (
    <div className={styles.headerCenter}>
      <Container>
        <Logo />
        <NavLinks
          className={navStyles.navLinks}
          navItems={navItemsCenter}
          linkItemClass={navStyles.linkItem}
        />
        <SearchForm />
        <CartWhishList />
      </Container>
    </div>
  )
}

export default HeaderCenter
