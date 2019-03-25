import React, { Component } from 'react';

class Cita extends Component {
    
    render() { 
        return ( 
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">Nombre mascota: </h3>
                    <p className="card-text"><span>Nombre del dueño</span></p>
                    <p className="card-text"><span>Fecha</span></p>
                    <p className="card-text"><span>Hora</span></p>
                    <p className="card-text"><span>Sintomas</span></p>
                    <p className="card-text"><span></span></p>
                </div>
            </div>
         );
    }
}
 
 

 export default Cita;