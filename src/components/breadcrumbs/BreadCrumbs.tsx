import React from "react"
import styles from "./BreadCrumbs.module.css"
import { GoChevronRight } from "react-icons/go"
import { AiOutlineHome } from "react-icons/ai"
import Container from "components/Container/Container"

const BreadCrumbs = () => {
  return (
    <div className={styles.breadCrumbs}>
      <Container>
        <div className={styles.breadCrumbsLink}>
          <AiOutlineHome className={styles.breadCrumbsHome} />
          <span>BreadCrumbs</span>
          <span className={styles.breadCrumbsChevron}>
            <GoChevronRight />
          </span>
          <span>BreadCrumbs</span> <GoChevronRight />
          <span>BreadCrumbs</span>
        </div>
      </Container>
    </div>
  )
}

export default BreadCrumbs
