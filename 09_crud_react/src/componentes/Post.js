import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import swal from 'sweetalert2';
import swal from 'sweetalert';

class Post extends Component {
    confirmarEliminacion = (e) =>{

        const  {id} = this.props.info;

        //console.log("Boton de eliminacion presionado!")

        swal({
            title: "Estas seguro?",
            text: "Una vez eliminado tu registro no podra recuperarse",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Si, borrar',
          })
          .then((willDelete) => {
            if (willDelete) {

                this.props.borrarPost(id)

              swal("Tu registro fue eliminado correctamente!", {
                icon: "success",
              });

              
            } else {
              swal("No se realizaron modificaciones");
            }
          });

        
    }

    render() { 
        const  {id,title} = this.props.info;

        return ( 
                        
                <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>
                      <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
                      <Link to={`/editar/${id}`} className="btn btn-warning">Editar</Link>
                      <button onClick={this.confirmarEliminacion} type="button" className="btn btn-danger">Borrar</button>
                    </td>
                </tr>
            
         );
    }
}
 
export default Post;