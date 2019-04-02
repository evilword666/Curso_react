import React from 'react';
import {Link} from 'react-router-dom';

const Producto = (props) => {
    //console.log(props.informacion)
    const {imagen,nombre,precio,id} = props.informacion;

    return ( 
        <li>
            <img src={`/img/${imagen}.png`} alt="nombreImagen"/>
            <p>{nombre} ${precio}</p>
            <Link to={`/producto/${id}`} className="btn">Mas informacion</Link>
        </li>
     );
}
 
export default Producto;