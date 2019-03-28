import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';


class App extends Component {

  state = {
    error:'',
    consulta:{},
    resultado:{}
  }

  componentDidUpdate(prevProvs, prevState){
    
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }
    
  }

  componentDidMount(){
    this.setState({
      error:false
    })
  }

  consultarApi = () =>{
    const {ciudad,pais}=this.state.consulta;

    if(!ciudad || ! pais){
      return null
    }

    //Leemos la URL y agregar el Api Key
    const appId = "a81e78526114357acf5141d5837748c3";

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    //console.log(url)

    //Hacemos un query con  fetch Api
    fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(datos=>{
      //console.log(datos)

      this.setState({
        resultado: datos
      })


    })
    .catch(error=>{
      console.log(error)
    })    

    console.log(ciudad)
    console.log(pais)
  }


  datosConsulta = respuesta =>{
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      console.log("Hay errores")
      this.setState({
        error:true
      })

    }else{
      console.log(respuesta)

        this.setState({
          consulta: respuesta,
          error:false
        })
        
      
    }
    
  }


  render() {


    const error = this.state.error;
    console.log(error)

    const {cod} = this.state.resultado //Aqui extraeremos la variable cod de la request que se realizó

    
    let resultado;

    if(error){
      resultado=<Error mensaje="Ambos campos son obligatorios"/>;
    }else if(cod === "404"){
      resultado=<Error mensaje="Ciudad no encontrada"/>
    }else{
      resultado = <Clima resultado = {this.state.resultado}/>
    }

    return (
      <div className="app">

        <Header
          titulo="Clima React"
        />

        <Formulario
          datosConsulta = {this.datosConsulta}
        />      
        {resultado}
      </div>
    );
  }
}

export default App;
