import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  state = { username: "", password: "", repeatPassword:'', isEmpty:false, isDifferent:false };

  componentDidMount() {
    document.body.classList.add('home');
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password, repeatPassword } = this.state;
    const newUsername = username.trim();
    const newPassword = password.trim();
    const newRepeatPassword = repeatPassword.trim();
    if(!newUsername || !newPassword){
      this.setState({isEmpty:true, isDifferent:false})
    } else if(newRepeatPassword !== newPassword){
      this.setState({isEmpty:false, isDifferent:true})
    } else{
    this.setState({username:newUsername, password:newPassword, isEmpty:false, isDifferent:false})
    //console.log('Signup -> form submit', { username, password });
    this.props.signup({username:newUsername, password:newPassword });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, repeatPassword } = this.state;
    return (
      <> {this.props.isLoggedin && <Redirect to='/' />}
                    <div>
                        <form id="signup-form" onSubmit={this.handleFormSubmit}>
                            <div>
                              <input type="text" name="username" value={username} placeholder="Username" onChange={this.handleChange} />
                            </div>
                            <div>
                              <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                            </div>
                            <div>
                              <input type="password" name="repeatPassword" value={repeatPassword} onChange={this.handleChange}   placeholder="Repeat password" />
                            </div>
                            <p>{this.props.errorMessage}</p>
                            {this.state.isEmpty && <p>Write a username and password!</p>}
                            {this.state.isDifferent && <p>The passwords do not match!</p>}
                            <input type='submit' value='' />
                            <p style={{marginBottom:"0"}}>Already have an account? <Link to={"/login"} > Login</Link></p> 
                        </form>
                    </div>
    </>
    );
  }
}

export default withAuth(Signup);