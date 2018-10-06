// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LoginAction } from './../actions/AuthActions';
import './login.scss';
//console.log("LoginCSS", LoginCSS)
// type HomePropsType = { /* ... */ };

class Login extends Component {
  render() {
    console.log("render method", this.props);
    return (
      <div className="check" style={{ backgroundColor: '' }}>
        <div className="content">
          <div className="checkleft">
            <div className="phase1">
              <div className="pbody">
                <div className="phead" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="col1">
                    <div className="login-head">Sigup</div>
                    <div className="login-text">We do not share your personal details with anyone.</div>
                    <img src="images/graphic1.png" width="80%" className="graphic1" />
                  </div>
                  <div className="col2">
                    <div className="login-box"><input type="number" className="txtt" placeholder="Your Mobile Number" /></div>
                    <br /><br /><br /><br />
                    <div className="login-box"><input type="password" className="txtt" placeholder="Create New Password" /></div>
                    <br /><br /><br /><br />
                    <div className="login-box"><input type="email" className="txtt" placeholder="Your Email ID" /></div>
                    <br /><br /><br />
                    <button className="butt1">Submit</button>
                    <a href="login.html"><button className="butt2">Existing User? Log in </button></a>
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
  console.log("mapStateToProps", state);
  return {
    users: state
  };
}

function matchDispatchToProps(dispatch) {
  console.log("dispatch", dispatch);
  return bindActionCreators({ LoginAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
