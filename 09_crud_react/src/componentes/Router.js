import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import Listado from './Listado';

class Router extends Component {
    state={
        posts:[]
    }

    obtenerPost = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                console.log(res.data)

                this.setState({
                    posts:res.data
                })
            })
    }

    componentDidMount(){
        this.obtenerPost();
    }


    render(){
    return ( 
        <BrowserRouter>
            <div className="container">
               <div className="row justify-content-center">
                    <Header/>
                    <Navegacion/>
                    <Switch>{/*Switch lo que permite es la navegacion entre las paginas*/}
                        <Route exact path="/" render={()=>{
                            return (
                                <Posts
                                    posts = {this.state.posts}
                                />
                            )
                        }}/>

                        
                    </Switch>
               </div> 
            </div>
        </BrowserRouter>
     )
    }
}
 
export default Router;