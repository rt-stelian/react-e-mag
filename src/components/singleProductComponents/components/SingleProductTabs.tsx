import React from "react"
import Gallery from "./Gallery"
import FiltersSection from "./FiltersSection"
import DeliveryReturn from "./DeliveryReturn"
import ButtonVide from "UI/buttons/ButtonVide"
import "../styles/tabs.css"

const SingleProductTabs = () => {
  return (
    <>
      <div className='tabs-title'>
        <ButtonVide className='active' children='General info' link='#' />
        <ButtonVide className='' children='Product details' link='#' />
        <ButtonVide className='' children='Reviews' link='#' />
      </div>
      <div className='gallery-filters-container'>
        <Gallery />
        <div className='filters-container'>
          <FiltersSection />
          <DeliveryReturn />
        </div>
      </div>
    </>
  )
}

export default SingleProductTabs
