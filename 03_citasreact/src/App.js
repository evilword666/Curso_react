import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

state = { //El state siempre es un objeto
  citas: []
}

/********************************************************/
/*********** Ciclo de vida de los componentes **********/
/********************************************************/
componentDidMount(){
  console.log("Esta listo")
  const citasLS = localStorage.getItem("citas")
  if(citasLS){
    this.setState({
      citas:JSON.parse(citasLS)
    })
  }

}

componentWillMount(){
  console.log("Yo me ejecuto antes!")

  
}

componentWillUnmount(){
  console.log("Yo hasta que cierra el componente")

}

componentDidUpdate(){
  console.log("Algo cambio")   
  localStorage.setItem(
    'citas',
    JSON.stringify(this.state.citas)
  )
  //console.log(localStorage.getItem("citas"))
}

/********************************************************/
/********************************************************/

  crearCita = (nuevaCita) =>{
      //console.log(cita)
      //Formas para copiar un arreglo actual e insertar un elemento al final
      const citas = [...this.state.citas, nuevaCita]; //Siempre tenemos que hacer una copia del state, y en este caso pasaremos una nueva cita
      console.log(citas)

/*
      //Formas para copiar un arreglo actual e insertar un elemento al final
      const citas = [...this.state.citas, nuevaCita]; //Siempre tenemos que hacer una copia del state, y en este caso pasaremos una nueva cita
*/

      this.setState({
        citas:citas
      });
  }

  borrarCita = id =>{
    console.log(id)

    //Obtener copia del state
    const citasActuales = [...this.state.citas]
    console.log("Antes...")
    console.log(citasActuales)
    
    //borra el elemento del state
    //.filter Es una forma de extraer elementos de un arreglo
    const citasResultados = citasActuales.filter(cita => cita.id !== id ) //Hace un filtro y elimina del arreglo el id que se le pasa
    console.log("Despues...")
    console.log(citasResultados)
    
    //actualizar el state
    this.setState({
      citas:citasResultados
    })

  }


  render() {
    return (
      <div className="container">
          <Header
            titulo={"Administrador de pacientes de Veterinaria"}
          />

          <div className="row">
            <div className="col-md-6">
              <AgregarCita
                  crearCita = {this.crearCita}
              />
            </div>
            <div className="col-md-6">
              <ListaCitas
                  citas={this.state.citas}  
                  borrarCita={this.borrarCita}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
