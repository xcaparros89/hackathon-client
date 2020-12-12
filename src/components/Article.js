import React, { Component } from 'react';
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import postservice from '../lib/post-service'
import './Article.css'

export class Article extends Component {

    state={
        post: {},
        id: '',
        creator:'' ,
        body:'',
        date: '',
        newMessage: false,
    }

    getThePost= async() =>{
        const {params} = this.props.match
        const thePost = await postservice.getPost(params.id)
        console.log(thePost)
        this.setState({
            post: thePost,
            creator: this.props.user.username,
            id: thePost._id
        })


        console.log(this.state.post)
    } 
    componentDidMount(){
        this.getThePost()
    }
    handleChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit= async() =>{
        const {id, creator, body, date} = this.state
        
        await postservice.addComment({id, creator, body, date})
        this.setState({
            creator: '',
            body:'',
            date: ''
        })
    }

    showForm(){
        this.setState({
            newMessage: !this.state.newMessage
        })
    }
    render() {
        const {post, creator, body, date} = this.state
        return (
            
            <div>
            <Navbar/>
                <div className='article'>
                    <div className='words'>
                        <p>{post.date}</p>
                        <h1>{post.title}</h1>
                        <button>Share this article</button>
                        <br></br>
                        <h3>{post.description}</h3>
                    </div>
                    <img src={post.foto} alt=""/>
                </div>
                {this.state.newMessage ? 
                        <div>
                        <div className="theButton">
                        <button className='button_white' onClick={() => this.showForm()}><img style={{width: 20}} src='/image.png' alt="" /> Hide form</button>
                        </div>
                    <form onSubmit={this.handleFormSubmit}>
                    <div className="form_part">
                  <label>Your comment:</label>
                  <input
                    type="text"
                    name="body"
                    value={body}
                    onChange={(e) => this.handleChange(e)}
                  />
                  </div>
                    <input className="button_comment" type="submit" value="Comment"/>
                    </form>
                </div> : <div className="theButton">
                        <button className='button_white' onClick={() => this.showForm()}><img style={{width: 20}} src='/image.png' alt="" /> New message</button>
                        </div>}
                <div>
                    <h6>Community comments: </h6>
                    {post.comments && post.comments.length !== 0 ? post.comments.map((comment) => {
                        return <div>{console.log(comment)}
                        <p>{comment.creator}: {comment.body}</p></div>
                    }) : null}

                </div>
                   
                
            <Link to="/">
              Back to Home
            </Link> 
                 
            </div>
        )
    }
}

export default withAuth(Article)
