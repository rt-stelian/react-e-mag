import { AiOutlineUser } from "react-icons/ai"
import React, { FC } from "react"
import { SlGlobe } from "react-icons/sl"
import { FiChevronDown } from "react-icons/fi"
import styles from "./Style.module.css"

type LanguageOption = {
  code: string
  name: string
  currency: string
}

const languageOptions: LanguageOption[] = [
  { code: "ro", name: "Ro", currency: "ron" },
  { code: "fra", name: "Fra", currency: "eur" },
]
const Login: FC = () => {
  return (
    <div style={{ display: "flex", gap: 50 }}>
      <div className={`${styles.langSwitcher} langswitcher`}>
        <span className={styles.switcherGlobus}>
          <SlGlobe />
        </span>
        <span>Eng / usd</span>
        <span className={styles.switcherChewron}>
          <FiChevronDown />
        </span>
        <div className={styles.switcherDropdown}>
          <ul>
            {languageOptions.map((option) => (
              <li key={option.code}>
                <span>{`${option.name} / ${option.currency}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{ fontSize: 16, display: "flex" }}>
          <AiOutlineUser />
        </span>
        <a onClick={(e) => e.preventDefault()} href='#'>
          Log in
        </a>
        <span> / </span>
        <a onClick={(e) => e.preventDefault()} href='#'>
          Register
        </a>
      </div>
    </div>
  )
}

export default Login
