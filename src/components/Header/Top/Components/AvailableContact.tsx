import React from "react"
import styles from "./Style.module.css"

const AvailableContact = () => {
  return (
    <div className={`${styles.contact}`}>
      <span>Available 24/7 at </span>
      <a href='tel:4055550128'> (405) 555-0128</a>
    </div>
  )
}

export default AvailableContact
