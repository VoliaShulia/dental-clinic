import Description from '../../components/Descriptions'
import RightWrapper from '../../components/RightWrapper'
import styles from './index.module.css'

function FirstScreen() {
	return (
		<>
			<section className={styles.firstScreen}>
				<div className={styles.leftWrapper}>
					<Description className={styles.happy} title='Мы рады представить вам профессиональные стоматологические услуги, которые зависят не только от технологий'/>
					<div>
						<Description className={styles.trust} title='Нам доверяют по всей Беларуси и за её пределами'/>
						<h1 className={styles.title}>СвилДент</h1>
					</div>
				</div>
				<RightWrapper />
			</section>
		</>
	)
}

export default FirstScreen
