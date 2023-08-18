import React, { FC } from "react"
import Container from "components/Container/Container"
import Column from "./FooterComponents/Column"
import styles from "./Footer.module.css"
import {
  helpColumn,
  shopColumn,
  getInColumn,
  socialMedia,
  downApp,
} from "./FooterData/FooterData"

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Column
          columnTitle='Help'
          columnData={helpColumn}
          className={styles.column}
        />
        <Column
          columnTitle='Shop'
          columnData={shopColumn}
          className={styles.column}
        />
        <Column
          columnTitle='Get in touch'
          columnData={getInColumn}
          socialMedia={socialMedia}
          className={styles.column}
          socialClassName={styles.socialBox}
        />
        <Column
          columnData={downApp}
          className={styles.column}
          columnTitle='Download our app'
        />
      </Container>
      <span
        style={{
          display: "inline-block",
          width: "100%",
          height: "1px",
          background: "#fff",
          opacity: "0.6",
        }}></span>
      <Container>
        <span>© All rights reserved.</span>
        <a href='#'>Go to top</a>
      </Container>
    </footer>
  )
}

export default Footer
