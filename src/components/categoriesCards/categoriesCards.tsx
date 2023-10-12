import React, { FC } from "react"
import SingleCard from "./SingleCard"
import styles from "./CategoriesCards.module.css"
import Container from "components/Container/Container"
const CategoriesCards: FC = () => {
  return (
    <Container>
      <section className={styles.categoriesCards}>
        <SingleCard />
      </section>
    </Container>
  )
}

export default CategoriesCards
