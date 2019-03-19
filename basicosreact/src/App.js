import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const nombre = "Xavi";
    const empleado = {
      nombre:'Juan',
      trabajo:'Desarrollador Web'
    }
    return (
      //React sin JSX
      /*
      React.createElement(
        'h1',
        {id:'titulo',className:'encabezado'},
        'hola mundo'
    )
    */
   /*
   React.createElement(
     'div', //Tipo de componente que se quiere crear
     null, //Propiedades del componente
     //'Hola desde el componente' //Contenido del componente (hijos)
     React.createElement(
       'input',
        {type:"text",value:'Value para el input'}             
     )
     */
    //React con JSX
    <div>
      <h1>Aprendiendo React</h1>
      <p>Hola {nombre}</p>
    </div>

   

    );
  }
}

export default App;
