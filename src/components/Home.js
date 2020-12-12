import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom";
import postservice from '../lib/post-service'
import './style.css'

export class Home extends Component {
    state = {
        posts: []
    }

    getThePosts = async() => {
        const thePosts = await postservice.getAll()
        this.setState({
            posts: thePosts
        })
    }

    componentDidMount() {
        this.getThePosts()
    }
    render() {
        return (
            <div>
                <Navbar />
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
                        {this.state.posts.map(post=>
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
