import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();


    obtenerDatos=(e)=>{
        e.preventDefault();

        
    //leemos el valor 
    const termino = this.busquedaRef.current.value;
    //console.log(termino)
    this.props.datosBusqueda(termino)

    
    }


    render() { 
        return ( 
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} className="form-control form-control-lg" type="text" placeholder="Busca tu imágen, ejemplo: Fútbol"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-blog" value="Buscar"/>
                    </div>                    
                </div>
            </form>
         );
    }
}
 
export default Buscador;