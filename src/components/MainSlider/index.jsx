import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import cn from 'classnames'
import styles from './index.module.css'
import React, { Component } from "react";



class MainSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1
		};
		return (
			<Slider className={styles.servicesComponents} {...settings}>
						<div className={styles.servicesComponent}>
							<h3 className={cn(styles.whiteningTitle, styles.componentsTitles)}>Отбеливание зубов</h3>
							<button className={styles.inactiveButton}>01</button>
						</div>
						<div className={styles.servicesComponent}>
							<h3 className={styles.componentsTitles}>Виниры</h3>
							<button className={styles.inactiveButton}>02</button>
						</div>
						<div className={styles.servicesComponent}>
							<h3 className={styles.componentsTitles}>Коронки</h3>
							<button className={styles.inactiveButton}>03</button>
						</div>
						<div className={styles.servicesComponent}>
							<h3 className={styles.componentsTitles}>Имплатны</h3>
							<button className={styles.inactiveButton}>04</button>
						</div>
						<div className={styles.servicesComponent}>
							<h3 className={styles.componentsTitles}>Лечение кариеса</h3>
							<button className={styles.inactiveButton}>05</button>
						</div>
					</Slider>
		)
	}
}

export default MainSlider
