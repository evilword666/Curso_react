import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Nosotros from '../Nosotros/Nosotros';
import Error from '../Error/Error';
import infoProductos from '../../datos/datos.json';
import Productos from '../Productos/Productos';
import Header from '../Header/Header';
import SingleProducto from '../SingleProductos/SingleProducto';
import Navegacion from '../Navegacion/Navegacion';
import Contacto from '../Contacto/Contacto';


class Router extends Component {
    
    state={
        productos:[],
        terminoBusqueda:''
    }
    
    busquedaProducto = (busqueda) =>{
        if(busqueda.length > 3)
        {
            this.setState({
                terminoBusqueda:busqueda
            })
        }else{
            this.setState({
                terminoBusqueda:''
            })
        }

    }


    componentWillMount(){
        this.setState({
            productos:infoProductos
        })
    }


    render() { 

        let productos = [...this.state.productos];//Hay que hacer una copia de los productos del state {spread operator}
        let busqueda = this.state.terminoBusqueda;
        let resultado;

        if(busqueda !== ''){
            //console.log("No esta vacio")
            resultado = productos.filter(producto=>(
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) != -1
            ))

        }else{
            //console.log("Si esta vacio")
            resultado = productos;
            
        }

        return ( 
            
            <BrowserRouter>
            <Header/>
            <Navegacion/>
                <Switch>                    
                    <Route exact path='/'  render={()=>(
                        <Productos
                            productos = {resultado}
                            busquedaProducto={this.busquedaProducto}
                        />
                    )}/>   

                    <Route exact path='/Nosotros'  component={Nosotros}/>  

                    <Route exact path='/Productos'  render={() =>(
                        <Productos
                            productos = {resultado}
                            busquedaProducto={this.busquedaProducto}
                        />

                    )}/> 


                    <Route exact path='/producto/:productoId'  render={(props)=>{
                        //console.log(props)
                        let idProducto = props.location.pathname.replace('/producto/','')
                        console.log(idProducto)

                        return (
                            <SingleProducto
                                producto={this.state.productos[idProducto]}
                            />
                        )

                    }}/>   

                    <Route exact path='/Contacto'  component={Contacto}/>  


                     


                    <Route component={Error}/>   
                    
                </Switch>
            </BrowserRouter>
         );
    }
}
 
export default Router;