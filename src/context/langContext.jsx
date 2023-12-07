import React, { useState } from 'react'
import mensajesIngles from '../lang/en-US.json'
import mensajesEspanol from '../lang/es-MX.json'
import { IntlProvider } from 'react-intl'

const langContext = React.createContext()

// eslint-disable-next-line react/prop-types
const LangProvider = ({ children }) => {
  let localePorDefecto
  let mensajesPorDefecto
  const lang = localStorage.getItem('lang')

  if (lang) {
    localePorDefecto = lang

    if (lang === 'es-MX') {
      mensajesPorDefecto = mensajesEspanol
    } else if (lang === 'en-US') {
      mensajesPorDefecto = mensajesIngles
    } else {
      localePorDefecto = 'es-MX'
      mensajesPorDefecto = mensajesEspanol
    }
  }

  const [mensajes, establecerMensajes] = useState(mensajesPorDefecto)
  const [locale, establecerLocale] = useState(localePorDefecto)

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case 'es-MX':
        establecerMensajes(mensajesEspanol)
        establecerLocale('es-MX')
        localStorage.setItem('lang', 'es-MX')
        break
      case 'en-US':
        establecerMensajes(mensajesIngles)
        establecerLocale('en-US')
        localStorage.setItem('lang', 'en-US')
        break
      default:
        establecerMensajes(mensajesEspanol)
        establecerLocale('es-MX')
    }
  }
  return (
    <langContext.Provider value={{ establecerLenguaje }}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { LangProvider, langContext }
