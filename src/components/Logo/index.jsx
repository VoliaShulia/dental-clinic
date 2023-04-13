import styles from './index.module.css'
import logo from './logo.svg'

function Logo() {
	return (
		<img src={logo} className={styles.logo} alt="logo" />
	)
}

export default Logo;
