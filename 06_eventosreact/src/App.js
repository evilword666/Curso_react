import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Eventos  from './componentes/Eventos';


class App extends Component {

  token = "LWIBFU7FNQPM6LRSFTL3&locale=es_ES";
  ordenar='date';

  state={
    categorias:[],
    eventos:[]
  }

  componentDidMount(){
    this.obtenerCategorias();
  }

  obtenerCategorias = async() =>{
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;

    await fetch(url) // con await evitamos que se pause el programa, esto se hace en segundo plano
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(categorias=>{
      
      this.setState({
        categorias:categorias.categories
      })
    })

  }

  obtenerEventos = async(busqueda) => {        

    console.log("Entrando")
    let url=`https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&token=${this.token}`
    
    console.log(url)
 
    await fetch(url) // con await evitamos que se pause el programa, esto se hace en segundo plano
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(eventos=>{
      this.setState({
        eventos:eventos.events
      })
    })




  }


  render() {
    return (
      <div className="App">
        <Header/>

        <div className="uk-container">
          <Formulario
            categorias={this.state.categorias}
            obtenerEventos={this.obtenerEventos}
          />  

          <Eventos
            eventos={this.state.eventos}
          />


        </div>
        
      </div>
    );
  }
}

export default App;
