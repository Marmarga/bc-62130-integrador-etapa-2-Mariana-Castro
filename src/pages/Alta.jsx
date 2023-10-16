import { useState } from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import './Alta.scss'
import EditarCards from '../components/EditarCards'

const Alta = () => {
  const [productoAEditar, setProductoAEditar] = useState(null)  

  return (
    <>
    <div className='altaCaja'>
      <h1 className='altaTitulo'>Formulario de alta de productos</h1>     
    
    </div>
    <div className='contenerdorEdicion'>
      <Formulario className='altaTitulo__altaFormulario' productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} />
      {productoAEditar && <EditarCards producto = {productoAEditar} />}
    </div>
      <hr />
      <Tabla className='altaTitulo__altaTabla' setProductoAEditar={setProductoAEditar} />
    
    </>
  )
}

export default Alta