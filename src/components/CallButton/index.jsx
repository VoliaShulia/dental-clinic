import styles from './index.module.css'

function CallButton() {
	return (
		<a className='callButtonLink' href="tel:+375292424294">
			<button className={styles.callButton}>Позвонить</button>
		</a>
	)
}

export default CallButton