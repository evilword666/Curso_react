import React from 'react';

const Resultado = ({resultado}) => {

    if(Object.entries(resultado).length === 0) return null; //Aqui verificamos que el objeto no sea este vacio

    return ( 
        <div className="resultado">
            <h2>Resultado</h2>
            <p className="precio">El precio es: <span>{resultado.PRICE}</span></p>
            <p >Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></p>
            <p >Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></p>
            <p >variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p >Ultima actualización: <span>{resultado.LASTUPDATE}</span></p>
        </div>
        
     );
}
 
export default Resultado;