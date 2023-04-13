import {useSelector} from 'react-redux'
import cn from 'classnames'
import styles from './index.module.css'

function MenuLines() {
	const menuVisible = useSelector((state) => state.counterReducer.menuVisible)

	return (
			<nav className={cn(styles.menuLines, {
				[styles.active]: menuVisible,
			})} >
				<div className={styles.menuContainer}>
					<a className={styles.menuLine} href='#'>О нас</a>
				</div>
				<div className={styles.menuContainer}>
					<a className={styles.menuLine} href='#'>Виды услуг</a>
				</div>
				<div className={styles.menuContainer}>
					<a className={styles.menuLine} href='#'>Отзывы о нас</a>
				</div >
				<div className={styles.menuContainer}>
					<a className={styles.menuLine} href='#'>Наши контакты</a>
				</div>
				<div className={styles.menu_class}></div>
			</nav>
	)
}

export default MenuLines