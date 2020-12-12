import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom";
import postservice from '../lib/post-service'
import './style.css'

export class Home extends Component {
    state = {
        posts: [],
        filteredPosts:[]
    }

    getThePosts = async() => {
        const thePosts = await postservice.getAll()
        this.setState({
            posts: thePosts,
            filteredPosts:thePosts
        })
    }

    componentDidMount() {
        this.getThePosts()
    }

    filterPosts = (searchTerm) => {
        // convertimos la palabra buscada en minúsculas
        const searchedTerm = searchTerm.toLowerCase();
    
        // filtramos una copia de la lista original de comidas para devolver únicamente las comidas cuyo nombre (en minúsculas también) corresponden al término de búsqueda
        const filteredList = [...this.state.posts].filter( post => {
          return post.title.toLowerCase().includes(searchedTerm);
        })
    
        // actualizamos la lista de comidas filtradas (la que vamos a mostrar en el render())
        this.setState({filteredPosts: filteredList})
    }

    render() {
        const {filteredPosts} = this.state
         return (
            <div>
                <Navbar filterPosts={this.filterPosts} />
                {filteredPosts.length !== 0 ? filteredPosts.map((post)=>{
                    return <h1><Link to={`/article/${post._id}`}>{post.title}</Link></h1>
                }): null}
                <div className='main'>
                    <div className='title-flex'>
                        <div className='title-box'>
                        <h1 className='title'>RECETAS COMUNISTAS</h1>
                        <h1 className='title'>PARA UNA</h1>
                        <h1 className='title'>BUENA SALUD MENTAL</h1>
                        <div className='title-banderin'>
                            <img className='banderin' src='./images/banderin.png' alt='simbolito-comunista'/>
                        </div>
                        </div>
                    </div>
                    <div className='articles-flex'>
                        {this.state.filteredPosts.map(post=>
                            (<div className='article-box'>
                                <Link to={`/article/${post._id}`} id={post.id}>
                                    <p className='title-article'>{post.title}</p>
                                </Link>
                            </div>)
                        )}
                    </div>
                    <div>
                        <div className='red-background-title' >
                            <p>HISTORIAS REALES</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home
