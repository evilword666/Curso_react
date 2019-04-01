import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Formulario extends Component {
    
    //Creamos los refs
    nombreEventoRef = React.createRef();
    categoriaRef = React.createRef();


    buscarEvento = (e) =>{
        e.preventDefault();

        //Crear objeto
        const datosBusqueda = {
            nombre:this.nombreEventoRef.current.value,
            categoria:this.categoriaRef.current.value
        }
        
        //console.log(datosBusqueda)
        //Pasarlos por props
        this.props.obtenerEventos(datosBusqueda)
    }

    mostrarOpciones = (key) =>{        
        const categoria = this.props.categorias[key]
        //console.log(categoria)

        const {id, name_localized} = categoria;

        if(!id || !name_localized){
            return null;
        }else{
            //console.log(name_localized) 

            return (
                <option key={id} value={id} >{name_localized}</option>
            )   
        }    
        
    }



    render() { 

    const categorias = Object.keys(this.props.categorias) //Con esto extraemos solo las llaves del arreglo que se pasa
    //console.log("Keys de las categorias: "+categorias)
    
    //Despues con map obtenemos el valor del arreglo posicionado en la posicion recuperada con Object.keys


        return ( 
            <form onSubmit={this.buscarEvento}>  
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-center">
                        Busca tu evento por nombre o categoria
                    </legend>

                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input ref={this.nombreEventoRef} className="uk-input" type="text" placeholder="Nombre de evento o ciudad"/>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select ref={this.categoriaRef} className="uk-select">
                                {categorias.map(this.mostrarOpciones)}
                            </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">Buscar</button>
                        </div>                                                
                    </div>

                </fieldset>
            </form>
         );
    }
}
 
Formulario.propTypes = {
    obtenerEventos:PropTypes.func.isRequired,
    categorias:PropTypes.array.isRequired
}
export default Formulario;