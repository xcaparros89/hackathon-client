import React, { Component } from 'react'
import Navbar from './Navbar'
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
                <p>Title</p>
                <div className='articles-flex'>
                    {this.state.posts.map(post=>
                        (<div className='article-box'><Link to={`/article/${post.id}`} id={post.id}>
                            <p>{post.title}</p>
                        </Link></div>)
                    )}
                </div>
            </div>
        )
    }
}

export default Home
