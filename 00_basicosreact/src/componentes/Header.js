import React from 'react';

/*
//Class component
class Header extends Component{    
    render(){
        const titulo = "Nuestra tienda virtual";
        return(
            <header>
                <h1>{titulo}</h1>                
            </header>
        )
    }
}
*/


//Functional component
//Si no re requieren componentes del ciclo de vida, o state o nada del formulario se recomienda usar functional components
//En caso contrario usar Class component

    const Header =  (props) => {
            return(
                <div>
                    <h1>{props.titulo}</h1>
                </div>
            )        
    }


export default Header;