//Crear un componente
//3 partes

import React,{Component} from 'react'; //1) Importarlo de React 


class Producto extends Component{ //2 Crear la clase del componente
    render (){ //3) El render siempre debe ir a menos que sea un stateless component

        const {nombre, precio} = this.props.producto;

        return (            
            <div>
                <h2>{nombre}</h2>
                <p>{precio}</p>
            </div>
        )
    }
}

export default Producto; //4) Exportar el componente para poder importarlo en el index y asi visualizarlo