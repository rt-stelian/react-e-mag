import { PiHeart } from "react-icons/pi"
import styles from "./AddToWhishList.module.css"
import { FC } from "react"

const AddToWhishList: FC = () => {
  return (
    <button className={styles.AddToWhishList} title='add to whishlist'>
      <PiHeart />
    </button>
  )
}

export default AddToWhishList
