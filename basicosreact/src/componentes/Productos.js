//Crear un componente
//3 partes

import React,{Component} from 'react'; //1) Importarlo de React 
import Producto from './Producto';

class Productos extends Component{ //2 Crear la clase del componente
    render (){ //3) El render siempre debe ir a menos que sea un stateless component
        return (
            <div>                
                <h2>Listado de Productos</h2>                
                {Object.keys(this.props.productos).map(key => (
                    //console.log(key)
                    <Producto 
                        key={key}
                        producto={this.props.productos[key]}
                    />                    
                ))}
            </div>
        )
    }
}


/*
const Productos = (props) => {
    return(
        <div>   
            <p>Listado de Productos</p>
            <p>{props.productos}</p>
        </div>
    )
}
*/
export default Productos; //4) Exportar el componente para poder importarlo en el index y asi visualizarlo