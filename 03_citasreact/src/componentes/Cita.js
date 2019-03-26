import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Cita extends Component {
    eliminarCita = () =>{
        console.log("Eliminando cita...")
        this.props.borrarCita(this.props.info.id)
    }


    render() { 

        const {fecha, hora, pet, propietario, sintomas, id} = this.props.info; //Recordar que debe tener el mismo nombre las variables que las que se 
        console.log(this.props.info)
        return ( 
            <div className="media mt-3">
                <div className="media-body">

                    <h3 className="mt-0">{pet}</h3>
                    <p className="card-text"><span>Nombre del dueño: </span>{propietario}</p>
                    <p className="card-text"><span>Fecha: </span>{fecha}</p>
                    <p className="card-text"><span>Hora: </span>{hora}</p>
                    <p className="card-text"><span>Sintomas: </span></p>
                    <p className="card-text">{sintomas}</p>

                    <button onClick={this.eliminarCita} className="btn btn-danger">
                        Eliminar Citas &times;
                    </button>
                </div>
            </div>
         );
    }
}
 
 
Cita.propTypes = {
    //Aqui vamos a hacer un shape
    info : PropTypes.shape({
        fecha: PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        pet: PropTypes.string.isRequired,
        propietario: PropTypes.string.isRequired,
        sintomas:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired
    }),
    borrarCita:PropTypes.func.isRequired

    
}

 export default Cita;