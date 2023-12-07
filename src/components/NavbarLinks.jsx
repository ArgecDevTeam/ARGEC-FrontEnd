import '../assets/estilos/about.css'
import '../assets/estilos/main.css'
import Logo from '../assets/img/argec-header-no-background.webp'
import { FaBars } from 'react-icons/fa'
import Lang from './Lang'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

export default function NavbarLinks (props) {
  const Titulo = (props) => {
    // eslint-disable-next-line react/prop-types
    if (props.title === 'Acerca Nuestro') {
      return (
        <div className='header__fondo_menu-about'>
          <h1>
            <FormattedMessage id='menu.about' defaultMessage='Acerca Nuestro' />
          </h1>

        </div>
      )
    // eslint-disable-next-line react/prop-types
    } else if (props.title === 'Contáctenos') {
      return (
        <div className='header__fondo_menu_contacto'>
          <h1>
            <FormattedMessage id='menu.contact' defaultMessage='Contáctenos' />
          </h1>
        </div>
      )
    }
  }

  const Rutas = (props) => {
    // eslint-disable-next-line react/prop-types
    if (props.ruta === 'Acerca Nuestro' || props.ruta === 'About') {
      return (
        <>
          <li className='header__menu-links header__menu-links--active'><Link to='/about'><FormattedMessage id='menu.about' defaultMessage='Acerca Nuestro' /></Link></li>
          <li className='header__menu-links'><a href='./blog'>Blog</a></li>
          <li className='header__menu-links'><Link to='/contactenos'><FormattedMessage id='menu.contact' defaultMessage='Contáctenos' /></Link></li>
        </>
      )
      // eslint-disable-next-line react/prop-types
    } else if (props.ruta === 'Contáctenos' || props.ruta === 'Contact') {
      return (
        <>
          <li className='header__menu-links'><Link to='/about'><FormattedMessage id='menu.about' defaultMessage='Acerca Nuestro' /></Link></li>
          <li className='header__menu-links'><a href='./blog'>Blog</a></li>
          <li className='header__menu-links header__menu-links--active'><Link to='/contactenos'><FormattedMessage id='menu.contact' defaultMessage='Contáctenos' /></Link></li>
        </>
      )
    }
  }

  return (
    <header className='header_menu'>
      <div className='header__menu_2'>
        <Link to='/'><img src={Logo} alt='ARGEC - IT Consulting' className='header__menu-logo' /></Link>

        <nav>
          <input type='checkbox' id='check' />
          <label htmlFor='check' className='checkbtn'>
            <i><FaBars /></i>
          </label>

          <ul className='header__menu-items'>
            <li className='header__menu-links'><Link to='/'><FormattedMessage id='menu.home' defaultMessage='Inicio' /></Link></li>
            {/* eslint-disable-next-line react/prop-types */}
            <Rutas ruta={props.ruta} />
            <li className='header__menu-lang'>
              <Lang />
            </li>
          </ul>
        </nav>
      </div>

      <div className='header__titulo_menu'>
        {/* eslint-disable-next-line react/prop-types */}
        <Titulo title={props.title} />
      </div>
    </header>
  )
}
