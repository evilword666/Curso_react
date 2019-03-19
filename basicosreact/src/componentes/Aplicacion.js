//Crear un componente
//3 partes

import React,{Component} from 'react'; //1) Importarlo de React 
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component{ //2 Crear la clase del componente

    //constructor(props){ //Puede usarse sin el constructor 
    //    super()

      //  this.state = {            
        state = {            
                productos : []                                                                          
        }

    //}

    componentDidMount(){
        
        //console.log("YAAAA!!")
        
                    const productos = [
                                    {nombre:'Libro',precio:200},
                                    {nombre:'Disco de musica',precio:100},
                                    {nombre:'Instrumento musical',precio:800},
                                    {nombre:'Reproductor musical',precio:1500},
                                    {nombre:'Album edicion especial',precio:500}  
                                ]   
        
         
        
                                //Simulamos una solicitud a un api REST para cargar los datos de los productos
        setTimeout(() => {
            this.setState({ 
                productos : productos
            })
        }, 5000);

    }

    render (){ //3) El render siempre debe ir a menos que sea un stateless component


        return (
            <div>
                <Header
                    titulo="Nuestra tienda virtual"
                />               
                <Productos
                    productos={this.state.productos}
                />
                <Footer/>
            </div>
        )
    }
}

export default Aplicacion; //4) Exportar el componente para poder importarlo en el index y asi visualizarlo