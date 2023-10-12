import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { newArrivalsData } from "./NewArrivalsData"

import styles from "./NewArrivals.module.css"

const NewArrivals: FC = () => {
  return (
    <section className={styles.newArrivalsSection}>
      <div className={styles.titleSection}>
        <div className='main-titles'>New arrivals</div>
        <div className='subtitle-section'>
          <span>Check out our latest arrivals for the upcoming season</span>{" "}
          <br />
          <a href='#'>See the collection here</a>
        </div>
      </div>
      <Swiper
        className={styles.newArrivalsSwiper}
        //@ts-ignore
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        //autoplay
        grabCursor
        pagination={{
          el: ".arrivals-pagination",
          clickable: true,
        }}
        slidesPerView={5}
        spaceBetween={30}>
        {newArrivalsData.map((item) => (
          <SwiperSlide key={item.link}>
            <a href={item.link} className={styles.newArrivalsCard}>
              <img src={item.img} alt={item.img} className={styles.cardImg} />
              <div className='card-descriptions'>{item.title}</div>
              <h5 className='card-normal-price'>{item.price}</h5>
            </a>
          </SwiperSlide>
        ))}
        <div className='arrivals-pagination'></div>
      </Swiper>
    </section>
  )
}

export default NewArrivals
