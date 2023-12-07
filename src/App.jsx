import './assets/estilos/main.css'
import './assets/estilos/index.css'
import Logo from './assets/img/argec-header-no-background.webp'
import Footer from './components/Footer'
import Servicios from './components/Servicios'
import Trabajo from './components/Trabajo'
import WhyArgec from './components/WhyArgec'
import Clientes from './components/Clientes'
import { FormattedMessage } from 'react-intl'
import Header from './components/Header'

function App () {
  return (
    <>
      <Header />
      <section className='tarjeta'>
        <div className='img-prueba'>
          <div className='tarjeta__contenedor'>
            <div className='tarjeta__logo'>
              <img src={Logo} alt='Logo de ARGEC' />
            </div>
            <div className='tarjeta__info'>
              <div>
                <FormattedMessage id='card.askOne' defaultMessage='¿Necesitan potenciar sus procesos de reclutamiento?' />
              </div>
              <div>
                <FormattedMessage id='card.askTwo' defaultMessage='¿Necesitan mejorar el impacto visual y en redes de su organización?' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Servicios />

      <section className='separador'>
        <div className='separador-img'>
          <div className='separador-contenedor'>
            <div className='imagen__separador' />
            <div className='separador-frase'>
              <FormattedMessage id='separator.title' defaultMessage='Creamos modelos de negocio exitosos con nuestras Soluciones TI' />
            </div>
          </div>
        </div>
      </section>

      <Trabajo />
      <WhyArgec />
      <Clientes />
      <Footer />
    </>
  )
}

export default App
