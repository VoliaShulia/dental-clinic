import styles from './index.module.css'


function Phone() {
	return (
		<div className={styles.phoneContainer}>
			<a className={styles.phone}
				href="tel:+375292424294"
			>
				+375292424294
			</a>
		</div>
	)
}

export default Phone
