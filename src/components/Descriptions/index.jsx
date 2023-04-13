import styles from './index.module.css'
import cn from 'classnames'


function Description(props) {
	const { title, className } = props
	return (
		<p 
		className={cn(styles.description, className)}
		>
			{ title }
		</p>
	)
}

export default Description