import React from 'react';


const Criptomoneda = ({criptomoneda}) => {
//Hacemos un array destructuring para extraer los dats de las criptomonedas

    //console.log(criptomoneda.CoinInfo)

    const {Name,FullName} = criptomoneda.CoinInfo;
    //console.log("Name: "+Name+" FullName: "+FullName)

    return (  
        
        <option value={Name}>{FullName}</option>
    );
}
 
export default Criptomoneda;