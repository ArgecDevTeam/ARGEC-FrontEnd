import '../assets/estilos/about.css'
import '../assets/estilos/main.css'
import Fundador from '../assets/img/Gonzalo-Sanchez.webp'
import Footer from '../components/Footer'
import NavbarLinks from '../components/NavbarLinks'
import { FormattedMessage } from 'react-intl'

export default function About () {
  return (
    <>
      <NavbarLinks title='Acerca Nuestro' ruta='Acerca Nuestro' />

      <section className='about'>
        <div className='about__contenedor'>
          <div className='about__contenido'>
            <p>
              <FormattedMessage id='about.descriptionOne' defaultMessage='Somos una consultora especializada en el reclutamiento y selección de perfiles IT, talento digital y humano orientado también a rubros generalistas. Tomamos inspiración de las metodologías ágiles para siempre colocar a las personas en el centro, permitir la interacción y responder al cambio, de modo que los individuos puedan tener mejores oportunidades mientras las empresas puedan inspirar e integrar a profesionales que marcan la diferencia.' />
            </p>
            <p>
              <FormattedMessage id='about.descriptionTwo' defaultMessage='Nuestro sistema de trabajo se enfoca en brindar oportunidades a nuevos profesionales, dándoles el conocimiento y las herramientas para que puedan brindar una atención personalizada, comprendiendo las necesidades de nuestros clientes, el mercado y nuestros candidatos.' />
            </p>
            <p>
              <FormattedMessage id='about.descriptionThree' defaultMessage='Para nosotros, es crucial dotar al mercado con profesionales bien capacitados en diversas áreas. Por lo tanto, damos gran importancia a mantenernos actualizados con nuevas tecnologías, métodos y herramientas, no solo dentro de la industria de TI, sino también en mercados complementarios. Como resultado, ofrecemos cursos de formación continua para asegurar que nuestros profesionales siempre estén equipados con los conocimientos y habilidades más recientes.' />
            </p>
          </div>
          <div className='about__fundador'>
            <h4>
              <FormattedMessage id='about.funder' defaultMessage='Gonzalo Sánchez – Nuestro fundador' />
            </h4>
            <img src={Fundador} alt='Gonzalo Sánchez' />
          </div>
          <div className='about__contenido'>
            <p>
              <FormattedMessage id='about.descriptionFunderOne' defaultMessage='Gonzalo es el fundador y líder de ARGEC – IT Consulting. Con un compromiso inquebrantable hacia la excelencia y una pasión por empoderar a otros, ha construido una reputación como asesor de confianza en la industria.' />
            </p>
            <p>
              <FormattedMessage id='about.descriptionFunderTwo' defaultMessage='Como firme creyente en la responsabilidad y el compromiso, Gonzalo pone un fuerte énfasis en ofrecer resultados excepcionales para sus clientes. Comprende el impacto profundo que la tecnología puede tener en los negocios y constantemente se esfuerza por brindar soluciones innovadoras que impulsen el crecimiento y la eficiencia.' />
            </p>
            <p>
              <FormattedMessage id='about.descriptionFunderThree' defaultMessage='Uno de los valores fundamentales de Gonzalo es su dedicación a la mejora continua. Le encanta mantenerse a la vanguardia de los avances de la industria, apoyándose siempre en nuevas tecnologías, métodos y herramientas. Esto le permite ofrecer a sus clientes las estrategias más eficientes, proporcionando también soluciones sostenibles.' />
            </p>
            <p>
              <FormattedMessage id='about.descriptionFunderFour' defaultMessage='El amor de Gonzalo por enseñar y compartir conocimientos es incomparable. Se apasiona profundamente por transmitir su experiencia a otros, ya sea a través de programas de mentoría, talleres o charlas. Con una habilidad innata para simplificar conceptos complejos, Gonzalo ha empoderado a innumerables individuos para desbloquear su máximo potencial en el cambiante panorama de la tecnología.' />
            </p>
            <p>
              <FormattedMessage id='about.descriptionFunderFive' defaultMessage='Impulsado por un espíritu emprendedor, Gonzalo abraza los desafíos y ve la oportunidad de convertir ideas en realidad. Su capacidad de recuperación y adaptabilidad le permiten navegar a través de incertidumbres, convirtiendo obstáculos en escalones hacia el éxito. Lidera con el ejemplo, inspirando a su equipo y clientes por igual a adoptar una mentalidad proactiva y emprendedora.' />
            </p>
            <p>
              <FormattedMessage id='about.descriptionFunderSix' defaultMessage='Por encima de todo, el entusiasmo contagioso de Gonzalo es lo que lo distingue. Su auténtica pasión por la tecnología, el aprendizaje y el emprendimiento es contagiosa, inspirando a quienes lo rodean a traspasar límites y abrazar sus propias jornadas de crecimiento y transformación.' />.
            </p>
            <p>
              <FormattedMessage id='about.descriptionFunderSeven' defaultMessage='Con Gonzalo al timón, la consultoría prospera bajo una visión compartida de ofrecer un valor excepcional, fomentar la mejora continua e impulsar una pasión por la innovación. Juntos, estamos preparados para dejar una huella duradera en la industria de la tecnología y más allá.' />
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
