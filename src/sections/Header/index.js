import Menu from '../../components/Menu';
import Logo from '../../components/Logo'
import Phone from '../../components/Phone';
import styles from './index.module.css'

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.logoAll}>
				<Logo />
				<p className={styles.logoName}>Свилдент</p>
			</div>
			<Menu />
			<Phone />
		</div>
	)
}

export default Header;
