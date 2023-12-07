import '../assets/estilos/contact.css'
import Contacto2 from '../assets/img/backgroundContact.webp'
import Footer from '../components/Footer'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import NavbarLinks from '../components/NavbarLinks'
import { FormattedMessage } from 'react-intl'

export default function Contacto () {
  const apiKey = import.meta.env.VITE_YOUR_PUBLIC_KEY
  const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID
  const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(serviceId, templateId, form.current, apiKey)
      .then(() => {
        alert('Mensaje enviado con exito')
        document.getElementById('contact-form').reset()
      }, (error) => {
        alert(error.text)
      })
  }
  return (
    <>
      <NavbarLinks title='Contáctenos' ruta='Contáctenos' />

      <section className='formulario'>
        <div className='formulario__contenedor'>
          <div className='formulario__texto'>
            <FormattedMessage id='contact.required1' defaultMessage='Los campos con' /> <span style={{ color: 'red' }}>*</span> <FormattedMessage id='contact.required2' defaultMessage='son obligatorios' />
          </div>
          <div className='form'>
            <form ref={form} id='contact-form' onSubmit={sendEmail} className='form_contacto'>
              <div className='contenedor__input'>
                <div className='formulario__input'>
                  <label htmlFor='from_name'><FormattedMessage id='contact.inputName' defaultMessage='Nombre' /> <span className='asterisco'>*</span></label>
                  <input type='text' name='from_name' id='from_name' required />
                </div>
                <div className='formulario__input'>
                  <label htmlFor='email'><FormattedMessage id='contact.inputEmail' defaultMessage='E-mail' /> <span className='asterisco'>*</span></label>
                  <input type='text' name='email' id='email' required />
                </div>
                <div className='formulario__input'>
                  <label htmlFor='message'><FormattedMessage id='contact.inputMessage' defaultMessage='Mensaje' /> <span className='asterisco'>*</span></label>
                  <textarea type='text' name='message' id='message' required />
                </div>
              </div>
              <button type='submit' className='formulario__boton'><FormattedMessage id='contact.button' defaultMessage='Enviar' /></button>
            </form>
            <div className='imagen'>
              <img src={Contacto2} alt='Grupo de trabajadores' />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
