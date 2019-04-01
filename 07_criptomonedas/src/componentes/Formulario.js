import React, { Component } from 'react';
import axios from 'axios';
import Criptomoneda from  './Criptomoneda';
import Error from './Error';
import PropTypes from 'prop-types';

class Formulario extends Component {



    state = { 
        criptomonedas:[],
        moneda:'',
        criptomoneda:'',
        error:false 
     }


     async componentWillMount(){ //Antes de que el componente cargue va a hacer el llamado
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

        await axios.get(url)
                .then(respuesta =>{
                    //console.log(respuesta)
                    this.setState({
                        criptomonedas:respuesta.data.Data
                    })
                })
     }

     //Se ejecuta cada que el usuario elige una opcion del select
     obtenerValor = e =>{

        //console.log(e.target.value)

        const {name,value} = e.target;
        this.setState({
            [name] : value
        })


     }

     //Validar que el usuario elija las monedas
     cotizarMoneda=(e)=>{
        e.preventDefault()
        //console.log("Entrando")

        const  {moneda,criptomoneda} = this.state;

        //Validar que halla algo elegido
        if(moneda === '' || criptomoneda ===''){
            this.setState({
                error:true
            }, () =>{
                setTimeout(() => {
                    this.setState({
                        error:false
                    })
                }, 3000);
            })

            return;
        }

        //Crear el objeto
        const cotizacion = {
            moneda,
            criptomoneda
        }

        //Enviar los datos al componente App.js para cotizar
        this.props.cotizarCriptomoneda(cotizacion);
    }

    render() { 

        const mensaje = (this.state.error) ? <Error mensaje="Ambos campos son obligatorios"/> : '';

        return ( 
            <form onSubmit={this.cotizarMoneda}>
                
                <div className="row">
                <h1>Cotiza Criptomonedas al instante</h1>
                {mensaje}
                    <label>Elige tu Moneda</label>
                    <select name="moneda"
                        onChange={this.obtenerValor}
                        className="u-full-width">
                            <option value="">Elige tu moneda</option>
                            <option value="USD">Dolar Estadounidense</option>
                            <option value="MXN">Peso Mexicano</option>
                            <option value="GBP">Libras</option>
                            <option value="EUR">Euros</option>
                    </select>
                </div>

                <div className="row">                
                <div>                    
                    <label>Elige tu Criptomoneda</label>
                    <select
                        onChange={this.obtenerValor}
                        name="criptomoneda" className="u-full-width">
                        <option value="">Elige tu moneda</option>
                            {Object.keys(this.state.criptomonedas).map(key=>(
                                <Criptomoneda
                                    key={key}
                                    criptomoneda = {this.state.criptomonedas[key]}
                                />
                            ))}

                        </select>
                </div>
                </div>
                <input className="button-primary u-full-width" type="submit" value="Cotizar" />
            </form>
         );
    }
}
 
Formulario.propTypes = {
    cotizarCriptomoneda:PropTypes.func.isRequired
}
export default Formulario;