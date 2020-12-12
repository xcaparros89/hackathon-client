import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import "./Navbar.css";

import SearchBar from './Searchbar'




class Navbar extends Component {

  
  constructor(props) {

    
    super(props);


    this.state = {
        
    }
 
    };


  render() {
    const {logout, isLoggedin } = this.props;
    return (
        <div className="navbar">
        {isLoggedin && ( 
          <div>
            <Link to={"/"}>
                <button><img src="./images/star.png" alt="peine"/></button>
              </Link>
              <Link to={"/"}>
                <button>Home</button>
              </Link>
              <Link to={"/"}>
                <button onClick={logout}>Logout</button>
              </Link>
              <Link to={"/author"}>
                <button>Author</button>
              </Link>
              
          </div>
          
      )}
      {!isLoggedin && ( 
          <div>
          <Link to={"/"}>
            <button><img src="./images/star.png" alt="peine"/></button>
          </Link>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={'/login'}>
          <button>Login</button>
        </Link>
        <Link to={"/signup"}>
          <button>Signup</button>
        </Link>
        <Link to={"/author"}>
          <button>Author</button>
        </Link>
       
        </div>
    )}
     <SearchBar filterPosts={this.props.filterPosts} posts={this.state.posts}/>
    </div>
    );
  }
}

export default withAuth(Navbar);