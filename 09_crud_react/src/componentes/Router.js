import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Formulario from './Formulario';
import swal from 'sweetalert';
import Editar from './Editar';


class Router extends Component {
    state={
        posts:[]
    }

    obtenerPost = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                //console.log(res.data)

                this.setState({
                    posts:res.data
                })
            })
    }

    borrarPost=(id)=>{
        console.log(id)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)    
        .then(resultado=>{
            if(resultado.status === 200){
                
                const posts = [...this.state.posts];
                //console.log(posts);

                let resultado = posts.filter(post => (
                    post.id != id
                ))

                //console.log(resultado)


                this.setState({
                    posts:resultado
                })

            }       
        })

    }

    crearPost = (post) =>{
        console.log(post)

        axios.post(`https://jsonplaceholder.typicode.com/posts`,{post})    
        .then(res =>{
            if(res.status === 201){
                swal("Post Creado!", "Se creó correctamente", "success");
                //console.log("El post se creó correctamente")
                let postId = {id:res.data.id}
                const nuevoPost = Object.assign({},res.data.post,postId)

                console.log(nuevoPost)

                this.setState(prevState => ({
                    posts:[...prevState.posts,nuevoPost]
                }))

            }
            
        })
    }

    editarPost=(postActualizado)=>{
        //console.log(postActualizado)

        const {id} = postActualizado;

        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{postActualizado})   
        .then(res=>{
            if(res.status === 200){

                swal("Actualizacion exitosa!", "Se han realizado correctamente los cambios!", "success");


                //console.log(res.data)
                let postId = res.data.id
                const posts = [...this.state.posts]
                const postEditar = posts.findIndex(post => postId === post.id)


                posts[postEditar] = postActualizado
                //console.log(posts[postEditar])

                this.setState({
                    posts
                })
            }
            
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
                                    borrarPost={this.borrarPost}
                                />
                            )
                        }}/>

                        <Route exact path="/post/:postId" render={(props) =>{
                            let idPost = props.location.pathname.replace('/post/','');
                            const posts = this.state.posts
                            let filtro;

                            filtro=posts.filter(post =>(
                                post.id === Number(idPost)
                            ))

                            return(
                                
                                <SinglePost
                                    post={filtro[0]}
                                />
                            )
                        }}                         
                        />

                        <Route exact path="/crear" render={()=>{
                            return (
                                <Formulario
                                    crearPost = {this.crearPost}                                    
                                />
                            )
                        }}/>


                        <Route exact path="/editar/:postId" render={(props) =>{
                            let idPost = props.location.pathname.replace('/editar/','');
                            const posts = this.state.posts;
                            let filtro;

                            filtro=posts.filter(post =>(
                                post.id === Number(idPost)
                            ))

                            return(
                                
                                <Editar
                                    post={filtro[0]}
                                    editarPost={this.editarPost}
                                />
                            )
                        }}                         
                        />

                    
                    </Switch>
               </div> 
            </div>
        </BrowserRouter>
     )
    }
}
 
export default Router;