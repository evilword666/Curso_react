import React, { Component } from 'react';
import imagen from './cryptomonedas.png';
import Formulario from './componentes/Formulario';
import axios from 'axios';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';


class App extends Component {

  state={
    resultado:{},
    monedaSeleccionada:'',
    criptoSeleccionada:'',
    cargando:false
  }

  cotizarCriptomoneda = async (cotizacion) =>{
    //console.log(cotizacion)

    const {moneda,criptomoneda} = cotizacion;

    //const url = `https://min-api.cryptocompare.com/data/price?fsym=${criptomoneda}&tsyms=${moneda}`;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    //console.log(url)



    await axios.get(url)
    .then(respuesta =>{
      this.setState({
        resultado:respuesta.data.DISPLAY[criptomoneda][moneda],
        cargando:true

      },()=>{
        //3 segundos despues cambiar a false
        setTimeout(() => {
          this.setState({
            cargando:false
          })
        }, 3000);
      })

    })

  }

  render() {

    const resultado = (this.state.cargando) 
    ? 
      <Spinner/> 
    : 
      <Resultado
        resultado = {this.state.resultado}
      />
    ;


    return (
      
      <div className="container">
        <div className="row">
          <div className="one-half column"> 
            <img src={imagen} alt="imagen" className="logotipo"/>
          </div>
          <div className="one-half column"> 
            
            <Formulario
              cotizarCriptomoneda = {this.cotizarCriptomoneda}
            />           

            {resultado}
          </div>          
        </div>  
      </div>
    );
  }
}

export default App;
