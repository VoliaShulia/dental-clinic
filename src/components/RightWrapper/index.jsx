import ContactsButton from '../ContactsButton'
import Description from '../Descriptions'
import styles from './index.module.css'

function RightWrapper() {
	return (
		<div className={styles.container}>
			<div className={styles.rightWrapper}>
				<h3 className={styles.strong}>Мы верим в силу вашей улыбки!</h3>
				<Description className={styles.consultation} title="Бесплатная консультация" />
				<ContactsButton />
			</div>
		</div>
	)
}

export default RightWrapper
