import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import './style.css'

export class Home extends Component {
    state={articles:[{title:'title', id:'1', text:'text'}, {title:'title2', id:'2', text:'text'}, {title:'title2', id:'2', text:'text'}, {title:'title2', id:'2', text:'text'}, {title:'title2', id:'2', text:'text'}, {title:'title2', id:'2', text:'text'}, {title:'title2', id:'2', text:'text'}, {title:'title2', id:'2', text:'text'}, {title:'title2', id:'2', text:'text'}, {title:'title2', id:'2', text:'text'}]};
    render() {
        return (
            <div>
                <Navbar />
                <p>Title</p>
                <div className='articles-flex'>
                    {this.state.articles.map(article=>
                        (<div className='article-box'><Link to={`/article/${article.id}`} id={article.id}>
                            <p>{article.title}</p>
                        </Link></div>)
                    )}
                </div>
            </div>
        )
    }
}

export default Home
