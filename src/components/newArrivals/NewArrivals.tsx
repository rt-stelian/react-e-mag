import { FC } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import AddToWhishList from "UI/whish-list-heart/AddToWhishList"
import { newArrivalsData } from "./NewArrivalsData"

import styles from "./NewArrivals.module.css"

const NewArrivals: FC = () => {
  return (
    <section className={styles.newArrivalsSection}>
      <div className={styles.titleSection}>
        <div className='main-titles'>New arrivals</div>
        <div className='subtitle-section'>
          <span>Check out our latest arrivals for the upcoming season</span>
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
        pagination={{
          el: ".arrivals-pagination",
          clickable: true,
        }}
        slidesPerView={5}
        spaceBetween={30}>
        {newArrivalsData.map((item) => (
          <SwiperSlide key={item.link} className={styles.newArrivalsCard}>
            <div>
              <Link to='/single-product' className={styles.cardImg}>
                <img src={item.img} alt={item.img} />
                <AddToWhishList />
              </Link>
              <Link to='/single-product'>
                <div className='card-descriptions'>{item.title}</div>
                <h5 className='card-normal-price'>{item.price}</h5>
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <div className='arrivals-pagination'></div>
      </Swiper>
    </section>
  )
}

export default NewArrivals
