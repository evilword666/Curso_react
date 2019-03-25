import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

state = { //El state siempre es un objeto
  citas: []
}


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
              />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
