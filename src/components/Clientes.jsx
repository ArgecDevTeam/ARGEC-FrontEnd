import { FaUsers, FaFolder } from 'react-icons/fa'
import IconoClientes1 from '../assets/img/iconoClientes1.svg'
import IconoClientes2 from '../assets/img/iconoClientes2.svg'
import { FormattedMessage } from 'react-intl'

export default function Clientes () {
  return (
    <>
      <section className='clientes'>
        <div className='clientes__imagen'>
          <div className='clientes__contenedor'>
            <h2>
              <FormattedMessage id='clients.title' defaultMessage='Más de 30 clientes confiaron en nosotros' />
            </h2>
            <div className='clientes__items'>
              <div className='cliente__item'>
                <div className='cliente__item-icono'>
                  <img src={IconoClientes1} alt='icono' height='100%' />
                </div>
                <div className='cliente__item-info'>
                  <p>4+</p>
                  <p>
                    <FormattedMessage id='clients.itemOne' defaultMessage='Años de experiencia' />
                  </p>
                </div>
              </div>
              <div className='cliente__item'>
                <div className='cliente__item-icono'>
                  <i><FaUsers /></i>
                </div>
                <div className='cliente__item-info'>
                  <p>30K+</p>
                  <p>
                    <FormattedMessage id='clients.itemTwo' defaultMessage='candidatos en nuestra BdD' />
                  </p>
                </div>
              </div>
              <div className='cliente__item'>
                <div className='cliente__item-icono'>
                  <FaFolder style={{ color: 'white', fontSize: '30px' }} />
                </div>
                <div className='cliente__item-info'>
                  <p>90%</p>
                  <p>
                    <FormattedMessage id='clients.itemThree' defaultMessage='de Tasa de éxito en colocación de puestos IT' />
                  </p>
                </div>
              </div>
              <div className='cliente__item'>
                <div className='cliente__item-icono'>
                  <img src={IconoClientes2} alt='icono' height='100%' />
                </div>
                <div className='cliente__item-info'>
                  <p>30</p>
                  <p>
                    <FormattedMessage id='clients.itemFour' defaultMessage='días para cubrir roles tecnológicos' />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
