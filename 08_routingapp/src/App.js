import React, { Component } from 'react';
import Header from './componentes/Header/Header';
import Router from './componentes/Router/Router';


class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <Router/>
      </div>
    );
  }
}

export default App;
