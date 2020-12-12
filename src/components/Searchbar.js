import React, { Component } from 'react';
import "./Navbar.css";


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
            <div className="searchbar">
            
        <label>Spy our web:</label>
        <input 
          type="text" 
          className="input search-bar" 
          name="search" 
          
          value={this.state.search} 
          onChange={this.handleChange} 
        />

      
                
            </div>
        )
    }
}

export default Searchbar
