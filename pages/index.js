import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import NavBar from './shared/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diego Farfán</title>
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main>
        <section id='Hero'>
          <div className={styles.hero}>
            <div className={styles.container}>
              <div id={styles.hero_text}>
                <h1>
                  Posiciono a marcas mediante la creación de contenido audiovisual
                </h1>
                <h2>
                  FOTOGRAFÍA · EDICIÓN · VIDEO
                </h2>
              </div>

              <div id={styles.hero_img}>
                <img src="/img/diegofarfan.png" alt="diego farfan" />
              </div>

              <div id={styles.button}>
                <button>Hablemos</button>
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  )
}
