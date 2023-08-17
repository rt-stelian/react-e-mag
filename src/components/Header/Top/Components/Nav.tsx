import styles from "./Style.module.css"
interface NavItem {
  id: number
  text: string
  link: string
}
const Nav = () => {
  const navItems: NavItem[] = [
    { id: 1, text: "Delivery & returns", link: "#" },
    { id: 2, text: "Track order", link: "#" },
    { id: 3, text: "Blog", link: "#" },
    { id: 4, text: "Contacts", link: "#" },
  ]

  return (
    <nav>
      <ul className={styles.nav}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
