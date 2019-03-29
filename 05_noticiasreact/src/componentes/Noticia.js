import React from 'react';
import PropTypes from 'prop-types';


const Noticia = (props) => {

    const {urlToImage, url, title, description, source} =  props.noticia //Hacer el destructuring ayuda mucho para obtener datos especificos de un arreglo

    //console.log("URL DE IMAGEN: "+urlToImage)
    const  imagen = (urlToImage)
    ?
    <div className="card-image">
        <img src={urlToImage} alt={title}/>
            <span className="card-title">
                {source.name}
            </span>
        </div>
    :'';


    return (
        <div className="col s12 m6 l4 ">
            <div className="card">
                    {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="blank" className="waves-effect waves-light btn">
                        Noticia Completa
                    </a>
                </div>
            </div>            
        </div>
    );
};

Noticia.propTypes = {
    Noticia: PropTypes.shape({
        
        urlToImage:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        source:PropTypes.object.isRequired,

    })
}

export default Noticia;