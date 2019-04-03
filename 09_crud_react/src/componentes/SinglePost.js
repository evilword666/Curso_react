import React, { Component } from 'react';

class SinglePost extends Component {
    
    mostrarPost = (props) =>{
        //console.log(typeof(props.post))
//        console.log(props.post['title'])


        if(!props.post) return null;
        console.log(props.post)

        const {title, body, userId } = props.post;
        
        return(
            <React.Fragment>
                <h1>{title}</h1>
                <p>{"Author: "+userId}</p>
                {body}
                
            </React.Fragment>
        )
        
    }


    render() {
        
        //console.log(this.props.post)
        return( 
            <div className="col-12 col-md-8">
                {this.mostrarPost(this.props)}
            </div>  
        )
    }
}
 
export default SinglePost;