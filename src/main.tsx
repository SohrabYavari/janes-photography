import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


import { Footer } from "./template/Footer.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
        <Footer title="Framer Motion x React Router 6" />
      </BrowserRouter>
  </React.StrictMode>,
)
