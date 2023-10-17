import React, { useState } from "react"
import { FiShoppingCart } from "react-icons/fi"
import { PiCoatHanger, PiHeart } from "react-icons/pi"
import { singleProduct } from "../SingleProductData"
import ButtonVide from "UI/buttons/ButtonVide"
import ButtonGreen from "UI/buttons/ButtonGreen"
import { HiChevronDown, HiChevronUp } from "react-icons/hi"
import "../styles/filters-section.css"
const FiltersSection = () => {
  // const toggleColor = (e: MouseEvent | null) => {
  //   const colorLabels = document.querySelectorAll(".color-selectors > label")
  //   colorLabels.forEach((el) => el.classList.remove("active"))
  //   e.target.className.add("active")
  // }
  const [selectedColor, setSelectedColor] = useState("")
  function toggleColor(e: React.MouseEvent<HTMLInputElement>) {
    setSelectedColor(e.currentTarget.id)
  }
  return (
    <>
      <div className='price-section'>
        <div className='price'>
          <span className='normal-price'>{singleProduct.price}</span>
          <span className='old-price'>$5.00</span>
          <span className='discount'>{singleProduct.discount}</span>
        </div>
        <div className='reviews'>reviews</div>
      </div>
      <div className='color-filter'>
        <span>Color</span>
        <div className='color-selectors'>
          <form action='#'>
            {singleProduct.colors.map((color, i) => (
              <>
                <input
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    toggleColor(e)
                  }
                  key={color}
                  type='radio'
                  name='select-color'
                  id={color}
                />
                <label
                  style={{
                    background: color,
                  }}
                  key={`label${color}`}
                  className={`label-${color}`}
                  htmlFor={color}></label>
              </>
            ))}
          </form>
          <span>{selectedColor || "select your color"}</span>
        </div>
      </div>
      <div className='size-selector'>
        <form action='#'>
          <label htmlFor='size'>Size</label>
          <select name='Size' id='size'>
            {singleProduct.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </form>
        <button>
          <PiCoatHanger />
          <span>Size chart</span>
        </button>
      </div>
      <div className='quantity-section'>
        <form action='#'>
          <input type='number' defaultValue={1} />
          <div>
            <HiChevronUp />
            <HiChevronDown />
          </div>
        </form>
        <ButtonGreen className='' link='#'>
          <FiShoppingCart />
          <span>add to cart</span>
        </ButtonGreen>

        <ButtonVide className='' link='#'>
          <PiHeart />
          <span>add to favourite</span>
        </ButtonVide>
      </div>
    </>
  )
}

export default FiltersSection
