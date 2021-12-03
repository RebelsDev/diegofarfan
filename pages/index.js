import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Footer from './shared/footer'
import NavBar from './shared/navbar'
import Icon from './titulos'

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
        <section id={styles.hero}>

          <div className={styles.container}>
            <div id={styles.hero_text}>
              <header>
                <h1>
                  Posiciono a marcas mediante la creación de contenido audiovisual
                </h1>
                <h2>
                  FOTOGRAFÍA · EDICIÓN · VIDEO
                </h2>
              </header>
            </div>

            <div id={styles.hero_img}>
              <img src="/img/diegofarfan.png" alt="diego farfan" />
            </div>

            <div id={styles.button}>
              <button>Hablemos</button>
            </div>
          </div>


        </section>
        <section id={styles.miedos}>
          <div className={styles.container}>
            <h2>
              si eres dueño de una marca o tienes una marca personal, probablemente...
            </h2>
            <div className={styles.miedos_elements}>
              <div className={styles.miedos_element}>
                <img src="/img/contenido.png" alt="contenido logo" />

                <p>
                  No planificas el contenido que publicas

                </p>
              </div>
              <div className={styles.miedos_element}>
                <img src="/img/camara.png" alt="camara logo" />

                <p>
                  No empleas una estrategia clara para tu contenido.

                </p>
              </div>
              <div className={styles.miedos_element}>
                <img src="/img/smartphone.png" alt="smartphone logo" />


                <p>
                  Tu contenido no te da los resultados de alcance buscas.

                </p>
              </div>

            </div>

          </div>

        </section>
        <section id={styles.beneficios}>
          <div className={styles.container}>
            <h2>
              SIN EMBARGO, TE GUSTARÍA...
            </h2>
            <div className={styles.beneficios_elements}>
              <div className={styles.benedificios_element}>
                <h3>Calidad</h3>
                <p>Crear contenido valioso
                  empleando herramientas
                  y programas de calidad.</p>
              </div>

              <div className={styles.beneficios_element}>
                <h3>Originalidad</h3>
                <p>Una estrategia capaz
                  de brindarte contenido
                  creativo y único.</p>
              </div>

              <div className={styles.beneficios_element}>
                <h3>Mensaje</h3>
                <p>Compartir contenido
                  capaz de transmitir
                  un mensaje poderoso.</p>
              </div>

            </div>

          </div>

        </section>
        <section id={styles.quien_soy}>
          <div className={styles.container}>
            <div className={styles.quien_soy_text}>
              <h2>HOLA, SOY DIEGO FARFAN</h2>
              <p>Soy fotógrafo, creador de contenido,editor y film-maker.</p>
              <p>
                Creo contenido de valor para marcas y personas con marcas personales para ayudarlos a conseguir posicionarse bajo un concepto único y de calidad.</p>
                <p>
                Trabajo en proyectos grandes y pequeños, oriento a mis clientes, les brindo estrategia, planifico su contenido, lidero equipos, manejo presupuestos y entrego resultados.</p>
              <div className={styles.wrap}>

              <button>HABLEMOS</button>
              </div>
            </div>
            <div className={styles.titulos}>
              <Icon/>

              {/* <h3>Director</h3>
              <h3>Editor</h3>
              <h3>Fotografo</h3>
              <h3>Estratega</h3>
              <h3>Creativo</h3> */}

            </div>
          </div>
        </section>
        <section id={styles.procesos}>

        </section>
        <section id={styles.testimonios}>

        </section>
        <section id={styles.lead_magnet}>

        </section>
        <section id={styles.hero_footer}>

        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
