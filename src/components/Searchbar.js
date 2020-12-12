import React, { Component } from 'react';
import postservice from '../lib/post-service'


export class Searchbar extends Component {
    
    
    constructor(props) {

    
        super(props);
    
        console.log(props);
    
        this.state = {
            posts: this.props.posts,
            search:""
        }
    
        
          
        };
    


    

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        this.props.filterPosts(value);
    };

   

    

    render() {
        
        return (
            <div>
            <form onSubmit={this.handleFormSubmit}>
        <label>Spy our web:</label>
        <input 
          type="text" 
          className="input search-bar" 
          name="search" 
          placeholder="Search" 
          value={this.state.search} 
          onChange={this.handleChange} 
        />

        </form>
                
            </div>
        )
    }
}

export default Searchbar
