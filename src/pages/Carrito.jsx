import { useContext } from 'react';
import './Carrito.scss'
import CarritoContext from '../contexts/CarritoContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { carrito, eliminarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)

  const handleEliminar = (id) => {    
    eliminarCarritoContext(id)
  }

  const calcularTotal = () => {
    let sumaTotal = carrito.reduce((total, prod) => {
      return total + (prod.precio * prod.cantidad)
    }, 0)
    return sumaTotal
  }

  const handleComprar = () => {
    guardarCarritoContext()
  }
    

  return (
    <>
    <div className='divCarrito'>
      <h1>Listado de productos en el carrrito</h1>     
    </div>
      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            carrito.length <= 0 ? (
              <tr>
                <td className='noHayProductos' colSpan={5} style={{textAlign: 'center'}}><strong><Link className='linkCarrito' to="/" >No hay productos</Link></strong></td>
              </tr>
            ) : (
              carrito.map((producto, idx) => (
                <tr key={idx}>
                  <td>
                    <img src={producto.foto} alt={producto.nombre} width="50px" />
                  </td>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio}</td>
                  <td>
                    <button className='carritoEliminar' onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            )
          }
          <tr>
            <td colSpan={3}><strong>Total</strong></td>
            <td><strong>${parseFloat(calcularTotal()).toFixed(2)}</strong></td>
            <td> { !carrito.length <= 0 && <button className='carritoBontonComprar' onClick={handleComprar}>Comprar</button>}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Carrito