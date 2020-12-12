import React, { Component } from 'react'
import Navbar from './Navbar'
import postservice from '../lib/post-service'

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
                    return <h1>{post.title}</h1>
                }): null}
            </div>
        )
    }
}

export default Home
