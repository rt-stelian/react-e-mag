import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"

import { images } from "../../../assets/img/singleProducts/basic-hooded-sweatshirt-in-pink"
import "../styles/gallery-swiper-styles.css"
import ArrowRight from "UI/slider-arrows/RoundArrowR"
import ArrowLeft from "UI/slider-arrows/RoundArrowL"

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const imageKeys = Object.keys(images) as Array<keyof typeof images>

  return (
    <div className='gallery-swiper'>
      <Swiper
        //@ts-ignore
        spaceBetween={10}
        navigation={{
          prevEl: ".gallery-prev",
          nextEl: ".gallery-next",
        }}
        loop
        thumbs={{
          //@ts-ignore
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='gallery-main'>
        {imageKeys.map((imageName) => (
          <SwiperSlide key={imageName}>
            <img src={images[imageName]} alt={imageName} />
          </SwiperSlide>
        ))}
        <div className='gallery-prev'>
          <ArrowLeft />
        </div>
        <div className='gallery-next'>
          <ArrowRight />
        </div>
      </Swiper>
      <Swiper
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        //@ts-ignore
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='gallery-thumbs'>
        {imageKeys.map((imageName) => (
          <SwiperSlide key={imageName}>
            <img src={images[imageName]} alt={imageName} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Gallery
