import Head from 'next/head'
import Image from 'next/image'

import { PostBody, ImageContainer, InfoWrapper, Title } from 'styles/blog.style'

const About = () => {
  return (
    <>
      <Head>
        <title>Un poco sobre mi | LuisFOsG</title>
      </Head>
      <ImageContainer>
        <Image src="https://i.imgur.com/EKskhAM.jpeg" layout="fill" alt="About" priority/>
      </ImageContainer>
      <InfoWrapper>
        <Title>Un poco sobre mi | LuisFOsG</Title>
      </InfoWrapper>
      <PostBody>
        <h2>Bienvenido 😁</h2>
        <p>Antes de empezar a compartir diversos contenidos que he encontrado o aprendido a través del tiempo. Me gustaría contarles el porqué estoy y llegue aquí.</p>
        <h2>El Inicio 😮</h2>
        <p>
        Todo empezó al finalizar Once Grado, cuando aquí en Colombia, es normal pensar en ingresar a alguna carrera profesional, estaba pensando por electrónica, ya que desde hace algún tiempo me había gustado la creación de robots y demás artefactos electrónicos que eran fabricados en mi colegio (que tenia Técnica Incluida), y además hacían uso de la programación en Arduino, aunque al día de hoy no he tenido mucho contacto con Arduino, sentía que podría irme bien con el uso de estas herramientas.
        </p>
        <h2>La llegada a Ingeniería Informática 👾</h2>
        <p>
        Al momento de seleccionar la carrera las inscripciones para ingeniería electrónica no habían abierto, en si la Universidad abriría tarde sus matriculas. Como contaba con una beca y tenia X tiempo para matricularme a alguna carrera, decidí irme por la más cercana a lo que quería, <strong>Ingeniería Informática.</strong>
        </p>
        <h2>¿Por qué programación? 🤔</h2>
        <p>
        Ya estando estudiando, obviamente quería aprovechar el tiempo en mejorar en alguna rama de la carrera para cuando saliera al mundo laboral contar con un poco más de conocimiento en el apartado elegido, después de mirar todas las ramas relacionadas decidí adentrarme más a la <strong>Programación</strong>, que además ya llevaba tiempo con ganas de mejorar y aprender algo de esto.
        </p>
        <h2>El Lenguaje 🤖</h2>
        <em>&quot;Si Puedes Imaginarlo Puedes Programarlo&quot; - Programación ATS</em>
        <p>
        El primer lenguaje que use fue C++, ya que fue el impartido en la Universidad (Primer Semestre), y apenas empezamos a usarlo, comencé a ver tutoriales en YouTube especialmente de un canal llamado <a href="https://www.youtube.com/c/Programaci%C3%B3nATS/videos" target="_blank" rel="noreferrer">Programación ATS</a>, que gracias a él pude aprender los conocimientos básicos de la programación y lógica que también me permitían crear mis propios programas por consola.
        </p>
        <p>Ya después de unos meses, sentía que hacer programas por consola no era suficiente y además quería compartir mi progreso fácilmente, buscando en internet, encontré un tutorial para hacer <strong>Bots de Discord</strong> con JavaScript, y aquí fue donde di el salto con JavaScript, porque además de hacer programas por consola, me permitía incluso hacer páginas web, aplicaciones de escritorio, Incluso móvil. Inspirado por estos resultados deseados empecé a estudiar de diferentes formas ya fuera por medio de tutoriales o blogs hasta documentaciones y cursos.</p>
        <em>También he probado otros Lenguajes como Python, PHP, JAVA, Kotlin, pero solo para hacer pequeños programas y con un conocimiento mínimo.</em>
        <h2>Al día de hoy 😎</h2>
        <p>Al día de hoy, sigo en la tarea de mejorar y aprender más sobre JavaScript y las Herramientas que puede brindarnos. Incluso este blog y mi página en construcción hacen parte de este aprendizaje, Para Finalizar, te dejo con lo que considero como mi resumen.</p>
        <h2>Presentación 👨🏻‍💻</h2>
        <p>
        Me llamo Luis Osorio, un colombiano que actualmente estudia Ingeniería Informática y además es fanático de aprender, hacer y descubrir cosas nuevas enfocadas en la tecnología principalmente con JavaScript.
        </p>
        <p>Muchas gracias por llegar hasta aquí &lt;3</p>
      </PostBody>
    </>
  )
}

export default About
