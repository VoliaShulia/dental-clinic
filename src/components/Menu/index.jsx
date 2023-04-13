import styles from './index.module.css'
import { useDispatch } from 'react-redux'
import { toggleMenuLines } from '../../features/counter/counterReducer'


function Menu() {
	
	const dispatch = useDispatch()

	const menuVisibleDispatch = () => {
		dispatch(toggleMenuLines())
	}

	return (
		<div className={styles.headerItemContainer}>
			<button className={styles.menu} onClick={menuVisibleDispatch}>Меню</button>
		</div>
	)
}

export default Menu;