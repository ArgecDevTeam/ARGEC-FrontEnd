import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Router'
import { LangProvider } from './context/langContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LangProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </LangProvider>
)
