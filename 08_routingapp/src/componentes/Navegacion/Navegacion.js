import React from 'react';
import './Navegacion.css';
import {NavLink} from 'react-router-dom';



const Navegacion = () => {
    return ( 
        <nav className="navegacion">
            <NavLink to={'/Nosotros'} activeClassName="activo">Nosotros</NavLink>
            <NavLink to={'/Productos'} activeClassName="activo">Productos</NavLink>
            <NavLink to={'/Contacto'} activeClassName="activo">Contacto</NavLink>
        </nav>        
     );
}
 
export default Navegacion;