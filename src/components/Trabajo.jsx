import { FormattedMessage } from 'react-intl'

export default function Trabajo () {
  const FormasDeTrabajar = [
    {
      id: 1,
      title: <FormattedMessage id='work.cardOneTitle' defaultMessage='Satisfacción al cliente' />,
      descripcion: <FormattedMessage id='work.cardOneDescription' defaultMessage='En ARGEC – IT Consulting, la satisfacción del cliente es nuestra máxima prioridad. Estamos comprometidos a brindar un servicio excepcional y personalizado para satisfacer todas sus necesidades de reclutamiento en tecnología. Nos esforzamos por superar sus expectativas y establecer relaciones de confianza a largo plazo.' />
    },
    {
      id: 2,
      title: <FormattedMessage id='work.cardTwoTitle' defaultMessage='Lo humano primero, siempre' />,
      descripcion: <FormattedMessage id='work.cardTwoDescription' defaultMessage='Creemos en el valor fundamental de las personas. En cada paso del proceso de reclutamiento, ponemos a las personas primero. Nuestro enfoque se basa en la comprensión de las necesidades de nuestros clientes y candidatos, promoviendo un trato humano y ético en todas nuestras interacciones. Para nosotros, cada candidato es más que un currículum, son individuos con metas y sueños.' />
    },
    {
      id: 3,
      title: <FormattedMessage id='work.cardThreeTitle' defaultMessage='Enfoque orientado a la calidad' />,
      descripcion: <FormattedMessage id='work.cardThreeDescription' defaultMessage='En nuestra consultora, la calidad es intransigente. Utilizamos métodos y procesos rigurosos para identificar, evaluar y seleccionar a los mejores talentos en el campo de la tecnología. Trabajamos estrechamente con nuestros clientes para comprender sus requisitos específicos y asegurarnos de que cada candidato que presentamos cumpla con los más altos estándares de calidad.' />
    },
    {
      id: 4,
      title: <FormattedMessage id='work.cardFourTitle' defaultMessage='Mejora continua' />,
      descripcion: <FormattedMessage id='work.cardFourDescription' defaultMessage='La mejora continua es parte integral de nuestra cultura. Siempre estamos buscando formas de perfeccionar nuestros servicios y procesos para brindar un valor aún mayor a nuestros clientes. Recopilamos retroalimentación constantemente, evaluamos nuestros resultados y nos adaptamos a las cambiantes demandas del mercado de IT. Estamos comprometidos con el crecimiento constante y la innovación en el mundo del reclutamiento tecnológico.' />
    }
  ]
  return (
    <>
      <section className='trabajo'>
        <h2 className='titulo__trabajo'>
          <FormattedMessage id='work.title' defaultMessage='Nuestra forma de trabajar' />
        </h2>
        <div className='trabajo__contenedor'>
          {FormasDeTrabajar.map(work => (
            <div className='trabajo__tarjeta' key={work.id}>
              <div className='trabajo__tarjeta-info'>
                <h4>{work.title}</h4>
                <p>
                  {work.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}
