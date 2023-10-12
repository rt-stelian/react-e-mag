import React, { FC } from "react"
import styles from "./CategoriesCards.module.css"
import { CategoriesCardsData } from "./CategoriesCardsData"
const SingleCard: FC = () => {
  return (
    <>
      {CategoriesCardsData.map((item) => (
        <div key={item.link} className={styles.singleCard}>
          <a
            className={styles.cardImg}
            href={item.link}
            style={{ backgroundImage: `url(${item.img})` }}></a>
          <a className={`${styles.cardTitle}  small-titles`} href={item.link}>
            {item.title}
          </a>
        </div>
      ))}
    </>
  )
}

export default SingleCard
