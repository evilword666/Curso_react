import React, { Component } from 'react';
import Post from './Post';
class Listado   extends Component {
    

    mostrarPosts = () =>{
        const posts = this.props.posts;
        //console.log(posts)
        if(posts.length === 0) return null //Se detiene en caso de que el tamaño de posts sea 0

        return (
        <React.Fragment>
            {Object.keys(posts).map(post => (
                <Post
                    key={post}
                    info={this.props.posts[post]}
                    borrarPost={this.props.borrarPost}
                />
            ))}
        </React.Fragment>
        )
    }

    render() { 
        

        return ( 
            <table className="table">
                <thead>
                    <tr>                        
                            <th scope="col">ID</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Acciones</th>
                            <th scope="col">ID</th>                        
                    </tr>
                </thead>
                <tbody>
                    {this.mostrarPosts()}
                </tbody>                
            </table>
         );
    }
}
 
export default Listado ;