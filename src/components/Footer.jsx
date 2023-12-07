import '../assets/estilos/main.css'
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'
import Logo from '../assets/img/argec-header-no-background.webp'

export default function Footer () {
  return (
    <>
      <footer className='footer'>
        <img src={Logo} alt='ARGEC - IT Consulting' className='footer__logo' />
        <div className='footer__redes'>
          <a href='https://www.linkedin.com/company/argec-itconsulting/' target='_blank' rel='noopener noreferrer'>
            <i><FaLinkedin /></i>
          </a>
          <a href='https://www.instagram.com/argec_itconsulting/' target='_blank' rel='noopener noreferrer'>
            <i><FaInstagram /></i>
          </a>
          <a href='https://www.facebook.com/argecitconsulting/' target='_blank' rel='noopener noreferrer'>
            <i><FaFacebook /></i>
          </a>
          <a href='mailto:contacto@argec.net' target='_blank' rel='noopener noreferrer'>
            <i><FaEnvelope /></i>
          </a>
        </div>
      </footer>
    </>
  )
}
