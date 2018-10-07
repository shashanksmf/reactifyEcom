// @flow
import React, { Component } from 'react';
import { StrictMode } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SignUpAction, HideSignUpError } from './../../actions/AuthActions';
import './../../assets/scss/login/index.scss';
import graphic1 from './../../assets/images/graphic1.png';

class SignUp extends Component {
  state = {
    mobile: '',
    email: '',
    password: '',
    signupResponse: {
      code: null
    }
  }

  static getDerivedStateFromProps(newProps, prevState) {
    const { users: { auth: { signupResponse: { code: responseCode = null } } = {} } = {} } = newProps;
    if (responseCode !== prevState.signupResponse.code) {
      if (responseCode == "SUCCESS") {
        setTimeout(() => {
          newProps.history.push('login')
        }, 3000)
      }
      return {
        ...prevState, ...newProps.users.auth
      }
    }
    return null;
  }


  submitLogin = () => {
    this.props.HideSignUpError();
    this.props.SignUpAction({ ...this.state });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    const { code: signUpResponseCode = "", response: { message = "" } = {} } = this.state.signupResponse;
    return (
      <div className="check">
        <div className="content">

          <div className="checkleft">
            <div className="phase1">
              <div className="pbody">
                <div className="phead" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="col1">
                    <div className="login-head">Sigup</div>
                    <div className="login-text">We do not share your personal details with anyone.</div>
                    <img src={graphic1} width="80%" className="graphic1" />
                  </div>
                  <div className="col2">
                    {signUpResponseCode == "ERROR" ? <div className="alert alert-warning">
                      <strong>SignUp</strong> {message}
                    </div> : null}
                    {signUpResponseCode == "SUCCESS" ? <div className="alert alert-success">
                      <strong>SignUp</strong> {message} Please Login
                    </div> : null}
                    <div className="login-box"><input type="number" className="txtt" name="mobile" placeholder="Your Mobile Number" onChange={this.handleChange} /></div>
                    <br /><br /><br /><br />
                    <div className="login-box"><input type="password" className="txtt" name="password" placeholder="Create New Password" onChange={this.handleChange} /></div>
                    <br /><br /><br /><br />
                    <div className="login-box"><input type="email" className="txtt" name="email" placeholder="Your Email ID" onChange={this.handleChange} /></div>
                    <br /><br /><br />
                    <button className="butt1" onClick={this.submitLogin}>Submit</button>
                    <a><button className="butt2" onClick={() => this.props.history.push('login')}>Existing User? Log in </button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    users: state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ SignUpAction, HideSignUpError }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
