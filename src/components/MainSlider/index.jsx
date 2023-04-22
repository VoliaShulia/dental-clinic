import cn from 'classnames'
import styles from './index.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"


// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css"
// import "swiper/modules/free-mode/free-mode.min.css"

// import required modules
import { FreeMode, Pagination } from "swiper"

export default function App() {
  return (
    <div className={styles.sliderWrapper}>
      	<Swiper
        slidesPerView={4}
        spaceBetween={110}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
		style={{
			"--swiper-pagination-color": "#E3C24A",
			"--swiper-pagination-bullet-inactive-color": "#d1c69c",
			"--swiper-pagination-bullet-inactive-opacity": "1",
			"--swiper-pagination-bullet-size": "10px",
			"--swiper-pagination-bullet-horizontal-gap": "4px"
		  }}
      	>
				<SwiperSlide>
					<div className={styles.servicesComponent}>
						<h3 className={cn(styles.whiteningTitle, styles.componentsTitles)}>Отбеливание зубов</h3>
						<button className={styles.inactiveButton}>01</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.servicesComponent}>
						<h3 className={styles.componentsTitles}>Виниры</h3>
						<button className={styles.inactiveButton}>02</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.servicesComponent}>
						<h3 className={styles.componentsTitles}>Коронки</h3>
						<button className={styles.inactiveButton}>03</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.servicesComponent}>
						<h3 className={styles.componentsTitles}>Имплатны</h3>
						<button className={styles.inactiveButton}>04</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.servicesComponent}>
						<h3 className={styles.componentsTitles}>Лечение кариеса</h3>
						<button className={styles.inactiveButton}>05</button>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
