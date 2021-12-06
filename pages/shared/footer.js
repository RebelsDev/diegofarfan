import styles from '../../styles/Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.container}>

                <div className={styles.politicas}>
                    <p>Política de privacidad</p>
                    <p>Términos y condiciones</p>
                </div>
                <div className={styles.copyright}>
                    <p>® 2021 - DIEGO FARFAN</p>
                </div>
            </div>
        </div>
    )
}