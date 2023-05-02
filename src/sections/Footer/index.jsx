import styles from './index.module.css'
import Instagram from './instagram.svg' 

function Footer() {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.upper}>
                <div className={styles.adressWrapper}>
                    <h3 className={styles.adressTitle}>Адрес</h3>
                    <p className={styles.adressParagraph}>г. Минск ул.Ноябрьякая 6, 2 этаж, каб. 100</p>
                    <p className={styles.timeParagraph}>Ежедневно с 8:00 до 22:00</p>
                </div>
                <div className={styles.contactsWrapper}>
                    <h3 className={styles.contactsTitle}>Контакты</h3>
                    <a className={styles.email} href="shulgan.lelya@gmail.com">shulgan.lelya@gmail.com</a>
                    <a className={styles.phone} href="+375292424294">+375292424294</a>
                    <a className={styles.instagram} href="https://www.instagram.com/volia.a.o.f/">
                    @Swilldent
                        <img className={styles.instagramPicture} src={Instagram} alt="Instagram" /></a>
                </div>
            </div>
            <div className={styles.down}>
                <p className={styles.copirating}>Copirating 2023</p>
            </div>
        </div>
    )
}

export default Footer