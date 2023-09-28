import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import { MainBannerData } from "./MainBannerData"
import ButtonVide from "UI/buttons/ButtonVide"
import ButtonGreen from "UI/buttons/ButtonGreen"
import styles from "./MainBanner.module.css"

import "swiper/css/navigation"
import ArrowLeft from "UI/slider-arrows/RoundArrowL"
import ArrowRight from "UI/slider-arrows/RoundArrowR"
import Container from "components/Container/Container"

const MainBanner = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        loop
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<div class='${className}'> <span class='pag-number' >  ${
              index + 1
            }</span> </div>`
          },
        }}
        navigation={{
          prevEl: ".main-swiper-prev",
          nextEl: ".main-swiper-next",
        }}
        className='main-swiper'>
        {MainBannerData.map((item) => (
          <SwiperSlide
            key={item.link}
            className={styles.mainBanner}
            style={{ backgroundImage: `url(${item.img})`, height: 800 }}>
            <Container>
              <div className={styles.textBtnsContainer}>
                <h3>{item.suptitle}</h3>
                <h2>{item.title}</h2>
                <div className='btn-box'>
                  <ButtonVide children='Shop sale' link='#' />
                  <ButtonGreen children={item.btnTitle} link={item.link} />
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
        <div
          className={`${styles.arrows} ${styles.arrowLeft} main-swiper-prev `}>
          <ArrowLeft />
        </div>
        <div
          className={`${styles.arrows} ${styles.arrowRight} main-swiper-next`}>
          <ArrowRight />
        </div>
        <Container>
          <div className='custom-pagination'></div>
        </Container>
      </Swiper>
    </>
  )
}

export default MainBanner
