import ContactsButton from '../ContactsButton'
import Description from '../Descriptions'
import styles from './index.module.css'

function RightWrapper() {
	return (
		<>
		<div className={styles.rightWrapper}>
			<h2 className={styles.strong}>Мы верим в силу вашей улыбки!</h2>
			<Description className={styles.consultation} title="Бесплатная консультация" />
			<ContactsButton />
		</div>
		</>
	)
}

export default RightWrapper
