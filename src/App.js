import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import LoginComponent from './components/login/login.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({user}));
  }

  render() {
    if (this.user) {
      return (
        <div>

        </div>
      );
    } else {
      return (
        <div className="container-login">
          <div className="box-login">
            <LoginComponent />
            <div className="clearfix"></div>
          </div>
        </div>
      );
    }
  }
}

export default App;
