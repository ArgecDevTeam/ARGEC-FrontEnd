import Header1 from '../assets/img/Header1.webp'
import Header2 from '../assets/img/Header2.webp'
import Header3 from '../assets/img/Header3.webp'
import Header4 from '../assets/img/Header4.webp'
import { Link } from 'react-scroll'
import { FormattedMessage } from 'react-intl'

export default function Slider () {
  return (
    <>
      <div className='header__slider-box'>
        <ul>
          <li><img src={Header1} alt='Heder animado' width='100%' height='100%' /></li>
          <li><img src={Header2} alt='Heder animado' width='100%' height='100%' /></li>
          <li><img src={Header3} alt='Heder animado' width='100%' height='100%' /></li>
          <li><img src={Header4} alt='Heder animado' width='100%' height='100%' /></li>
        </ul>
      </div>
      <div className='frase'>
        <p><FormattedMessage id='header.title' defaultMessage='SERVICIOS DE CONSULTORÍA ORIENTADO AL CLIENTE' /></p>
        <p><FormattedMessage id='header.subtitle' defaultMessage='Ofrecemos servicios de consultoría de calidad relacionados con el mundo IT' /></p>
        <span className='linea' />
        <Link to='servicios' smooth duration={500} style={{ cursor: 'pointer' }}><FormattedMessage id='header.btnMore' defaultMessage='Mas Info' /></Link>
      </div>
    </>
  )
}
