import React,{Component} from 'react';
import {primeraMayuscula} from '../helper';


class Resumen  extends Component{

    mostrarResumen = () =>{
        const {marca,year,plan} = this.props.datos;

        if(!marca || !year || !plan) return null;
        return(
            <div className="resumen">
                <h2>Resumen de Cotizacion</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {year}</li>
                <li>Año del auto: {primeraMayuscula(plan)}</li>

            </div>
        )
    }

    render(){
        return(     
            <div>       
                {this.mostrarResumen()}


            </div>
        )
    }
}

export default Resumen;