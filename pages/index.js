import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import FooterIcon from './hero_footer'
import Footer from './shared/footer'
import NavBar from './shared/navbar'
import TestIcon from './testimonios'
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
            <img src="/img/quien_soy_bg.png" alt="camara" />
        </section>

        <section id={styles.propuesta}>
          <div className={styles.container}>
            <h2>UNA BUENA IMAGEN VALE MAS QUE MIL PALABRAS</h2>
            <p>
              Las personas somos seres visuales, con una simple imagen podemos percibir infinitas emociones y sentimientos.
            </p>
            <div className={styles.propuesta_elements}>
              <div className={styles.propuesta_element}>
                <img src="/img/propuesta_engranaje.svg" alt="Engranaje" />
                <div className={styles.propuesta_text}>
                  <h3>METODOLOGIA</h3>
                  <p>Te brindo planificación, estrategia dirección y ejecución. </p>
                </div>

              </div>
              <div className={styles.propuesta_element}>
                <img src="/img/propuesta_foco.svg" alt="foco" />
                <div className={styles.propuesta_text}>
                  <h3>CONCEPTO</h3>
                  <p>Te oriento hacía un concepto claro y acorde con tu marca.</p>
                </div>

              </div>
              <div className={styles.propuesta_element}>
                <img src="/img/propuesta_paleta.svg" alt="Paleta" />
                <div className={styles.propuesta_text}>
                  <h3>COLORES</h3>
                  <p>Creo colecciones por temporadas coherentes y armoniosos.</p>
                </div>

              </div>
              <div className={styles.propuesta_element}>
                <img src="/img/propuesta_dinero.svg" alt="Dinero" />
                <div className={styles.propuesta_text}>
                  <h3>PRESUPUESTO</h3>
                  <p>Diseño un plan que garantice el mejor costo-beneficio posible.</p>
                </div>

              </div>
              <div className={styles.propuesta_element}>
                <img src="/img/propuesta_estrella.svg" alt="Estrella" />
                <div className={styles.propuesta_text}>
                  <h3>ORIGINALIDAD</h3>
                  <p>Me inspiro con tu marca y te prometo  una propuesta única.</p>
                </div>

              </div>
              <div className={styles.propuesta_element}>
                <img src="/img/propuesta_huella.svg" alt="huella" />
                <div className={styles.propuesta_text}>
                  <h3>estilo</h3>
                  <p>Plasmo visualmente el carácter y la filosofía de tu marca.</p>
                </div>

              </div>

            </div>
          </div>
          <img className={styles.bg} src="/img/propuesta_bg.png" alt="Foto" />
        </section>
        <section id={styles.testimonios}>
          <div className={styles.container}>
            <TestIcon />
            <div className={styles.testimonio}>
              <p>
                Trabajar con Diego fue una experiencia increíble, cuando pensamos en como se iba a desarrollar la imagen de la primera y segunda colección de VLOOR no dudamos en recurrir a su trabajo, confiamos completamente en que el podía reflejar la esencia y el concepto de la marca a través de su arte; los resultados son la evidencia del tiempo y la pasión por su trabajo, la planeación y el moodboard que se realizó previo a la sesión de fotos nos ayudo a conectar ideas de que es lo que esperábamos, estamos muy contentos con los resultados.
              </p>
              <h2>
                VLOOR
              </h2>
              <div className={styles.socials}>
                <img src="/img/testimonios_fb.svg" alt="facebook link" />
                <img src="/img/testimonios_ig.svg" alt="instagram link" />
              </div>
            </div>
          </div>

        </section>
        <section id={styles.lead_magnet}>
          <div className={styles.container}>
            <h1>10 tendencias de contenido para marcas de moda</h1>

            <button>
              Descargar
            </button>
          </div>
        </section>
        <section id={styles.hero_footer}>
          <div className={styles.container}>
            <FooterIcon/>

            <div className="text">

              <h1>SI ESTAS PENSANDO EN LLEVAR TU MARCA AL SIGUIENTE NIVEL</h1>

              <div className={styles.btn_wrap}>

              <button>Hablemos</button>
              </div>
            </div>
            <FooterIcon />

          </div>

          <img className={styles.text} src="/img/hero_footer_bg.png" alt="Footer" />
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
