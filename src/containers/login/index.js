// @flow
import React, { Component } from 'react';
import logo from './../../logo.svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SignUpAction } from './../../actions/AuthActions';


class Login extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps login", props, state)
    if (props.users.auth.isLoggedIn) {
      props.history.push('login')
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.props.history.push('signup')}>Navigate to SignUp</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("login mapStateToProps", state);
  return {
    users: state
  };
}

function matchDispatchToProps(dispatch) {
  console.log("login dispatch", dispatch);
  return bindActionCreators({ SignUpAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);


// export default Login;
