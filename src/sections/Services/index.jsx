import CallButton from '../../components/CallButton'
import styles from './index.module.css'
import Description from '../../components/Descriptions'
import App from '../../components/MainSlider'


function Services() {

	return (
		<div className={styles.services}>
			<div className={styles.smileGallery}>
				<h3 className={styles.galleryTitle}>Галерея улыбок</h3>
				<Description className={styles.dentistsWorkDescription} title="Работа наших стоматологов направленна на профилактику заболеваний, сохранение и восстановление зубного ряда" />
			</div>
			<div className={styles.smileMakeover}>
				<h2 className={styles.makeoverTitle}>Преображаем улыбки</h2>
			</div>
			<div className={styles.call}>
				<Description className={styles.callDescription} title="Если вы хотите такую же прекрасную улыбку – позвоните нам!" />
				<CallButton />
			</div>
		<App />
		</div>
	)
}

export default Services
