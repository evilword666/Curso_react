import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
import './App.css';
class App extends Component {

  state={
    termino:'',
    imagenes:[],
    pagina:'',
    cargando:false,
    totalPaginas:''
  }

  datosBusqueda = (termino) =>{
    console.log(termino)
    this.setState({
      termino:termino,
      pagina:1      
    },()=>{
      this.consultarAPI();
    })
  }

  paginaAnterior=()=>{
    //leemos el state
    let pagina = this.state.pagina;

    //Si la pagina es 1 ya no podemos retroceder mas 
    if(pagina===1) return null

    //Restar a la pagina actual
    pagina-=1;

    //Agregar al state
    this.setState({
      pagina
    },()=>{
      this.consultarAPI();
      this.scroll();
    })

  }

  paginaSiguiente=()=>{
    
    let {pagina} = this.state;
    const {totalPaginas} = this.state;

    if(pagina === totalPaginas) return null
    pagina+=1;
    console.log(pagina)
    this.setState({
      pagina
    },()=>{
      this.consultarAPI();
      this.scroll();
    })
  }

  consultarAPI = async() =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=12147253-9db2f03c5cb808672e1ab7b41&q=${termino}&per_page=30&page=${pagina}`;
    console.log(url)

    await fetch(url)
    .then(respuesta=>{
      
      this.setState({
        cargando:true
      })

      return respuesta.json();

    })
    .then(resultado =>{
      
      const totalPaginacion = Math.ceil(resultado.totalHits/30)
      setTimeout(() => {
        this.setState({
          imagenes:resultado.hits,
          cargando:false,
          totalPaginas:totalPaginacion
        })
      }, 2000);

      console.log(totalPaginacion)
    })
  }

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('auto','start'); 
  }

  render() {

    const cargando = this.state.cargando;
    let resultado;
    
    if(cargando){
        resultado = <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    }else{
        resultado = <Resultado
                          imagenes={this.state.imagenes}
                          paginaAnterior={this.paginaAnterior}
                          paginaSiguiente={this.paginaSiguiente}
                          pagina={this.state.pagina}
                          totalPaginas={this.state.totalPaginas}
                    />
    }


    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador 
            datosBusqueda = {this.datosBusqueda}
          />
        </div>    

        <div className="row justify-content-center" >
            {resultado}
        </div>

      </div>
    );
  }
}

export default App;
