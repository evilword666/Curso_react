import React from 'react';

const SingleProducto = (props) => {

//    if(props) return null;
    
    const {imagen,nombre,precio,descripcion} = props.producto;   
    if(!imagen) return null;
    
    return ( 
        <div className="info-producto">
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre}/>
            </div>

            <div className="info"></div>
                <h2>{nombre}</h2> 
                <p className="precio">$ {precio}</p>
                <p>{descripcion}</p>
        </div>
     );
}
 
export default SingleProducto;