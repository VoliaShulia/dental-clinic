import styles from './index.module.css'
import Instagram from './instagram.svg' 
import logo from './Logo.png'

function Footer() {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.upper}>
                <div className={styles.leftWrapper}>
                    <div className={styles.adressWrapper}>
                        <h3 className={styles.adressTitle}>Адрес</h3>
                        <p className={styles.adressParagraph}>г. Минск ул.Ноябрьякая 60 Б,<br/>каб. 100</p>
                        <p className={styles.timeParagraph}>С 8:00 до 22:00</p>
                    </div>
                </div>
                <div className={styles.logoWrapper}>
                    <img className={styles.logoImg} src={logo}/>
                </div>
                <div className={styles.rightWrapper}>
                    <div className={styles.contactsWrapper}>
                        <h3 className={styles.contactsTitle}>Контакты</h3>
                        <a className={styles.email} href="shulgan.lelya@gmail.com">shulgan.lelya@gmail.com</a>
                        <a className={styles.phone} href="+375292424294">+375292424294</a>
                        <a className={styles.instagram} href="https://www.instagram.com/volia.a.o.f/">
                        @Swilldent
                            <img className={styles.instagramPicture} src={Instagram} alt="Instagram" /></a>
                    </div>
                </div>
            </div>
            <div className={styles.down}>
                <p className={styles.copirating}>Copirating 2023</p>
            </div>
        </div>
    )
}

export default Footer