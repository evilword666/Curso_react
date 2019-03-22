import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import App from './App'; //Este es el nombre de la pagina que se importara, va hasta abajo 
import Aplicacion from './componentes/Aplicacion'
import * as serviceWorker from './serviceWorker';

//React sin JSX




//Dos parametros: 1) Que componente va a imprirmir(titulo) y donde lo va a imprimir
ReactDOM.render(  <Aplicacion/> ,document.getElementById('root')); //Recordar que el nombre del componente va entre la etiqueta < />


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
