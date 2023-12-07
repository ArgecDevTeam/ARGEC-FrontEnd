import '../assets/estilos/main.css'
import '../assets/estilos/index.css'
import { FaBars } from 'react-icons/fa'
import Logo from '../assets/img/argec-header-no-background.webp'
import Lang from './Lang'
import { FormattedMessage } from 'react-intl'
import Slider from './Slider'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <>
      <header className='header'>
        <div className='header__menu'>
          <Link to='/'><img src={Logo} alt='ARGEC - IT Consulting' className='header__menu-logo' /></Link>
          <div style={{ display: 'flex', gap: '20px' }}>
            <nav>
              <input type='checkbox' id='check' />
              <label htmlFor='check' className='checkbtn'>
                <FaBars />
              </label>
              <ul className='header__menu-items'>
                <li className='header__menu-links header__menu-links--active'>
                  <Link to='/'>
                    <FormattedMessage id='menu.home' defaultMessage='Inicio' />
                  </Link>
                </li>
                <li className='header__menu-links'>
                  <Link to='/about'>
                    <FormattedMessage id='menu.about' defaultMessage='Acerca Nuestro' />
                  </Link>
                </li>
                <li className='header__menu-links'><a href='/blog'>Blog</a></li>
                <li className='header__menu-links'>
                  <Link to='/contactenos'>
                    <FormattedMessage id='menu.contact' defaultMessage='Contáctenos' />
                  </Link>
                </li>
                <li className='header__menu-lang'>
                  <Lang />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Slider />
      </header>
    </>
  )
}
