import React,{Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AgregarCita extends Component {

    //Declacion de los refs
    nombreMascotaRef = React.createRef();
    propietarioMascotaRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();


    state = { 
        //citas:[],
        error:false
     }

    crearNuevaCita = (e) => {
        e.preventDefault();
        
        const mascota = this.nombreMascotaRef.current.value,
              propietario = this.propietarioMascotaRef.current.value,
              fecha = this.fechaRef.current.value,
              hora = this.horaRef.current.value,
              sintomas = this.sintomasRef.current.value;


        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '')  {
            console.log("Faltan campos")
            this.setState({
                error:true
            })
        }else{
            const nuevaCita = {
                //            mascota: mascota //Cuando ambos campos (key, value)se llaman igual se puede poner solo uno y el valor pasa drecto
                              id:uuid(),
                              pet:mascota,
                              propietario,
                              fecha,
                              hora,
                              sintomas
                        }
                
                
                        //Se envia el objeto hacia el padre para actualizar el state
                        this.props.crearCita(nuevaCita); //Recordar que siempre se pasan valores del padre al hijo, en este caso de App.js a AgregarCita.js por medio de los props
                        
                        //Reiniciar el formulario
                        e.currentTarget.reset();

                        this.setState({
                            error:false
                        })
                            
        }

        
    }


    
    render() { 
        const existeError = this.state.error;

        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                        <form onSubmit={this.crearNuevaCita}>
                            <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                                <div className="col-sm-8 col-lg-10">
                                    <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                                    <div className="col-sm-8 col-lg-10">
                                    <input ref={this.propietarioMascotaRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                                <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                    <input ref={this.fechaRef} type="date" className="form-control" />
                                </div>                            

                                <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                                <div className="col-sm-8 col-lg-4">
                                    <input ref={this.horaRef} type="time" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                                <div className="col-sm-8 col-lg-10">
                                    <textarea ref={this.sintomasRef}  className="form-control"></textarea>
                                </div>
                            </div>
                                <div className="form-group row justify-content-end">
                                    <div className="col-sm-3">
                                    <button type="submit" className="btn btn-success w-100">Agregar</button>
                                </div>
                            </div>
                        </form>   
                        {existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}                 
                </div>                    
            </div>
         );
    }
}
 
AgregarCita.propTypes = {
    crearCita : PropTypes.func.isRequired
}

export default AgregarCita;