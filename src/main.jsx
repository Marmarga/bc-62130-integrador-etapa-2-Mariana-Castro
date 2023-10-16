import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'


import Inicio from './pages/Inicio'
import Alta from './pages/Alta'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'

import Header from './components/Header'
import Footer from './components/Footer'
import { ProductoProvider } from './contexts/ProductoContext'
import { CarritoProvider } from './contexts/CarritoContext'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarritoProvider>
  <ProductoProvider>
   <BrowserRouter>

   <Header/>

   <Routes>     
      <Route path='/' element={<Inicio />} />
      <Route path='/alta' element={<Alta />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/carrito' element={<Carrito />} />

    </Routes>

    <Footer />

   </BrowserRouter>   
  </ProductoProvider>
  </CarritoProvider>
  </React.StrictMode>,
)
