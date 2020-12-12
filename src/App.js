import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Article from './components/Article';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Private from './components/Private';
import PrivateRoute from './routes/PrivateRoute';
import AuthProvider from './lib/AuthProvider';
import Author from './components/Author'

class App extends Component {
  render() {
    return (
      <AuthProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/private' component={Private} />
            <Route exact path='/article/:id' component={Article}/>
            <Route exact path='/author' component={Author}/>
          </Switch>
      </AuthProvider>
    );
  }
}

export default App;