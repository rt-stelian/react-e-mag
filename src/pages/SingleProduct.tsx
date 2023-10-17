import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"
import MainTag from "components/SemanticComponents/MainTag"
import BreadCrumbs from "components/breadcrumbs/BreadCrumbs"
import AboutProduct from "components/singleProductComponents/AboutProduct"
import Gallery from "components/singleProductComponents/components/Gallery"
import React from "react"

const SingleProduct = () => {
  return (
    <div className='wrapper'>
      <Header />
      <MainTag>
        <BreadCrumbs />
        <AboutProduct />
      </MainTag>
      <Footer />
    </div>
  )
}

export default SingleProduct
