import IconoTrabajo1 from '../assets/img/icono-trabajo-1.svg'
import IconoTrabajo2 from '../assets/img/icono-trabajo-2.svg'
import IconoTrabajo4 from '../assets/img/icono-trabajo-4.svg'
import Header3 from '../assets/img/Header3.webp'
import { FaPeopleGroup, FaClock, FaHandshake } from 'react-icons/fa6'
import { FormattedMessage } from 'react-intl'

export default function WhyArgec () {
  return (
    <>
      <section className='argec'>
        <div className='container-img'>
          <div className='container-argec'>
            <h2 className='argec__titulo'>
              <FormattedMessage id='whyArgec.title' defaultMessage='PORQUE ELEGIR ARGEC - IT CONSULTING?' />
            </h2>
            <div className='argec__contenedor'>
              <div className='argec__contenedor-items'>
                <div className='argec__item'>
                  <div className='argec__item-icono'>
                    <img src={IconoTrabajo1} height='100%' alt='Experiencia especializada en tecnología' />
                  </div>
                  <div className='argec__item-info'>
                    <h5>
                      <FormattedMessage id='whyArgec.itemOne' defaultMessage='Experiencia especializada en tecnología' />
                    </h5>
                  </div>
                </div>
                <div className='argec__item'>
                  <div className='argec__item-icono'>
                    <i><FaPeopleGroup /></i>
                  </div>
                  <div className='argec__item-info'>
                    <h5>
                      <FormattedMessage id='whyArgec.itemTwo' defaultMessage='Amplia red de talento tecnológico' />
                    </h5>
                  </div>
                </div>
                <div className='argec__item'>
                  <div className='argec__item-icono'>
                    <i><FaClock /></i>
                  </div>
                  <div className='argec__item-info'>
                    <h5>
                      <FormattedMessage id='whyArgec.itemThree' defaultMessage='Procesos de selección eficientes' />
                    </h5>
                  </div>
                </div>
                <div className='argec__item'>
                  <div className='argec__item-icono'>
                    <img src={IconoTrabajo2} alt='Adaptación a tus necesidades específicas' height='100%' />
                  </div>
                  <div className='argec__item-info'>
                    <h5>
                      <FormattedMessage id='whyArgec.itemFour' defaultMessage='Adaptación a tus necesidades específicas' />
                    </h5>
                  </div>
                </div>
                <div className='argec__item'>
                  <div className='argec__item-icono'>
                    <img src={IconoTrabajo4} alt={<FormattedMessage id='whyArgec.itemFive' defaultMessage='Éxito demostrado en colocaciones IT' />} height='100%' />
                  </div>
                  <div className='argec__item-info'>
                    <h5>
                      <FormattedMessage id='whyArgec.itemFive' defaultMessage='Éxito demostrado en colocaciones IT' />
                    </h5>
                  </div>
                </div>
                <div className='argec__item'>
                  <div className='argec__item-icono'>
                    <i><FaHandshake /></i>
                  </div>
                  <div className='argec__item-info'>
                    <h5>
                      <FormattedMessage id='whyArgec.itemSix' defaultMessage='Compromiso con la calidad y cultura empresarial' />
                    </h5>
                  </div>
                </div>
              </div>
              <div className='argec__contenedor-imagen'>
                <img src={Header3} alt='imagen' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
