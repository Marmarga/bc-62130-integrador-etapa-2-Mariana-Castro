import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="nav-bar">             
    <ul className="nav-bar__nav-list">
      <img src="public/img/logo.all.png" alt="logo" className="logo"/>        
      <li className="nav-bar__nav-item">
        <NavLink to="/" className="nav-bar__nav-link">Inicio</NavLink>
      </li>
      <li className="nav-bar__nav-item">
        <NavLink to="/alta" className="nav-bar__nav-link">Alta</NavLink>
      </li>
      <li className="nav-bar__nav-item">
        <NavLink to="/contacto" className="nav-bar__nav-link">Contacto</NavLink>
      </li>
      <li className="nav-bar__nav-item">
        <NavLink to="/nosotros" className="nav-bar__nav-link">Nosotros</NavLink>
      </li>
    </ul>
  </nav> 
  )
}

export default Navbar