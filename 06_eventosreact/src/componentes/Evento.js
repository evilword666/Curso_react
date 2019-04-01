import React from 'react';
import PropTypes from 'prop-types';

const Evento = (props) => {   
    const tamDef = 250; 

    const {name} = props.info;

    //console.log(props.info)
    
    if(!name) return null 

    let desc = props.info.description.text;

    

    if(desc !== null){
        //console.log("Tam: "+desc.length)
        //console.log("Tipo de elemento: "+typeof(desc.length))

        if(desc.length >= tamDef){
            desc=desc.substr(0,250)
            desc+='...';
            
            //console.log("Si supera el tamaño definido: "+desc.length+" es mayor que "+tamDef)
        }else{
            //console.log("No entra a la condicion: "+desc.length+" es menor que "+tamDef)
        }

    }

    return ( 
        <div>
            
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {props.info.logo !== null ?
                        <img src={props.info.logo.url} alt={props.info.name.text}/>
                    :''
                    }
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{props.info.name.text}</h3>
                    <p>{desc}</p>
                </div>

                <div className="uk-card-footer">
                    <a className="uk-button uk-button-secondary" href={props.info.url} target="_blank">
                        Mas información
                    </a>
                </div>
            </div>

        </div>
     );
}
 
Evento.propType = {
    info:PropTypes.object.isRequired
}


export default Evento;