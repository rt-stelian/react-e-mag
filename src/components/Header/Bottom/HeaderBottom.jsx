import { useRef } from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import styles from "./HeaderBottom.module.css"
import Container from "components/Container/Container"

const HeaderBottom = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const saleLinks = [
    {
      id: 1,
      text: "Up to 50% Off.",
      linkText: "Shop our latest sale styles",
      link: "#",
    },
    {
      id: 2,
      text: "Up to 60% Off.",
      linkText: "Shop our latest sale styles",
      link: "#",
    },
    {
      id: 3,
      text: "Up to 70% Off.",
      linkText: "Shop our latest sale styles",
      link: "#",
    },
  ]

  return (
    <div className={styles.headerBottom}>
      <Container>
        <Swiper
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          loop
          modules={[Navigation]}
          className={styles.headerSwiper}>
          {saleLinks.map((el) => (
            <SwiperSlide key={el.id}>
              <span>{el.text}</span>
              <a href={el.link}>{el.linkText}</a>
            </SwiperSlide>
          ))}
          <div
            className={`${styles.navBtns} ${styles.btnPrev}`}
            ref={navigationPrevRef}>
            <FiChevronLeft />
          </div>
          <div
            className={`${styles.navBtns} ${styles.btnNext}`}
            ref={navigationNextRef}>
            <FiChevronRight />
          </div>
        </Swiper>
      </Container>
    </div>
  )
}

export default HeaderBottom
