import { FC } from "react"
import { singleProduct } from "./SingleProductData"
import "./styles/general.css"
import Container from "components/Container/Container"
import SingleProductTabs from "./components/SingleProductTabs"

const AboutProduct = () => {
  return (
    <>
      <Container>
        <div className='title-section'>
          <h1>{singleProduct.title}</h1>
          <div>
            <span>Art.No. </span>
            <span>{singleProduct.article}</span>
          </div>
        </div>

        <SingleProductTabs />
      </Container>
    </>
  )
}

export default AboutProduct
