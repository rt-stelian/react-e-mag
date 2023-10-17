import React from "react"
import { FiShoppingCart } from "react-icons/fi"
import { PiHeart } from "react-icons/pi"
import styles from "./Style.module.css"

const CartWhishList = () => {
  return (
    <div className={styles.CartContainer}>
      <div className={styles.whish}>
        <PiHeart />
        <span>6</span>
      </div>
      <span></span>
      <div className={styles.cart}>
        <FiShoppingCart />
        <span className={styles.cartCount}>5</span>
      </div>
    </div>
  )
}

export default CartWhishList
