import React, { Component } from 'react';
import { Link } from "react-router-dom";
import postservice from '../lib/post-service'

export class Article extends Component {

    state={
        post: {}
    }

    getThePost= async() =>{
        const {params} = this.props.match
        const thePost = await postservice.getPost(params.id)
        console.log(thePost)
        this.setState({
            post: thePost
        })

        console.log(this.state.post)
    } 
    componentDidMount(){
        this.getThePost()
    }
    render() {
        const {post} = this.state
        return (
            <div>
                <h1>{post.title}</h1>
                <img src={post.foto} alt=""/>
                <h3>{post.description}</h3>
            
            <Link to="/">
              Back to Home
            </Link> 
                 
            </div>
        )
    }
}

export default Article
