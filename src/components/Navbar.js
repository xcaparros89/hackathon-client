import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const {logout, isLoggedin } = this.props;
    return (
        <div>
        {isLoggedin && ( 
          <div>
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
    </div>
    );
  }
}

export default withAuth(Navbar);