import React, { Component } from 'react'
import Navbar from './Navbar'
import postservice from '../lib/post-service'
import { Link } from 'react-router-dom'

export class Home extends Component {
    state = {
        posts: []
    }

    getThePosts = async() => {
        const thePosts = await postservice.getAll()
        console.log(thePosts)
        this.setState({
            posts: thePosts
        })
    }

    componentDidMount() {
        this.getThePosts()
    }
    render() {
        const {posts} = this.state
        return (
            <div>
                <Navbar />
                {posts.length !== 0 ? posts.map((post)=>{
                    return <h1><Link to={`/article/${post._id}`}>{post.title}</Link></h1>
                }): null}
            </div>
        )
    }
}

export default Home
