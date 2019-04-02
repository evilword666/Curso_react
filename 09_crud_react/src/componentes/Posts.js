import React, { Component } from 'react';
import Listado from './Listado';

class Posts extends Component {
    
    render() { 
        return ( 
            <div className="col-12  md-8">
                <h2 className="text-center">Post</h2>
                <Listado
                    Posts={this.props.posts}       
                />
            </div>
         );
    }
}
 
export default Posts;