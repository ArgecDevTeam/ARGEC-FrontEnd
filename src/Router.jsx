import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './views/About'
import Contacto from './views/Contacto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contactenos',
    element: <Contacto />
  }
])

export default router
