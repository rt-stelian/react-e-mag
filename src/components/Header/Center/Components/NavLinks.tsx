import { FC } from "react"
import styles from "./Style.module.css"
interface NavItem {
  id: number
  title: string
  link: string
}
const NavLinks: FC = () => {
  const navItems: NavItem[] = [
    { id: 1, title: "Women", link: "#" },
    { id: 2, title: "Men", link: "#" },
    { id: 3, title: "Boys", link: "#" },
    { id: 4, title: "Girls", link: "#" },
    { id: 5, title: "Sale", link: "#" },
  ]

  return (
    <nav>
      <ul className={styles.navLinks}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.link} className={styles.linkItem}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
