import React from 'react';

//const Error = (props) => {
    const Error = ({mensaje}) => { //Podemos hacer destructurin para sacar el contenido de la variable mensaje pasada por props
    return (
        <p className="error">{mensaje}</p>
      );
}
 
export default Error;