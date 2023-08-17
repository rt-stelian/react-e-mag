import { FC } from "react"
import { NavItem } from "components/Header/navData/navDataLinks"

interface NavLinksProps {
  className: string
  navItems: NavItem[]
  linkItemClass?: string
}

const NavLinks: FC<NavLinksProps> = ({
  className,
  navItems,
  linkItemClass,
}) => {
  return (
    <nav>
      <ul className={className}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.link} className={linkItemClass}>
              {item.title}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
