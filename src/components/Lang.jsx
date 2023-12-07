import { useContext, useState } from 'react'
import { langContext } from '../context/langContext'
import flagArg from '../../public/arg.png'
import flagUS from '../../public/US.png'

export default function Lang () {
  const Button = localStorage.getItem('lang')
  const idioma = useContext(langContext)
  const [btn, setBtn] = useState(Button || 'es-MX')

  return (
    <>
      <div className='lang-menu'>
        {btn === 'es-MX' && (
          <>
            <div className='selected-lang'>
              <button
                onClick={() => {
                  idioma.establecerLenguaje('es-MX')
                  setBtn(localStorage.getItem('lang'))
                }}
              >
                <img src={flagArg} alt='Bandera de Argentina' />
                ES
              </button>
            </div>
            <ul>
              <li>
                <button
                  onClick={() => {
                    idioma.establecerLenguaje('en-US')
                    setBtn(localStorage.getItem('lang'))
                  }}
                >
                  <img src={flagUS} alt='Bandera de Estados Unidos' />
                  EN
                </button>
              </li>
            </ul>
          </>
        )}

        {btn === 'en-US' && (
          <>
            <div className='selected-lang'>
              <button
                onClick={() => {
                  idioma.establecerLenguaje('en-US')
                  setBtn(localStorage.getItem('lang'))
                }}
              >
                <img src={flagUS} alt='Bandera de Estados Unidos' />
                EN
              </button>
            </div>
            <ul>
              <li>
                <button
                  onClick={() => {
                    idioma.establecerLenguaje('es-MX')
                    setBtn(localStorage.getItem('lang'))
                  }}
                >
                  <img src={flagArg} alt='Bandera de Argentina' />
                  ES
                </button>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  )
}
