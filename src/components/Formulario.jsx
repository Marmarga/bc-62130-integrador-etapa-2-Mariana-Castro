import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import ProductoContext from '../contexts/ProductoContext'
import { useForm } from '../hooks/useForm'
import './Formulario.scss'



const formInicial = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    detalles: '',
    foto: '',
    envio: false,
  }
  const Formulario = ({ productoAEditar, setProductoAEditar}) => {
    const [form, setForm, handleChange] = useForm(formInicial)
    const { crearProductoContext, actualizarProductoContext } = useContext(ProductoContext)
 
    useEffect(() => {
      productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
    }, [productoAEditar, setProductoAEditar])
  
  
    const handleSubmit = async (e) => {
      e.preventDefault() 
      try {
        if ( form.id === null ) {
          await crearProductoContext(form)
        } else {
          await actualizarProductoContext(form)
        }
        handleReset()
      } catch (error) {
        console.error('Ocurrió un error en el handleSubmit', error)  
      }
      
    }
  
    const handleReset = ()  => {
      setForm(formInicial)
      setProductoAEditar(null)
    }

    return (
      <>
      <div className='formDiv'> 
      <h2 className='alta-editar-agregar'>{productoAEditar ? 'Editando' : 'Agregando'}</h2>    
  
        <form onSubmit={handleSubmit}>
          <div className='label'>
            <label htmlFor="lbl-nombre">Nombre:</label>
            <input type="text" name="nombre" id="lbl-nombre" value={form.nombre} onChange={handleChange} />
          </div>
          <div className='label'>
            <label htmlFor="lbl-precio">Precio:</label>
            <input type="text" name="precio" id="lbl-precio" value={form.precio} onChange={handleChange} />
          </div>
          <div className='label'>
            <label htmlFor="lbl-stock">Stock:</label>
            <input type="text" name="stock" id="lbl-stock" value={form.stock} onChange={handleChange} />
          </div>
          <div className='label'>
            <label htmlFor="lbl-marca">Marca:</label>
            <input type="text" name="marca" id="lbl-marca" value={form.marca} onChange={handleChange} />
          </div>
          <div className='label'>
            <label htmlFor="lbl-categoria">Categoría:</label>
            <input type="text" name="categoria" id="lbl-categoria" value={form.categoria} onChange={handleChange} />
          </div>
          <div className='label'>
            <label htmlFor="lbl-detalles">Detalles:</label>
            <input type="text" name="detalles" id="lbl-detalles" value={form.detalles} onChange={handleChange} />
          </div>
          <div className='label'>
            <label htmlFor="lbl-foto">Foto:</label>
            <input type="text" name="foto" id="lbl-foto" value={form.foto} onChange={handleChange} />
          </div>
          <div className='label'>
            <label htmlFor="lbl-envio">Envío:</label>
            <input type="checkbox" name="envio" id="lbl-envio" checked={form.envio} onChange={handleChange} />
          </div>
  
          <button className='label__formGuardar' type="submit">Guardar</button>
          <button className='label__formLimpiar' type="reset" onClick={handleReset}>Limpiar</button>
        </form>
        </div>
      </>
    )
  }
  


export default Formulario