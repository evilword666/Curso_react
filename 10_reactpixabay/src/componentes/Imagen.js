import React from 'react';

const Imagen = (props) => {
    //console.log(props.imagenes)
    const {largeImageURL, likes, previewURL, tags, views} = props.imagenes
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img className="car-img-top" src={previewURL} alt={tags}/>
                <div className="card-body">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-blog">Ver imagen</a>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Imagen;