import React, { Component } from 'react'
import Navbar from './Navbar'
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
            </div>
        )
    }
}

export default Home
