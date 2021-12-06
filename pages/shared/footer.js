import Link from 'next/link'
import styles from '../../styles/Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.container}>

                <div className={styles.politicas}>
                    <Link href="/politica-y-privacidad">
                        <a target="_blank">
                            <p>Política de privacidad</p>

                        </a>
                    </Link>

                    <Link href="/terminos-y-condiciones">
                        <a target="_blank">
                            <p>Términos y condiciones</p>

                        </a>
                    </Link>
                </div>
                <div className={styles.copyright}>
                    <p>® 2021 - DIEGO FARFAN</p>
                </div>
            </div>
        </div>
    )
}