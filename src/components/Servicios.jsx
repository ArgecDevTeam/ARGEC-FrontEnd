import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

export default function Servicios () {
  return (
    <>
      <section className='servicios' id='servicios'>
        <div className='prueba-img'>
          <div className='container'>
            <h2 className='servicios__titulo'>
              <FormattedMessage id='services.title' defaultMessage='Nuestros Servicios' />
            </h2>
            <div className='servicios__contenedor'>
              <div className='servicios__contenedor-tarjeta'>
                <div className='servicios__tarjeta-img--lupa' />
                <div className='servicios__tarjeta-info'>
                  <h4><FormattedMessage id='services.cardOneTitle' defaultMessage='Reclutamiento IT:' /></h4>
                  <p>
                    <FormattedMessage id='services.cardOneDescription' defaultMessage='Encontramos a tu candidato ideal. ¿Cómo? Contamos con un equipo especializado de reclutadores con una amplia y actualizada base de datos de candidatos a la espera de poder ser utilizada para cubrir tus vacantes.' />
                  </p>
                </div>
              </div>
              <div className='servicios__contenedor-tarjeta'>
                <div className='servicios__tarjeta-img--cursos' />
                <div className='servicios__tarjeta-info'>
                  <h4><FormattedMessage id='services.cardTwoTitle' defaultMessage='Cursos de Reclutamiento IT:' /></h4>
                  <p>
                    <FormattedMessage id='services.cardTwoDescription1' defaultMessage='Entendemos que el mercado requiere reclutadores altamente especializados.' />
                  </p>
                  <p>
                    <FormattedMessage id='services.cardTwoDescription2' defaultMessage='La tecnología, las nuevas herramientas, plataformas y programas, están en evolución constante, por lo que nos preocupamos en estar constantemente actualizados también.' />
                  </p>
                </div>
              </div>
              <div className='servicios__contenedor-tarjeta'>
                <div className='servicios__tarjeta-img--desarrollo' />
                <div className='servicios__tarjeta-info'>
                  <h4><FormattedMessage id='services.cardThreeTitle' defaultMessage='Desarrollo web:' /></h4>
                  <p>
                    <FormattedMessage id='services.cardThreeDescription' defaultMessage='También estamos al tanto de las necesidades de pequeñas y medianas empresas en mejorar su impacto visual en el mercado y establecer una fuerte presencia online. Es por ello, que ofrecemos asistencia en la creación de sitios webs competitivos y acordes a poder cumplir sus objetivos.' />
                  </p>
                </div>
              </div>
            </div>
            <div className='servicios__boton'>
              <Link to='/contactenos' preventScrollReset><FormattedMessage id='services.button' defaultMessage='Contáctenos' /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
