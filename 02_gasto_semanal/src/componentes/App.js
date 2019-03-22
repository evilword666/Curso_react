import React, { Component } from 'react';
import '../css/App.css';
//import Encabezado from './Encabezado';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../Helpers';
import ControlPresupuesto from './ControlPresupuesto';
class App extends Component {

state = {
  presupuesto:'',
  restante:'',
  gastos:{}
}

componentDidMount(){
  this.obtenerPresupuesto();
}

obtenerPresupuesto = () =>{
  let presupuesto = prompt('Cual es el presupuesto?')
  let resultado = validarPresupuesto(presupuesto);
  if(resultado){
    console.log('valido')
    this.setState({
      presupuesto:presupuesto,
      restante:presupuesto
    })
  }else{
    this.obtenerPresupuesto()

  }
}

  agregarGasto = gasto =>{
    //tomar una copia del state actual
    const  gastos = {...this.state.gastos}; //Con esto se hace una copia (spread operator react)
    //console.log(gastos);
    
    //Agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;

    console.log(gastos)
    this.restarPresupuesto(gasto.cantidadGasto)


    //Ponerlo en state
    this.setState({
      gastos
    });
    
  }

//Restar del presupuesto cuando un gasto se agrega
  restarPresupuesto = cantidad =>{
    //leer el gasto
    console.log("El gasto agregado es "+ typeof cantidad)
    let restar = Number(cantidad);

    //Tomar una capia del estado actual
    let restante = this.state.restante;
    console.log(restante)

    restante -= restar;
    console.log(restante);

    this.setState({
      restante
    })
     //Lo restamos

    //Agregamos el nuevo state


  }



  render() {
    return (
      <div className="App container">
        <Header
          titulo = 'Gasto semanal'
        />
        <div className="contenido-principal contenido">

        <div className="row">
          <div className="one-half column">
            
            <Formulario
              agregarGasto = {this.agregarGasto}
            />
          </div>

          <div className="one-half column">
            
            <Listado
              gastos = {this.state.gastos}
            />

            <ControlPresupuesto
            
              presupuesto = {this.state.presupuesto}
              restante = {this.state.restante}

            />


          </div> 
        </div>
        
      </div>

      </div>
    )
  }
}

export default App;
