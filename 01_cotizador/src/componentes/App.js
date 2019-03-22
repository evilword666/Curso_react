import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado';
class App extends Component {

  state = {
    resultado:'',
    datos:''
  }


  cotizarSeguro = (datos) =>{ //Arrow function
      console.log(datos);

      //Esto es un destructuring (como en python, asignar valores a varias variables)
      const {marca, plan, year} = datos;

      //Agregar una base de 2000
      let resultado = 2000;

      //Obtener la diferencia de años 
      const diferencia = obtenerDiferenciaAnio(year);
      //console.log("La diferencia es: "+diferencia);

      //por cada año restar el 3% al valor del seguro       
      resultado -=  (diferencia*3)*resultado/100;
      //console.log(resultado);

      //Americano 15% Asiatico 5%  y europeo 30%  de incremento al valor anual
      resultado =  calcularMarca(marca)*resultado;
      //console.log(resultado)

      //el plan del auto basico incrementa el valor el 20%  y el cobertura completa 50%
      let incrementoPlan = obtenerPlan(plan)

      //dependiendo del plan a incrementar
      resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

      console.log("Resultado: "+resultado)

      const datosAuto = {
        marca:marca,
        plan:plan,
        year:year
      }


      //Ya tenemos el costo
      this.setState({
        resultado : resultado,
        datos:datosAuto
      })



  }


  render() {
    return (

      <div className="contenedor">
        <Header
          titulo="Cotizador de Seguro de Auto"
        />        

        <div className="contenedor-formulario">


          <Formulario
            cotizarSeguro = {this.cotizarSeguro}
          />

          <Resumen
            datos = {this.state.datos}
            resultado = {this.state.resultado} 
          />

          <Resultado
                    resultado = {this.state.resultado}
          />

        </div>
      </div>
    );
  }
}

export default App;
