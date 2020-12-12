import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

class Login extends Component {
  state = { username: "", password: "", isEmpty:false };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const newUsername = username.trim();
    const newPassword = password.trim();
    if(newUsername && newPassword){
    this.setState({username:newUsername, password:newPassword, isEmpty:false})
    this.props.login({ username:newUsername, password:newPassword });
  } else {this.setState({isEmpty:true})}
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  // if(this.props.isLoggering) {
  //   return <Redirect to='/allRooms'></Redirect>
  // }
  render() {
    const { username, password } = this.state;
    return (
          <> {this.props.isLoggedin && <Redirect to='/' />}
                <div>
                    <form onSubmit={(e)=>this.handleFormSubmit(e)}>
                        <div>
                          <input type="text" name="username" value={username} placeholder="Username" onChange={this.handleChange} />
                        </div>
                        <div>
                            <input type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange} />
                        </div>
                        <p>{this.props.errorMessage}</p>
                        {this.state.isEmpty && <p className='error-message'>Write a username and password!</p>}
                        <input type='submit' value='' />
                        <p>Don't you have an account?</p>
                        <p><Link to={"/signup"}>Register</Link></p>
                    </form>
                </div>
    </>
    );
  }
}

export default withAuth(Login);
