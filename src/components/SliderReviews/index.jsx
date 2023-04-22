import { useRef } from 'react'
import styles from './index.module.css'
import Vitaliy from './Vitaliy.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const SliderReviews = () => {
    const swiperRef = useRef();

    return (
        <div className={styles.sliderWrapperReviews}>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            modules={[Navigation]}
            className="mySwiper"
            >
				<SwiperSlide>
					<div className={styles.commentsWrapper}>
                        <div className={styles.commentWrapper}>
                            <h3 className={styles.clientsTitle}>Что говорят наши клиенты</h3>
                            <p className={styles.comment}>“Настоятельно рекомендую обращаться только в стоматологию "Свилдент". Отличные специалисты, я бы сказал мастера своего дела, проведут качественно работу по хирургии, эстетической стоматологии, эндодонтии, протезировании, терапии, отбеливании и т.д. ещё расскажут о возможных проблемах с зубами, деснами и решением этих проблем. Умеренные цены, а главное внимательность к каждому клиенту, акции и скидки постоянным клиентам. Обращайтесь и судите сами! Уверен, Вам понравится!”</p>
                        </div>
                        <div className={styles.person}>
                            <img src={Vitaliy} className={styles.profilePicture} alt='Виталий'/>
                            <div className={styles.personData}>
                                <h4 className={styles.profileName}>Виталий</h4>
                                <div className={styles.iconRating}></div>
                            </div>
                        </div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.commentsWrapper}>
                        <div className={styles.commentWrapper}>
                            <h3 className={styles.clientsTitle}>Что говорят наши клиенты</h3>
                            <p className={styles.comment}>“Настоятельно рекомендую обращаться только в стоматологию "Свилдент". Отличные специалисты, я бы сказал мастера своего дела, проведут качественно работу по хирургии, эстетической стоматологии, эндодонтии, протезировании, терапии, отбеливании и т.д. ещё расскажут о возможных проблемах с зубами, деснами и решением этих проблем. Умеренные цены, а главное внимательность к каждому клиенту, акции и скидки постоянным клиентам. Обращайтесь и судите сами! Уверен, Вам понравится!”</p>
                        </div>
                        <div className={styles.person}>
                            <img src={Vitaliy} className={styles.profilePicture} alt='Виталий'/>
                            <div className={styles.personData}>
                                <h4 className={styles.profileName}>Виталий</h4>
                                <div className={styles.iconRating}></div>
                            </div>
                        </div>
					</div>
				</SwiperSlide>
			</Swiper>
            <div className={styles.buttonWrapper}>
                <button className={styles.prevButton} onClick={() => swiperRef.current?.slidePrev()}></button>
                <button className={styles.nextButton} onClick={() => swiperRef.current?.slideNext()}></button>
            </div>
		</div>
    )
}

export default SliderReviews
